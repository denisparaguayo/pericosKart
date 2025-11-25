export type Driver = {
	id: string; // slug para la URL
	name: string;
	number: number;
	team: string;
	country: string;
	city?: string;
	helmetColor?: string;
	photo?: string; // ruta en /public
	bio?: string;
};

export type PodiumPosition = {
	position: 1 | 2 | 3;
	driverId: string;
};

export type RaceResult = {
	id: string;
	round: number;
	date: string; // "2025-11-10"
	track: string;
	layout?: string;
	fastestLap: {
		driverId: string;
		time: string; // "00:52.345"
	};
	podium: PodiumPosition[];
};

export const drivers: Driver[] = [
	{
		id: 'denis-cantero',
		name: 'Denis Cantero',
		number: 71,
		team: 'Mbarete Racing',
		country: 'Paraguay',
		city: 'Asunción',
		helmetColor: 'Morado y negro',
		photo: '/pilotos/denis.jpg',
		bio: 'Piloto amateur, obsesionado con bajar décimas en cada vuelta.',
	},
	{
		id: 'luciano-amarilla',
		name: 'Luciano Amarilla',
		number: 11,
		team: 'Mbarete Racing',
		country: 'Paraguay',
		city: 'Asunción',
		helmetColor: 'Morado y negro',
		photo: '/pilotos/luciano.jpg',
		bio: 'Consistente en ritmo de carrera, fuerte en stint largos.',
	},
	{
		id: 'carlos-davalos',
		name: 'Carlos Davalos',
		number: 17,
		team: 'Dávalos Motorsport',
		country: 'Paraguay',
		helmetColor: 'Negro y dorado',
		photo: '/pilotos/carlos.jpg',
		bio: 'Especialista en frenadas tardías y maniobras agresivas.',
	},
	{
		id: 'fede-crichi',
		name: 'Fede Crichi',
		number: 22,
		team: 'Moñai Driff',
		country: 'Paraguay',
		helmetColor: 'Azul y amarillo',
		photo: '/pilotos/fede.jpg',
		bio: 'Muy rápido en clasificación, siempre buscando la pole.',
	},
	{
		id: 'frank-daniel',
		name: 'Frank Daniel',
		number: 27,
		team: 'FD Performance',
		country: 'Paraguay',
		helmetColor: 'Verde flúor',
		photo: '/pilotos/frank.jpg',
		bio: 'Explosivo en las primeras vueltas, no le tiene miedo a nadie.',
	},
	{
		id: 'edu-aguilera',
		name: 'Edu Aguilera',
		number: 33,
		team: 'Aguilera Kart',
		country: 'Paraguay',
		helmetColor: 'Blanco con detalles rojos',
		photo: '/pilotos/edu.jpg',
		bio: 'Muy prolijo, casi no comete errores en carrera.',
	},
	{
		id: 'monse-aranda',
		name: 'Monse Aranda',
		number: 44,
		team: 'Woman in Command',
		country: 'Paraguay',
		helmetColor: 'Rosa y negro',
		photo: '/pilotos/monse.jpg',
		bio: 'Gran ritmo en aire limpio, peligrosa si sale cerca de la punta.',
	},
	{
		id: 'noel-perez',
		name: 'Noel Perez',
		number: 55,
		team: 'NP Racing',
		country: 'Paraguay',
		helmetColor: 'Celeste y blanco',
		photo: '/pilotos/noel.jpg',
		bio: 'Amante de las vueltas rápidas, siempre busca la Fastest Lap.',
	},
	{
		id: 'fran-servin',
		name: 'Fran Servin',
		number: 69,
		team: 'Servin Motorsport',
		country: 'Paraguay',
		helmetColor: 'Naranja y negro',
		photo: '/pilotos/fran-servin.jpg',
		bio: 'Muy fuerte en maniobras rueda a rueda.',
	},
	{
		id: 'willian',
		name: 'Willian',
		number: 88,
		team: 'Willian Racing',
		country: 'Paraguay',
		helmetColor: 'Verde y blanco',
		photo: '/pilotos/willian.jpg',
		bio: 'Largo agresivo, no regala la primera vuelta.',
	},
	{
		id: 'fran-candia',
		name: 'Fran Candia',
		number: 99,
		team: 'Candia Kart',
		country: 'Paraguay',
		helmetColor: 'Amarillo y negro',
		photo: '/pilotos/fran-candia.jpg',
		bio: 'Especialista en remontadas desde el fondo.',
	},
];

// 🏁 Carreras de ejemplo. Podés cambiar fechas, circuitos y resultados.
export const races: RaceResult[] = [
	{
		id: '2025-r1-kartodromo-nacional',
		round: 1,
		date: '2025-11-24',
		track: 'karting Club Paraguayo "KCP" ',
		layout: 'Oficial',
		fastestLap: {
			driverId: 'fede-crichi',
			time: '00:40.100',
		},
		podium: [
			{ position: 1, driverId: 'fede-crichi' },
			{ position: 2, driverId: 'edu-aguilera' },
			{ position: 3, driverId: 'denis-cantero' },
		],
	},
];

// ─────────────────────────────
// Helpers
// ─────────────────────────────

function timeStringToMs(time: string): number {
	// formato "MM:SS.mmm" o "SS.mmm"
	const [minPart, secPartRaw] = time.includes(':')
		? time.split(':')
		: ['0', time];

	const minutes = parseInt(minPart, 10);
	const [secPart, msPartRaw] = secPartRaw.split('.');
	const seconds = parseInt(secPart, 10);
	const ms = parseInt(msPartRaw.padEnd(3, '0'), 10);

	return minutes * 60_000 + seconds * 1_000 + ms;
}

export function getDriverById(id: string): Driver | undefined {
	return drivers.find((d) => d.id === id);
}

export function getLastRace(): RaceResult | null {
	if (races.length === 0) return null;
	return races[races.length - 1];
}

export function getOverallFastestLap(): {
	race: RaceResult;
	driver: Driver;
	time: string;
} | null {
	if (races.length === 0) return null;

	let best: {
		race: RaceResult;
		driver: Driver;
		time: string;
		ms: number;
	} | null = null;

	for (const race of races) {
		const ms = timeStringToMs(race.fastestLap.time);
		const driver = getDriverById(race.fastestLap.driverId);
		if (!driver) continue;

		if (!best || ms < best.ms) {
			best = {
				race,
				driver,
				time: race.fastestLap.time,
				ms,
			};
		}
	}

	if (!best) return null;
	const { race, driver, time } = best;
	return { race, driver, time };
}
