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
          />
          <FormInput<SignInType>
            control={control}
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
          />
          <FormButton type="submit" label="Sign In" />
        </>
      )}
    </FormCustom>
  );
};

export default memo(SignIn);
