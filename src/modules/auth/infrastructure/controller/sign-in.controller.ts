import type { ReqSignInDto, ResSignInDto } from "../../applications/dtos";

import { SignInUseCase } from "../../applications/use-case";
import { SPostSignIn } from "../../domain/service";
import { RepPostSignIn } from "../repositories";

const createSSignIn = (): SPostSignIn => {
	return new SPostSignIn(new RepPostSignIn());
};

export const ActionSignIn = async (reqSignInDto: ReqSignInDto): Promise<ResSignInDto> => {
	const useSignIn = new SignInUseCase(createSSignIn());

	return await useSignIn.signIn(reqSignInDto);
};
