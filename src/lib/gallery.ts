import { races } from './data';

export type GalleryAlbum = {
	id: string;
	title: string;
	date?: string;
	track?: string;
	coverImage: string;
	images: string[];
	category?: 'race' | 'social';
};

// 🔥 Carpetas sociales manuales (no son carreras)
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
	// Podés agregar más acá
};

const imageModules = import.meta.glob(
	'../assets/galeria/*/*.{jpg,jpeg,png,webp,avif}',
	{
		eager: true,
		as: 'url',
	}
);

const albumsMap = new Map<string, GalleryAlbum>();

for (const [path, url] of Object.entries(imageModules)) {
	const parts = path.split('/');
	const folder = parts[parts.length - 2];

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
			coverImage: url,
			images: [],
			category: race ? 'race' : manual?.category ?? 'social',
		};

		albumsMap.set(folder, album);
	}

	album.images.push(url);
}

// Ordenar: primero carreras por fecha, luego sociales sin fecha
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
