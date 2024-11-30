import type { UserRoleEnum, UserWordEnum } from "../enum";

export interface UserEntity {
	id: string;
	email: string;
	password: string;
	last_name: string;
	first_name: string;
	picture: string;
	user_role: keyof typeof UserRoleEnum | string | null;
	user_work: keyof typeof UserWordEnum | string | null;
}
