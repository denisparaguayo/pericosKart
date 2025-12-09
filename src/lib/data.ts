export type PodiumPosition = {
	position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	driverId: string;
};

export type Driver = {
	id: string; // slug para la URL
	name: string;
	number?: number;
	team?: string;
	country?: string;
	city?: string;
	helmetColor?: string;
	photo?: string;
	bio?: string;
};

export const drivers: Driver[] = [
	// 👉 Datos completos que ya diste

	{
		id: 'eduardo-aguilera',
		name: 'Eduardo Aguilera',
		number: 666,
		team: "E'A Racing",
		city: 'Asunción',
		helmetColor: 'Rojo',
		photo: '/pilotos/edu-aguilera.jpg',
		bio: 'Seco y Peligroso, en busca de la felicidad, rápido y furioso.',
	},
	{
		id: 'denis-cantero',
		name: 'Denis R. Cantero',
		number: 71,
		team: 'Mbarete Racing',
		city: 'Asunción',
		helmetColor: 'Naranja y Negro',
		photo: '/pilotos/denis-cantero.jpg',
		bio: 'Explosivo en las primeras vueltas, no le tiene miedo a nadie.',
	},
	{
		id: 'monse-aranda',
		name: 'Monse Aranda',
		number: 10,
		team: 'Woman in Command',
		city: 'Lambaré',
		helmetColor: 'rosa y negro',
		photo: '/pilotos/monse-aranda.jpg',
		bio: '',
	},
	{
		id: 'pao-irala',
		name: 'Pao Irala',
		number: 33,
		team: 'H&A',
		city: 'Capiata-Caacupe',
		helmetColor: 'Negro y Lila',
		photo: '/pilotos/pao-irala.jpg',
		bio: "You shouldn't speak without knowing.",
	},

	// 👉 Resto de los pilotos SOLO con nombre (sin inventar nada)

	{
		id: 'luciano-amarilla',
		name: 'Luciano Amarilla',
		number: 3,
		team: 'Mbarete Racing',
		city: 'Asunción',
		helmetColor: 'Fibra de Carbono, Naranja, Gris y Negro',
		photo: '/pilotos/luciano-amarilla.jpeg',
		bio: 'Sin miedo, ambicioso',
	},
	{
		id: 'fran-servin',
		name: 'Fran Servin',
		number: 3,
		team: 'Hakembo',
		city: 'Asunción',
		helmetColor: 'rojo, amarillo, celeste, azul',
		photo: '/pilotos/fran-servin.jpg',
		bio: 'Sin miedo, ambicioso',
	},
	{
		id: 'arami-garcete',
		name: 'Arami Garcete',
		number: 7,
		team: 'HyA',
		city: 'Yaguaron',
		helmetColor: 'lila y rosa',
		photo: '/pilotos/arami.jpg',
		bio: 'hauu',
	},
	{
		id: 'noel-perez',
		name: 'Noel Perez',
		number: 520,
		team: 'Mad Max',
		city: 'Asunción',
		helmetColor: 'negro, dorado, blanco',
		photo: '/pilotos/noel-perez.jpg',
		bio: 'lo único imposible es aquello que no lo intentas',
	},
	{
		id: 'fede-crichi',
		name: 'Fede Crichi',
	},
	{
		id: 'frank-daniel',
		name: 'Frank Daniel',
	},

	{
		id: 'willian',
		name: 'Willian',
	},
	{
		id: 'fran-candia',
		name: 'Fran Candia',
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
