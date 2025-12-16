// src/lib/data.ts
// Mantiene las exportaciones "públicas" originales pero delega la data de pilotos
// a un módulo dedicado (src/lib/drivers/*) para hacerla modular por categoría.

import {
	DRIVER_CATEGORY_BADGE,
	DRIVER_CATEGORY_HEX,
	DRIVER_CATEGORY_ORDER,
	drivers,
	driversByCategory,
	getCategoryBadgeClass,
	getCategoryHexColor,
	getDriverById,
} from './drivers/index.ts';
import type { Driver, DriverCategory } from './drivers/index.ts';

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
			driverId: 'giovanni-crichigno',
			time: '40.100',
		},
		podium: [
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

// Re-export útil para no romper imports existentes y tener helpers centralizados
export {
	drivers,
	driversByCategory,
	getDriverById,
	getCategoryBadgeClass,
	getCategoryHexColor,
	DRIVER_CATEGORY_BADGE,
	DRIVER_CATEGORY_HEX,
	DRIVER_CATEGORY_ORDER,
};

export type { Driver, DriverCategory };
