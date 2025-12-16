// Tipos base para pilotos
export type DriverCategory = 'Pro' | 'Evo' | 'Academy' | 'Rookie' | 'Titan';

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
	category?: DriverCategory | '';
};
