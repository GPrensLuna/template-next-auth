import type { UserEntity } from "../../domain/entities";
import type { UserRoleEnum, UserWordEnum } from "../../domain/enum";

type Data = Pick<UserEntity, "email" | "password">;

export class ReqSignInDto implements Data {
	public readonly email!: string;

	public readonly password!: string;

	public constructor(email: string, password: string) {
		if (!email || !password) {
			throw new Error("Email and password are required.");
		}
		this.email = email;
		this.password = password;
	}

	public static fromEntity(data: Data): ReqSignInDto {
		if (!data.email || !data.password) {
			throw new Error("Email and password are required.");
		}

		return new ReqSignInDto(data.email, data.password);
	}
}

export class ResSignInDto implements Omit<UserEntity, "password"> {
	public readonly id!: string;

	public readonly last_name!: string;

	public readonly first_name!: string;

	public readonly email!: string;

	public readonly picture!: string;

	public readonly user_role!: keyof typeof UserRoleEnum | string | null;

	public readonly user_work!: keyof typeof UserWordEnum | string | null;

	public constructor(
		id: string,
		last_name: string,
		first_name: string,
		email: string,
		picture: string,
		user_role: keyof typeof UserRoleEnum | string | null,
		user_work: keyof typeof UserWordEnum | string | null,
	) {
		if (!id || !last_name || !first_name || !email || !picture || !user_role || !user_work) {
			throw new Error("All fields are required.");
		}
		this.id = id;
		this.last_name = last_name;
		this.first_name = first_name;
		this.email = email;
		this.picture = picture;
		this.user_role = user_role;
		this.user_work = user_work;
	}

	public static fromEntity(res: UserEntity): ResSignInDto {
		if (
			!res.id ||
			!res.last_name ||
			!res.first_name ||
			!res.email ||
			!res.picture ||
			!res.user_role ||
			!res.user_work
		) {
			throw new Error("All fields are required.");
		}

		return new ResSignInDto(
			res.id,
			res.last_name,
			res.first_name,
			res.email,
			res.picture,
			res.user_role,
			res.user_work,
		);
	}
}
