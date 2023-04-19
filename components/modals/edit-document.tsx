"use client";

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../elements/button/button";
import Modal from ".";
import Field from "../elements/field";
import SuccessfulModal from "./sucessful";

interface Props {
  document: {
    id: string;
    title: string;
    price: number;
    description: string;
  };
}

const EditDocument = ({ document }: Props) => {
  const [edit, setEdit] = useState(false);
  const [fields, setFields] = useState({
    id: document.id,
    title: document.title,
    description: document.description,
    price: document.price,
  });
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleUpdateDocument = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/edit-document", {
        method: "PUT",
        body: JSON.stringify({
          id: fields.id,
          title: fields.title,
          description: fields.description,
          price: +fields.price,
        }),
      });
      if (response.status === 201) {
        setEdit(false);
        setOpenSuccessfulModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* edit button */}
      <PencilSquareIcon
        onClick={() => setEdit(true)}
        className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-brand"
      />
      {/* edit modal */}
      <Modal size="medium" as="div" open={edit} onClose={() => setEdit(false)}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Edit Document</span>
          <span className="text-sm font-light opacity-50">
            Provide necessary details to edit document
          </span>
        </div>
        <form className="flex flex-col gap-10">
          <Field.Textbox
            type="text"
            name="title"
            label="Name of Document"
            required
            defaultValue={document.title}
            onChange={setFields}
          />
          <Field.Textbox
            type="number"
            name="price"
            defaultValue={document.price}
            label="Price of Document"
            required
            onChange={setFields}
          />

          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">
                Description of Document
              </span>
              <span className="text-sm font-light opacity-50">
                You can stretch out this field for a better view
              </span>
            </div>
            <textarea
              name="description"
              required
              defaultValue={document.description}
              onChange={(event) =>
                setFields({ ...fields, description: event.target.value })
              }
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
            />
          </div>
          <Button fill name="Edit Document" handler={handleUpdateDocument} />
        </form>
      </Modal>

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully edited a document!
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

export default EditDocument;
