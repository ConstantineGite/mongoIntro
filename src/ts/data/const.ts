export enum _Priviligies {
	USER_MANAGEMENT,
	ROLE_MANAGEMENT
}

export type T_Privilige = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface I_Priviligies {
	action: _Priviligies;
	value: T_Privilige;
}


// example 
const priviligies: I_Priviligies[] = [
	{ action: _Priviligies.USER_MANAGEMENT, value: 6 }, // 0110
	{ action: _Priviligies.ROLE_MANAGEMENT, value: 6 } 	// 0110
];

import * as CheckerPrivilege from "../controllers/privilegeChecker";

CheckerPrivilege.create();
CheckerPrivilege.update();
