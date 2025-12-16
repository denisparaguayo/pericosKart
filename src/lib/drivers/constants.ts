import type { DriverCategory } from './types';

// Orden de categorás que usamos en listados/cards
export const DRIVER_CATEGORY_ORDER: DriverCategory[] = [
	'Pro',
	'Evo',
	'Academy',
	'Rookie',
	'Titan',
];

// Colores para badges (Tailwind utility classes)
export const DRIVER_CATEGORY_BADGE: Record<DriverCategory, string> = {
	Pro: 'bg-yellow-500 text-black border-yellow-300',
	Evo: 'bg-orange-500 text-black border-orange-300',
	Academy: 'bg-pink-500 text-black border-pink-300',
	Rookie: 'bg-emerald-500 text-black border-emerald-300',
	Titan: 'bg-slate-400 text-black border-slate-300',
};

// Colores hex para piezas estaticas (poster, acentos sin Tailwind)
export const DRIVER_CATEGORY_HEX: Record<DriverCategory, string> = {
	Pro: '#facc15', // amarillo
	Evo: '#fb923c', // naranja
	Academy: '#f472b6', // rosa
	Rookie: '#22c55e', // verde
	Titan: '#9ca3af', // gris
};
