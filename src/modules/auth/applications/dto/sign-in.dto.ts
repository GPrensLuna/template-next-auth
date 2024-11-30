import type { UserEntity } from "../../domain/entities";

type Data = Pick<UserEntity, "email" | "password">;

export class ResSignIn implements Data {
	public readonly email!: string;

	public readonly password!: string;

	public constructor(email: string, password: string) {
		if (!email || !password) {
			throw new Error("Email and password are required.");
		}
		this.email = email;
		this.password = password;
	}

	public static fromEntity(data: Data): ResSignIn {
		if (!data.email || !data.password) {
			throw new Error("Email and password are required.");
		}

		return new ResSignIn(data.email, data.password);
	}
}

export class ResSignUp implements Omit<UserEntity, "password"> {
	public readonly id!: string;

	public readonly last_name!: string;

	public readonly first_name!: string;

	public readonly email!: string;

	public readonly picture!: string;

	public constructor(
		id: string,
		last_name: string,
		first_name: string,
		email: string,
		picture: string,
	) {
		if (!id || !last_name || !first_name || !email || !picture) {
			throw new Error("All fields are required.");
		}
		this.id = id;
		this.last_name = last_name;
		this.first_name = first_name;
		this.email = email;
		this.picture = picture;
	}

	public static fromEntity(data: UserEntity): ResSignUp {
		if (!data.id || !data.last_name || !data.first_name || !data.email || !data.picture) {
			throw new Error("All fields are required.");
		}

		return new ResSignUp(data.id, data.last_name, data.first_name, data.email, data.picture);
	}
}
