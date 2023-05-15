"use client";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";

interface Props {
  userId: string;
}

const JoinCodeModal = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/update-code", {
        method: "PUT",
        body: JSON.stringify({
          id: userId,
          code: value,
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
          <div className="bg-snow mt-6 w-full py-3 pl-4 text-lg font-bold">
            <input
              className="w-full rounded border"
              placeholder="Paste Code Here ..."
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
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
