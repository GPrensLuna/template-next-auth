import type { SPostSignIn } from "../../domain/service";
import type { ReqSignInDto, ResSignInDto } from "../dtos";

export class SignInUseCase {
	public constructor(private readonly sPostSignIn: SPostSignIn) {}

	public async signIn(reqSignInDto: ReqSignInDto): Promise<ResSignInDto> {
		return this.sPostSignIn.postSignIn(reqSignInDto);
	}
}
