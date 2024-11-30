"use client";

import type { ReactNode } from "react";
import type { SignInType } from "../../domain/validations/sign-in.zod";

import { signIn } from "next-auth/react";
import { memo, useTransition } from "react";

import { SignInData, SignInInitValue, signInSchema } from "../../domain/validations/sign-in.zod";

import { Alert } from "@/modules/app/UI/components/modals";
import { FormButton, FormCustom, FormInput, TitleCustom } from "@/modules/app/UI/components/tags";

const SignIn = (): ReactNode => {
	const [isPending, startTransition] = useTransition();

	const onSubmit = async (data: SignInType): Promise<void> => {
		startTransition(async () => {
			try {
				await signIn("credentials", {
					email: data.email,
					password: data.password,
					callbackUrl: "/",
				});

				await Alert.success("Inicio de sesión exitoso");
			} catch {
				await Alert.error("Error al iniciar sesión");
			} finally {
			}
		});
	};

	return (
		<FormCustom<SignInType>
			className="mx-auto grid w-full min-w-80 max-w-lg grid-cols-1 gap-2 bg-[#] p-4 transition-all duration-300 ease-in-out"
			defaultValues={SignInInitValue}
			mode="onBlur"
			schema={signInSchema}
			variants={{
				border: "primary",
				background: "tertiary",
				padding: "lg",
				rounded: "xl",
				justify: "center",
			}}
			onSubmit={onSubmit}
		>
			{({ control }) => (
				<>
					<TitleCustom
						className="w-full text-center uppercase transition-all duration-300 ease-in-out"
						tag="h1"
						variants={{
							rounded: "xl",
							padding: "sm",
							fontSize: "xl",
							fontStyle: "bold",
							justify: "center",
						}}
					>
						Sign In
					</TitleCustom>

					{SignInData.map((data) => (
						<FormInput<SignInType>
							key={data.name}
							className="w-full min-w-60 transition-all duration-300 ease-in-out"
							control={control}
							label={data.label}
							name={data.name as keyof SignInType}
							placeholder={data.placeholder}
							type={data.type}
							variantsInput={{
								text: "primary",
								border: "primary",
								rounded: "xl",
								padding: "sm",
								justify: "center",
							}}
							variantsLabel={{
								fontSize: "lg",
								fontStyle: "bold",
							}}
						/>
					))}

					<FormButton
						className="mt-4 w-full bg-slate-900 uppercase transition-all duration-300 ease-in-out"
						disabled={isPending}
						label={isPending ? "Loading..." : "Send"}
						type="submit"
						variants={{
							rounded: "xl",
							border: "primary",
							padding: "sm",
							fontStyle: "bold",
							justify: "center",
						}}
					/>
				</>
			)}
		</FormCustom>
	);
};

export default memo(SignIn);
