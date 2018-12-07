export enum Priviligies {
	USER_MANAGEMENT,
	ROLE_MANAGEMENT
}

export enum CRUD {
	CREATE,
	READ,
	UPDATE,
	REMOVE
}

export type T_Privilige = [number, number, number, number];

export interface IPriviligies {
	action: Priviligies;
	value: T_Privilige;
}

// Уxample
export const priviligies: IPriviligies[] = [
	{ action: Priviligies.USER_MANAGEMENT, value: [0, 1, 1, 0] }, 	// 0110
	{ action: Priviligies.ROLE_MANAGEMENT, value: [0, 1, 1, 0] } 	// 0110
];
