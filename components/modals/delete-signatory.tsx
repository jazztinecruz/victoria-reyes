"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  signatory: {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
  };
}

const DeleteSignatory = ({ signatory }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteSignatory = async () => {
    try {
      const response = await fetch("/api/delete-signatory", {
        method: "DELETE",
        body: JSON.stringify({
          id: signatory.id,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setOpenModal(true);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TrashIcon
        onClick={handleDeleteSignatory}
        className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-red-700"
      />

      {openModal ? (
        <SuccessfulModal
          onClose={() => setOpenModal(false)}
          handler={() => setOpenModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully deleted a signatory!
          </span>
          <span className="text-gray">You can add more in the future.</span>
          <div className="z-50">
            <Button name="Go Back" fill handler={() => setOpenModal(false)} />
          </div>
        </SuccessfulModal>
      ) : null}
    </>
  );
};

export default DeleteSignatory;
