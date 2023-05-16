"use client";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from ".";
import database from "../../library/database";
import Button from "../elements/button/button";
import Textbox from "../elements/field/textbox";

interface Props {
  userId: string;
}

const JoinCodeModal = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    code: "",
  });

  const [error, setError] = useState("");

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
        console.log("successful");
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
    </>
  );
};

export default JoinCodeModal;
