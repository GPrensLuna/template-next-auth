"use client";

import FormButton from "@/modules/app/UI/components/tags/form/components/form-button.component";
import FormInput from "@/modules/app/UI/components/tags/form/components/form-input.component";
import FormCustom from "@/modules/app/UI/components/tags/form/form-custom.component";
import { memo } from "react";
import type { SignInType } from "../../domain/validations/sign-in.zod";
import { SignInInitValue, signInSchema } from "../../domain/validations/sign-in.zod";

const SignIn = () => {
  const onSubmit = (data: SignInType) => {
    console.log("data: ", data);
  };

  return (
    <FormCustom<SignInType>
      onSubmit={onSubmit}
      defaultValues={SignInInitValue}
      schema={signInSchema}
      mode="onSubmit"
    >
      {({ control }) => (
        <>
          <FormInput<SignInType>
            control={control}
            name="email"
            label="Email"

            placeholder="Email"
						variants={{
							text: "primary",
							background: "primary",
							border: "primary",
							padding: "sm",
							justify: "center"
						}}
          />
          <FormInput<SignInType>
            control={control}
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
						classNameLabel="text-primary text-sm font-medium bg-"
						variants={{
							text: "primary",
							background: "primary",
							border: "primary",
							padding: "sm",
							justify: "center"
						}}
          />
          <FormButton type="submit" label="Sign In" className="bg-slate-900"  variants={
						{
							text: "primary",
							background: "primary",
							border: "primary",
							padding: "sm",
							justify: "center"
						}
					}/>
        </>
      )}
    </FormCustom>
  );
};

export default memo(SignIn);
