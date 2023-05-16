"use client";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  userId: string;
}

const CreateCodeModal = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleGenerateCode = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 20; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleOpenModal = () => {
    const newCode = handleGenerateCode(); // generate a 20-character code
    setGeneratedCode(newCode);
    setOpen(true);
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/update-family-head", {
        method: "PUT",
        body: JSON.stringify({
          id: userId,
          code: generatedCode,
        }),
      });
      if (response.status === 201) {
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
      <Button name="Create Code" fill handler={handleOpenModal} />
      <Modal open={open} onClose={() => setOpen(false)} size="medium">
        <div>
          {/* title logo and close btn*/}
          <div className="grid grid-cols-[1fr,auto] items-center">
            <div className="flex items-center gap-3">
              <ClipboardIcon className="h-10 w-10 text-brand" />
              <div className="flex flex-col gap-1">
                <h1 className="text-md font-semibold">Create Code</h1>
                <p className="text-sm text-gray-400">
                  This Code for you to become the Head of the Family. Your
                  Family Members can join you by copying this code and paste it
                  on the join bin.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-snow my-6 w-full py-3 pl-4 text-lg font-bold">
            {generatedCode}
          </div>

          <Button
            name="Make me the Head of The Family"
            fill
            handler={handleSubmit}
          />
        </div>
      </Modal>

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => {
            setOpen(false);
            setOpenSuccessfulModal(false);
          }}
          handler={() => {
            setOpen(false);
            setOpenSuccessfulModal(false);
          }}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully created a family code!
          </span>

          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => {
                setOpen(false);
                setOpenSuccessfulModal(false);
              }}
            />
          </div>
        </SuccessfulModal>
      ) : null}

      {openErrorModal ? (
        <Modal
          open={openErrorModal === true ? true : false}
          onClose={() => {
            setOpen(false);
            setOpenErrorModal(false);
          }}>
          <span className="mt-5 text-xl font-semibold text-brand">
            {errorMessage}
          </span>

          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => {
                setOpen(false);
                setOpenErrorModal(false);
              }}
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default CreateCodeModal;
