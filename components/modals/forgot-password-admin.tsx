"use client";

import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";
import SuccessfulModal from "./sucessful";

interface Props {
  handler: () => void;
}

const ForgotPassword = ({ handler }: Props) => {
  const [fields, setFields] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleChangePassword = async (event: any) => {
    event.preventDefault();

    if (fields.newPassword !== fields.confirmPassword) {
      setError("New password and confirm password do not match");
    } else {
      const response = await fetch("/api/update-admin-password", {
        method: "PUT",
        body: JSON.stringify({
          email: fields.email,
          password: fields.newPassword,
        }),
      });

      if (response.status === 201) {
        setOpenSuccessfulModal(true);
      } else {
        setError("Failed to update password. Please try again later.");
      }
    }
  };

  return (
    <>
      <Modal size="medium" as="div" open onClose={handler}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Change my Password</span>
          <span className="text-sm font-light opacity-50">
            Fill up the necessary fields to successfully change your password
          </span>
        </div>

        <form className="flex flex-col gap-6">
          <Field.Textbox
            label="Email Address"
            name="email"
            required
            onChange={setFields}
          />
          <Field.Textbox
            label="New Password"
            name="newPassword"
            required
            onChange={setFields}
          />
          <Field.Textbox
            label="Confirm Password"
            name="confirmPassword"
            required
            onChange={setFields}
          />

          {error ? (
            <span className="text-sm font-semibold tracking-wide text-red-500">
              {error}
            </span>
          ) : null}

          <Button
            fill
            name="Change my Password"
            handler={handleChangePassword}
          />
        </form>
      </Modal>

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully reset your password!
          </span>
          <span className="text-gray">
            Login to your account with your new password.
          </span>
          <div className="z-50">
            <Button name="Login My Account" fill handler={handler} />
          </div>
        </SuccessfulModal>
      ) : null}
    </>
  );
};

export default ForgotPassword;
