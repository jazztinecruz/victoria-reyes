"use client";

import { ArrowLeftOnRectangleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../components/elements/button/button";
import Field from "../../components/elements/field";
import ErrorModal from "../../components/modals/error";
import ForgotPassword from "../../components/modals/forgot-password";
import SuccessfulModal from "../../components/modals/sucessful";
import api, { SigninFields } from "../../library/api";

const UserLogin = () => {
  const [errorMessage, setErrorMessage] = useState({
    signin: "",
    forgotPassword: "",
  });
  const [errorModal, setErrorModal] = useState(false);
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [fields, setFields] = useState<SigninFields>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async () => {
    const response = await api.signin(fields);
    if (response.status === 200) {
      router.push(`/${response.data.userId}/profile`);
    }
    if (response.status !== 200) {
      setErrorMessage({ ...errorMessage, signin: response.data.message });
      setErrorModal(!errorModal);
    }
  };

  return (
    <section className="relative bg-white dark:bg-gray-900">
      {/* close button */}
      <Link href="/">
        <XMarkIcon className="absolute right-10 top-4 h-6 w-6 cursor-pointer hover:animate-spin" />
      </Link>

      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto grid h-full w-full place-items-center tablet:mx-0 tablet:w-full laptop:w-2/5 laptop:pr-20">
          <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
            <h2 className="mb-5 text-center text-2xl font-bold text-gray-800">
              Login to your Account
            </h2>
            <form className="mt-5 flex flex-col gap-6">
              <Field.Textbox
                label="Email Address"
                name="email"
                required
                onChange={setFields}
              />

              <Field.Textbox
                label="Password"
                name="password"
                type="password"
                required
                onChange={setFields}
              />
              <div id="button" className="my-5 flex w-full flex-col">
                <button
                  type="button"
                  onClick={() => {
                    if (fields.email !== "" && fields.password !== "") {
                      handleSubmit();
                    }
                  }}
                  className="w-full rounded-md bg-brand py-4 text-green-100 transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white" />
                    <div className="font-bold">Sign In</div>
                  </div>
                </button>

                <div className="relative mt-10 h-px bg-gray-300">
                  <div className="absolute left-0 top-0 -mt-3 flex w-full items-center justify-center">
                    <Link href="/signup">
                      <span className="-mr-4 bg-white px-4 text-xs uppercase text-gray-400 hover:text-brand">
                        Don't have an account yet?
                      </span>
                    </Link>
                    <span className="bg-white px-4 text-xs uppercase text-gray-400">
                      OR
                    </span>
                    <button
                      onClick={() =>
                        setForgotPasswordModal(!forgotPasswordModal)
                      }
                      className="-ml-4 cursor-pointer bg-white px-4 text-xs uppercase text-gray-400 hover:text-brand">
                      Forgot Password
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {errorModal && (
        <ErrorModal
          onClose={() => setErrorModal(!errorModal)}
          handler={() => setErrorModal(!errorModal)}
          errorMessage={errorMessage.signin}
        />
      )}

      {forgotPasswordModal && (
        <ForgotPassword
          fields={fields}
          setFields={setFields}
          forgotPasswordModal={forgotPasswordModal}
          setForgotPasswordModal={setForgotPasswordModal}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setSuccessfulModal={setOpenSuccessfulModal}
        />
      )}

      {openSuccessfulModal && (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(!openSuccessfulModal)}
          handler={() => {
            setOpenSuccessfulModal(false);
            setForgotPasswordModal(false);
          }}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You've succesfully exchanged you password!
          </span>
          <span className="text-gray mb-4">
            You can now re-login your forgotPasswordFields with your new
            password
          </span>
          <div className="z-50 cursor-pointer">
            <Button
              name="Go Back"
              fill
              handler={() => {
                setOpenSuccessfulModal(!openSuccessfulModal);
                setForgotPasswordModal(!forgotPasswordModal);
              }}
            />
          </div>
        </SuccessfulModal>
      )}
    </section>
  );
};

export default UserLogin;
