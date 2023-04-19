"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  document: {
    id: string;
    title: string;
    price: number;
    description: string;
  };
}

const DeleteDocument = ({ document }: Props) => {
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleDeleteDocument = async () => {
    try {
      const response = await fetch("/api/delete-document", {
        method: "DELETE",
        body: JSON.stringify({
          id: document.id,
        }),
      });
      if (response.status === 200) setOpenSuccessfulModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TrashIcon
        onClick={handleDeleteDocument}
        className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-red-700"
      />

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully deleted a document!
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
    </>
  );
};

export default DeleteDocument;
