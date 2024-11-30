import type { ReqSignInDto, ResSignInDto } from "../../applications/dtos";

export interface ISignIn {
	postSignIn?: (reqSignInDto: ReqSignInDto) => Promise<ResSignInDto>;
}
