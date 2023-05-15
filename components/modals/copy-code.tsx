"use client";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";

interface Props {
  code: string | null;
}

const CopyCodeModal = ({ code }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button name="Copy Code" fill handler={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} size="medium">
        <div>
          {/* title logo and close btn*/}
          <div className="grid grid-cols-[1fr,auto] items-center">
            <div className="flex items-center gap-3">
              <ClipboardIcon className="h-10 w-10 text-brand" />
              <div className="flex flex-col gap-1">
                <h1 className="text-md font-semibold">Copy Code</h1>
                <p className="text-sm text-gray-400">
                  You can join in your family code by copying this code and paste it
                  on the join bin.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-snow my-6 w-full py-3 pl-4 text-lg font-bold">
            {code}
          </div>

          <Button
            name="Okay!"
            fill
            handler={() => setOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
};

export default CopyCodeModal;
