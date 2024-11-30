import type { ReqSignInDto } from "../../applications/dtos";
import type { ISignIn } from "../../domain/interfaces";

import { ResSignInDto } from "../../applications/dtos";

export class RepPostSignIn implements ISignIn {
	public async postSignIn(reqSignInDto: ReqSignInDto): Promise<ResSignInDto> {
		const data = {
			id: "1",
			last_name: "last_name",
			first_name: "first_name",
			email: reqSignInDto.email,
			picture: "picture",
			password: "dummy_password",
			user_role: "dev",
			user_work: "software",
		};

		return ResSignInDto.fromEntity(data);
	}
}
