import type { ReqSignInDto, ResSignInDto } from "../../applications/dtos";
import type { RepPostSignIn } from "../../infrastructure/repositories";
import type { ISignIn } from "../interfaces/sign-in.interface";

export class SPostSignIn implements ISignIn {
	public constructor(private readonly repPostSignIn: RepPostSignIn) {}

	public async postSignIn(reqSignInDto: ReqSignInDto): Promise<ResSignInDto> {
		return this.repPostSignIn.postSignIn(reqSignInDto);
	}
}
