// src/lib/gallery.ts
import { races } from './data';

export type GalleryMedia = {
	url: string;
	isVideo: boolean;
};

export type GalleryAlbum = {
	id: string;
	title: string;
	date?: string;
	track?: string;
	coverImage: string;
	images: GalleryMedia[];
	category?: 'race' | 'social';
};

// Carpetas sociales/manuales (no son carreras)
const manualAlbums: Record<
	string,
	{
		title: string;
		category?: 'social' | 'race';
	}
> = {
	'salida-viernes': {
		title: 'Salida de viernes con los amigos',
		category: 'social',
	},
	'asado-en-equipo': {
		title: 'Asado en equipo',
		category: 'social',
	},
	// Agregá más si querés:
	// "taller": { title: "Día de taller", category: "social" },
};

// Imágenes + videos dentro de src/assets/galeria/*/*
const mediaModules = import.meta.glob(
	'../assets/galeria/*/*.{jpg,jpeg,png,webp,avif,mp4,mov,webm}',
	{
		eager: true,
		as: 'url',
	}
);

const albumsMap = new Map<string, GalleryAlbum>();

for (const [path, url] of Object.entries(mediaModules)) {
	const parts = path.split('/');
	const folder = parts[parts.length - 2]; // nombre de la carpeta

	let album = albumsMap.get(folder);
	if (!album) {
		const race = races.find((r) => r.id === folder);
		const manual = manualAlbums[folder];

		album = {
			id: folder,
			title: race
				? `Ronda ${race.round} · ${race.track}`
				: manual
				? manual.title
				: folder,
			date: race?.date,
			track: race?.track,
			coverImage: url, // primera media como cover
			images: [],
			category: race ? 'race' : manual?.category ?? 'social',
		};

		albumsMap.set(folder, album);
	}

	const ext = path.split('.').pop()?.toLowerCase();
	const isVideo = ['mp4', 'mov', 'webm'].includes(ext ?? '');

	album.images.push({ url, isVideo });
}

// Ordenar: por fecha (carreras primero), luego sociales
export const galleryAlbums: GalleryAlbum[] = Array.from(
	albumsMap.values()
).sort((a, b) => {
	const ad = a.date ? new Date(a.date).getTime() : 0;
	const bd = b.date ? new Date(b.date).getTime() : 0;
	return bd - ad;
});

export function getAlbumById(id: string): GalleryAlbum | undefined {
	return galleryAlbums.find((a) => a.id === id);
}
