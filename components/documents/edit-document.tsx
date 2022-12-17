"use client";

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../elements/button/button";
import Modal from "../modals";

interface Props {
  document: {
    id: number;
    name: string;
    description: string;
  };
  documents: {
    id: number;
    name: string;
    description: string;
  }[];
  setDocuments: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        description: string;
      }[]
    >
  >;
}
const EditDocument = ({ document, documents, setDocuments }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(document);

  return (
    <div>
      {/* edit button */}
      <PencilSquareIcon
        onClick={() => setEdit(!edit)}
        className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-brand"
      />
      {/* edit modal */}
      {edit && (
        <Modal size="medium" as="div" open onClose={() => setEdit(!edit)}>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Edit Document</span>
            <span className="text-sm font-light opacity-50">
              Edit the necessary fields to edit document
            </span>
          </div>

          <form className="flex flex-col gap-10">
            <span className="text-lg font-semibold">Name of Document</span>
            <input
              type="text"
              name="name"
              defaultValue={document.name}
              required
              onChange={(event) => {
                if (event.target?.defaultValue !== event.target?.value) {
                  setEditedValue({
                    ...editedValue,
                    name: event.target.value,
                  });
                }
              }}
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
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
                defaultValue={document.description}
                required
                onChange={(event) => {
                  if (event.target.defaultValue !== event.target.value) {
                    setEditedValue({
                      ...editedValue,
                      description: event?.target.value,
                    });
                  }
                }}
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
              />
            </div>

            <Button
              fill
              name={`Edit ${document.name}`}
              handler={() => {
                const updatedDocuments = documents.map((docx) => {
                  if (document.id === docx.id) {
                    return {
                      ...docx,
                      name: editedValue.name,
                      description: editedValue.description,
                    };
                  }
                  return docx;
                });
                setDocuments(updatedDocuments);
                setEdit(false);
              }}
            />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default EditDocument;
