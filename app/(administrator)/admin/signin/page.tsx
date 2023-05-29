"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../../../../components/elements/button/button";
import Textbox from "../../../../components/elements/field/textbox";
import Modal from "../../../../components/modals";
import { useRouter } from "next/navigation";
import ForgotPassword from "../../../../components/modals/forgot-password-admin";

const AdminSignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [fields, setFields] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  const router = useRouter();

  const handleSignInAdmin = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!fields.email || !fields.password) {
      setErrorMessage(
        "Please fill out the following required fields with exlamation mark."
      );
      setErrorModal(true);
      return;
    } else if (fields.password.length < 5) {
      setErrorMessage("Password must contain more than 5 characters.");
      setErrorModal(true);
    } else if (!emailRegex.test(fields.email)) {
      setErrorMessage("Email Address must contain a valid email.");
      setErrorModal(true);
    } else {
      const response = await fetch("/api/auth/admin/signin", {
        method: "POST",
        body: JSON.stringify({
          email: fields.email,
          password: fields.password,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        router.push(`/${data.admin.id}/dashboard`);
      }
      if (response.status !== 200) {
        setErrorMessage(data.message);
        setErrorModal(!errorModal);
      }
    }
  };

  return (
    <>
      <section className="relative bg-white dark:bg-gray-900">
        <div className="flex h-screen items-center justify-center">
          <div className="mx-auto grid h-full w-full place-items-center tablet:mx-0 tablet:w-full laptop:w-2/5 laptop:pr-20">
            <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
              <h2 className="mb-5 text-center text-2xl font-bold text-gray-800">
                Login your Admin Account
              </h2>
              <div className="mt-5 flex flex-col gap-6">
                <Textbox
                  required
                  value={fields.email}
                  label="Email Address"
                  name="email"
                  onChange={setFields}
                />

                <Textbox
                  label="Password"
                  value={fields.password}
                  name="password"
                  type="password"
                  required
                  onChange={setFields}
                />
                <div className="my-5 flex w-full flex-col">
                  <Button
                    name="Create Admin Account"
                    fill
                    handler={handleSignInAdmin}
                  />

                  <span className="mt-3  bg-white px-4 text-center text-xs uppercase text-gray-400 hover:text-brand">
                    <Link href="/admin/signup">
                      Don&apos;t have an admin account yet?
                    </Link>
                    <button
                      onClick={() =>
                        setForgotPasswordModal(!forgotPasswordModal)
                      }
                      className="cursor-pointer bg-white px-4 text-xs uppercase text-gray-400 hover:text-brand">
                      Forgot Password
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {forgotPasswordModal && (
        <ForgotPassword handler={() => setForgotPasswordModal(false)} />
      )}

      {errorModal ? (
        <Modal
          open={errorModal === true ? true : false}
          onClose={() => setErrorModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            {errorMessage}
          </span>

          <div className="z-50">
            <Button name="Go Back" fill handler={() => setErrorModal(false)} />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default AdminSignIn;
