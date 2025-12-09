// src/lib/data.ts

// =======================
// TIPOS
// =======================

export type Driver = {
	id: string;
	name: string;
	number?: number;
	team?: string;
	city?: string;
	helmetColor?: string;
	photo?: string;
	bio?: string;
	drivingStyle?: string;
	category?: string;
};

export type PodiumPosition = {
	position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	driverId: string;
	// tiempo de mejor vuelta personal en esa fecha (segundos con 3 decimales)
	time?: string;
};

export type RaceResult = {
	id: string;
	round: number;
	date: string; // YYYY-MM-DD
	track: string;
	layout?: string;
	fastestLap: { driverId: string; time: string } | null;
	podium: PodiumPosition[];
};

// =======================
// PILOTOS
// =======================

export const drivers: Driver[] = [
	// PRO
	{
		id: 'giovanni-crichigno',
		name: 'Giovanni Crichigno',
		number: 16,
		team: 'Moñai Driff',
		city: 'Mariano Roque Alonso',
		helmetColor: 'lila y Blanco',
		photo: '/pilotos/giovanni-crichigno.jpg',
		bio: '',
		category: 'Pro',
	},
	{
		id: 'luciano-amarilla',
		name: 'Luciano Amarilla',
		number: 3,
		team: 'Mbarete Racing',
		city: 'Asunción',
		helmetColor: 'Fibra de Carbono, Naranja, Gris y Negro',
		photo: '/pilotos/luciano-amarilla.jpeg',
		bio: 'Sin miedo, ambicioso.',
		category: 'Pro',
	},

	// EVO
	{
		id: 'eduardo-aguilera',
		name: 'Eduardo Aguilera',
		number: 666,
		team: "E'A Racing",
		city: 'Asunción',
		helmetColor: 'Rojo',
		photo: '/pilotos/edu-aguilera.jpg',
		bio: 'Seco y Peligroso, en busca de la felicidad, rápido y furioso.',
		category: 'Evo',
	},
	{
		id: 'willian-benitez',
		name: 'Willian Benítez',
		number: 15,
		team: 'Moñai Driff',
		city: 'Mariano Roque Alonso',
		helmetColor: 'lila y Blanco',
		photo: '/pilotos/willian-benitez.jpg',
		bio: '',
		category: 'Evo',
	},

	// ACADEMY
	{
		id: 'monse-aranda',
		name: 'Monse Aranda',
		number: 10,
		team: 'Woman in Command',
		city: 'Lambaré',
		helmetColor: 'Rosa y Negro',
		photo: '/pilotos/monse-aranda.jpg',
		bio: '',
		category: 'Academy',
	},
	{
		id: 'arami-garcete',
		name: 'Arami Garcete',
		number: 7,
		team: 'HyA',
		city: 'Yaguarón',
		helmetColor: 'Lila y Rosa',
		photo: '/pilotos/arami.jpg',
		bio: '',
		category: 'Academy',
	},
	{
		id: 'pao-irala',
		name: 'Pao Irala',
		number: 33,
		team: 'H&A',
		city: 'Capiatá – Caacupé',
		helmetColor: 'Negro y Lila',
		photo: '/pilotos/pao-irala.jpg',
		bio: "You shouldn't speak without knowing.",
		category: 'Academy',
	},

	// ROOKIE
	{
		id: 'denis-cantero',
		name: 'Denis R. Cantero',
		number: 71,
		team: 'Mbarete Racing',
		city: 'Asunción',
		helmetColor: 'Naranja y Negro',
		photo: '/pilotos/denis-cantero.jpg',
		bio: 'Explosivo en las primeras vueltas, no le tiene miedo a nadie.',
		category: 'Rookie',
	},
	{
		id: 'francisco-candia',
		name: 'Francisco Candia',
		number: 17,
		team: 'Sin Equipo',
		city: 'Asunción',
		helmetColor: '',
		photo: '/pilotos/francisco-candia.jpg',
		bio: '',
		category: 'Rookie',
	},
	{
		id: 'francisco-rios',
		name: 'Francisco Ríos',
		number: 13,
		team: 'Hakembo',
		city: 'Luque',
		helmetColor: '',
		photo: '/pilotos/francisco-rios.jpg',
		bio: '',
		category: 'Rookie',
	},
	{
		id: 'noel-perez',
		name: 'Noel Perez',
		number: 520,
		team: 'Mad Max',
		city: 'Asunción',
		helmetColor: 'Negro, dorado, blanco',
		photo: '/pilotos/noel-perez.jpg',
		bio: 'Lo único imposible es aquello que no lo intentas.',
		category: 'Rookie',
	},

	// TITAN
	{
		id: 'fran-servin',
		name: 'Francisco Servín',
		number: 0,
		team: 'Hakembo',
		city: 'Fernando de la Mora',
		helmetColor: '',
		photo: '/pilotos/fran-servin.jpg',
		bio: '',
		category: 'Titan',
	},

	// EXTRA (sin resultados aún)
	{
		id: 'carlos-davalos',
		name: 'Carlos Dávalos',
		number: 27,
		team: 'CDR',
		city: 'Luque',
		helmetColor: '',
		photo: '/pilotos/carlos-davalos.jpg',
		bio: '',
		category: 'Rookie',
	},
];

// =======================
// CARRERAS
// =======================

export const races: RaceResult[] = [
	// FECHA 1 – Super Kart
	{
		id: '2025-r1-super-kart',
		round: 1,
		date: '2025-07-01', // TODO: reemplazar si tenés fecha real
		track: 'Super Kart',
		layout: 'Oficial',
		fastestLap: {
			driverId: 'giovanni-crichigno',
			time: '27.559',
		},
		podium: [
			{ position: 1, driverId: 'giovanni-crichigno', time: '27.559' },
			{ position: 2, driverId: 'eduardo-aguilera', time: '28.303' },
			{ position: 3, driverId: 'willian-benitez', time: '28.359' },
			{ position: 4, driverId: 'monse-aranda', time: '28.896' },
			{ position: 5, driverId: 'francisco-candia', time: '28.945' },
			{ position: 6, driverId: 'fran-servin', time: '29.231' },
			{ position: 7, driverId: 'denis-cantero', time: '29.285' },
			{ position: 8, driverId: 'luciano-amarilla', time: '29.374' },
			{ position: 9, driverId: 'arami-garcete', time: '29.893' },
			{ position: 10, driverId: 'francisco-rios', time: '30.645' },
		],
	},

	// FECHA 2 – Super Kart
	{
		id: '2025-r2-super-kart',
		round: 2,
		date: '2025-09-01', // TODO: reemplazar si tenés fecha real
		track: 'Super Kart',
		layout: 'Oficial',
		fastestLap: {
			driverId: 'giovanni-crichigno',
			time: '27.903',
		},
		podium: [
			{ position: 1, driverId: 'giovanni-crichigno', time: '27.903' },
			{ position: 2, driverId: 'eduardo-aguilera', time: '28.381' },
			{ position: 3, driverId: 'willian-benitez', time: '28.735' },
			{ position: 4, driverId: 'monse-aranda', time: '28.875' },
			{ position: 5, driverId: 'francisco-candia', time: '29.005' },
			{ position: 6, driverId: 'fran-servin', time: '29.580' },
			{ position: 7, driverId: 'arami-garcete', time: '29.687' },
			{ position: 8, driverId: 'luciano-amarilla', time: '29.817' },
			{ position: 9, driverId: 'francisco-rios', time: '30.123' },
			{ position: 10, driverId: 'denis-cantero', time: '30.337' },
		],
	},

	// FECHA 3 – Super Kart – 19/10/2025
	{
		id: '2025-r3-super-kart',
		round: 3,
		date: '2025-10-19',
		track: 'Super Kart',
		layout: 'Oficial',
		fastestLap: {
			driverId: 'giovanni-crichigno',
			time: '28.291',
		},
		podium: [
			{ position: 1, driverId: 'giovanni-crichigno', time: '28.291' },
			{ position: 2, driverId: 'eduardo-aguilera', time: '28.424' },
			{ position: 3, driverId: 'luciano-amarilla', time: '28.460' },
			{ position: 4, driverId: 'monse-aranda', time: '28.597' },
			{ position: 5, driverId: 'willian-benitez', time: '28.800' },
			{ position: 6, driverId: 'denis-cantero', time: '29.140' },
			{ position: 7, driverId: 'arami-garcete', time: '29.687' },
			{ position: 8, driverId: 'francisco-rios', time: '29.777' },
			{ position: 9, driverId: 'francisco-candia', time: '29.947' },
			{ position: 10, driverId: 'fran-servin', time: '30.371' },
		],
	},

	// FECHA 4 – Karting Club Paraguayo – 16/11/2025
	{
		id: '2025-r4-kcp',
		round: 4,
		date: '2025-11-16',
		track: 'Karting Club Paraguayo',
		layout: 'Oficial',
		fastestLap: {
			driverId: 'denis-cantero',
			time: '29.140',
		},
		podium: [
			// ojo que acá rookie tiene mejores tiempos que Pro/Evo
			{ position: 1, driverId: 'denis-cantero', time: '41.163' },
			{ position: 1, driverId: 'giovanni-crichigno', time: '40.100' },
			{ position: 4, driverId: 'luciano-amarilla', time: '40.199' },
			{ position: 1, driverId: 'eduardo-aguilera', time: '40.414' },
			{ position: 2, driverId: 'monse-aranda', time: '41.212' },
			{ position: 2, driverId: 'willian-benitez', time: '41.292' },
			{ position: 8, driverId: 'pao-irala', time: '42.104' },
			{ position: 6, driverId: 'fran-servin', time: '42.242' },
			{ position: 5, driverId: 'noel-perez', time: '42.274' },
		],
	},

	// FECHA 5 – Adrena Kart (Foz) – sin resultados aún
	{
		id: '2025-r5-adrena',
		round: 5,
		date: '2025-12-07', // TODO: fecha real si tenés
		track: 'Adrena Kart (Foz de Iguazú)',
		layout: 'Oficial',
		fastestLap: null,
		podium: [],
	},
];

// =======================
// HELPERS
// =======================

export function getDriverById(id: string): Driver | undefined {
	return drivers.find((d) => d.id === id);
}

// Mejor tiempo absoluto de un piloto en todas las carreras
export function getBestLapForDriver(driverId: string): {
	time: string;
	raceId: string;
	track: string;
	round: number;
} | null {
	let best: {
		time: number;
		raceId: string;
		track: string;
		round: number;
	} | null = null;

	for (const race of races) {
		for (const pos of race.podium) {
			if (pos.driverId !== driverId || !pos.time) continue;
			const tNum = parseFloat(pos.time);
			if (!Number.isFinite(tNum)) continue;

			if (!best || tNum < best.time) {
				best = {
					time: tNum,
					raceId: race.id,
					track: race.track,
					round: race.round,
				};
			}
		}
	}

	if (!best) return null;

	return {
		time: best.time.toFixed(3),
		raceId: best.raceId,
		track: best.track,
		round: best.round,
	};
}
