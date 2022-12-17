"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from ".";
import { SigninFields } from "../../library/api";
import Button from "../elements/button/button";
import Field from "../elements/field";

interface Props {
  forgotPasswordModal: boolean;
  setForgotPasswordModal: Dispatch<SetStateAction<boolean>>;
  setFields: Dispatch<SetStateAction<SigninFields>>;
  fields: SigninFields;
  setSuccessfulModal: Dispatch<SetStateAction<boolean>>;
  errorMessage: {
    signin: string;
    forgotPassword: string;
  };
  setErrorMessage: Dispatch<
    SetStateAction<{
      signin: string;
      forgotPassword: string;
    }>
  >;
}
const ForgotPassword = ({
  fields,
  setFields,
  setSuccessfulModal,
  forgotPasswordModal,
  setForgotPasswordModal,
  errorMessage,
  setErrorMessage,
}: Props) => {
  const [forgotPasswordFields, setForgotPasswordFields] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  return (
    <Modal
      size="medium"
      as="div"
      open
      onClose={() => setForgotPasswordModal(!forgotPasswordModal)}>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Change my Password</span>
        <span className="text-sm font-light opacity-50">
          Fill up the necessary fields to successfully change your password
        </span>
      </div>

      <form className="flex flex-col gap-10">
        <Field.Textbox
          label="Email Address"
          name="email"
          required
          onChange={setForgotPasswordFields}
        />
        <Field.Textbox
          label="New Password"
          name="newPassword"
          required
          onChange={setForgotPasswordFields}
        />
        <Field.Textbox
          label="Confirm Password"
          name="confirmPassword"
          required
          onChange={setForgotPasswordFields}
        />

        {errorMessage && (
          <span className="text-sm font-semibold tracking-wide text-red-500">
            {errorMessage.forgotPassword}
          </span>
        )}

        <Button
          fill
          name="Change my Password"
          handler={(event: any) => {
            event.preventDefault();
            if (
              forgotPasswordFields.confirmPassword !== "" &&
              forgotPasswordFields.newPassword !== ""
            ) {
              if (
                forgotPasswordFields.newPassword ===
                forgotPasswordFields.confirmPassword
              ) {
                setFields({
                  ...fields,
                  email: forgotPasswordFields.email,
                  password: forgotPasswordFields.newPassword,
                });
                setSuccessfulModal(true);
              } else if (
                forgotPasswordFields.newPassword !==
                forgotPasswordFields.confirmPassword
              ) {
                setErrorMessage({
                  ...errorMessage,
                  forgotPassword: "Your passwords dont match",
                });
              }
            }
          }}
        />
      </form>
    </Modal>
  );
};

export default ForgotPassword;
