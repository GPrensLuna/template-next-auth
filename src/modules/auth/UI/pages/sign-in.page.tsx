"use client";

import type { ReactNode } from "react";
import type { SignInType } from "../../domain/validations/sign-in.zod";

import { memo, useState } from "react";

import { SignInData, SignInInitValue, signInSchema } from "../../domain/validations/sign-in.zod";

import FormButton from "@/modules/app/UI/components/tags/form/components/form-button.component";
import FormInput from "@/modules/app/UI/components/tags/form/components/form-input.component";
import FormCustom from "@/modules/app/UI/components/tags/form/form-custom.component";
import TitleCustom from "@/modules/app/UI/components/tags/title-custom.component";

const SignIn = (): ReactNode => {
	const [responseMessage, setResponseMessage] = useState<string | null>(null);

	const onSubmit = async (data: SignInType): Promise<void> => {
		try {
			console.log(data);
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setResponseMessage("Inicio de sesión exitoso");
		} catch {
			setResponseMessage("Error al iniciar sesión");
		}
	};

	return (
		<FormCustom<SignInType>
			className="mx-auto grid w-full min-w-80 max-w-lg grid-cols-1 gap-2 bg-[#F79950] p-4 transition-all duration-300 ease-in-out"
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
							text: "primary",
							rounded: "xl",
							padding: "sm",
							fontSize: "xl",
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
								text: "primary",
								fontSize: "lg",
							}}
						/>
					))}

					<FormButton
						className="mt-4 w-full bg-slate-900 uppercase transition-all duration-300 ease-in-out"
						label="send"
						type="submit"
						variants={{
							text: "primary",
							rounded: "xl",
							border: "primary",
							padding: "sm",
							justify: "center",
						}}
					/>

					{responseMessage && (
						<p className="mt-4 text-center transition-all duration-300 ease-in-out">
							{responseMessage}
						</p>
					)}
				</>
			)}
		</FormCustom>
	);
};

export default memo(SignIn);
