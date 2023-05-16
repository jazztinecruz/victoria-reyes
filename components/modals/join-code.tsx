"use client";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Textbox from "../elements/field/textbox";
import SuccessfulModal from "./sucessful";

interface Props {
  userId: string;
}

const JoinCodeModal = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    code: "",
  });

  const [error, setError] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!fields.code) {
      setError("Code cannot be blank.");
      return;
    }
    try {
      const response = await fetch("/api/update-code", {
        method: "PUT",
        body: JSON.stringify({
          id: userId,
          code: fields.code,
        }),
      });
      if (response.status === 201) {
        setOpen(false);
        setOpenSuccessfulModal(true);
      }
      if (response.status !== 201) {
        const errorMessage = await response.json();
        setOpenErrorModal(true);
        setErrorMessage(errorMessage.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button name="Join Code" fill handler={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} size="medium">
        <div>
          {/* title logo and close btn*/}
          <div className="grid grid-cols-[1fr,auto] items-center">
            <div className="flex items-center gap-3">
              <ClipboardIcon className="h-6 w-6 text-brand" />
              <h1 className="text-md font-semibold">Join Code</h1>
            </div>
          </div>

          {/* Paste code field */}
          <div className="my-6">
            <Textbox name="code" label="Paste Code" onChange={setFields} />
            {error ? (
              <span className="text-xs text-red-500">{error}</span>
            ) : null}
          </div>

          <Button
            name="Join Me To This Family Code"
            fill
            handler={handleSubmit}
          />
        </div>
      </Modal>

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully joined a family code and become a member!
          </span>

          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenSuccessfulModal(false)}
            />
          </div>
        </SuccessfulModal>
      ) : null}

      {openErrorModal ? (
        <Modal
          open={openErrorModal === true ? true : false}
          onClose={() => setOpenErrorModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            {errorMessage}
          </span>

          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenErrorModal(false)}
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default JoinCodeModal;
