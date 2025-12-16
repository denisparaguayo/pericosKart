import { DRIVER_CATEGORY_BADGE, DRIVER_CATEGORY_HEX, DRIVER_CATEGORY_ORDER } from './constants.ts';
import { academyDrivers } from './academy.ts';
import { evoDrivers } from './evo.ts';
import { proDrivers } from './pro.ts';
import { rookieDrivers } from './rookie.ts';
import { titanDrivers } from './titan.ts';
import type { Driver, DriverCategory } from './types.ts';

export type DriverCategoryGroup = {
	category: DriverCategory;
	drivers: Driver[];
};

// Pilotos agrupados por categorá­a, útil para listados seccionados
export const driversByCategory: DriverCategoryGroup[] = [
	{ category: 'Pro', drivers: proDrivers },
	{ category: 'Evo', drivers: evoDrivers },
	{ category: 'Academy', drivers: academyDrivers },
	{ category: 'Rookie', drivers: rookieDrivers },
	{ category: 'Titan', drivers: titanDrivers },
];

// Flat para busquedas/rutas estaticas
export const drivers: Driver[] = driversByCategory.flatMap((group) => group.drivers);

export function getDriverById(id: string): Driver | undefined {
	return drivers.find((d) => d.id === id);
}

export function getCategoryBadgeClass(category?: string): string {
	if (!category) return 'bg-slate-600 text-white';
	const key = category as DriverCategory;
	return DRIVER_CATEGORY_BADGE[key] ?? 'bg-slate-600 text-white';
}

export function getCategoryHexColor(category?: string): string {
	if (!category) return '#a855f7';
	const key = category as DriverCategory;
	return DRIVER_CATEGORY_HEX[key] ?? '#a855f7';
}

export { DRIVER_CATEGORY_BADGE, DRIVER_CATEGORY_HEX, DRIVER_CATEGORY_ORDER };
export type { Driver, DriverCategory };
