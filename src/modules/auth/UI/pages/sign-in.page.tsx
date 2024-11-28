"use client";
import FormInput from "@/modules/app/UI/components/tags/form/components/form-input.component";
import FormCustom from "@/modules/app/UI/components/tags/form/form-custom.component";
import { SignInInitValue, signInSchema, SignInType } from "../../domain/validations/sign-in.zod";

const SignIn = () => {

	const onSubmit = (data: any) => {
		console.log("data: ", data);
	}
	return (
		<FormCustom<SignInType>
			onSubmit={onSubmit}
			defaultValues={SignInInitValue}
			schema={signInSchema}
			isPending={false}
			mode="onSubmit"
			>
			{({ control}) => (
				<>
					<FormInput<SignInType>
						control={control}
						name="email"
						label="Email"
						placeholder="Email"
					/>
					<FormInput<SignInType>
						control={control}
						name="password"
						label="Password"
						placeholder="Password"
					/>
				</>
			)}
		</FormCustom>
	)
}

export default SignIn