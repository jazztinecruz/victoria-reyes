"use client";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";

const AddDocumentModal = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [fields, setFields] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleAddDocument = async () => {
    const response = await fetch("/api/add-document", {
      method: "POST",
      body: JSON.stringify({
        title: fields.title,
        description: fields.description,
        price: +fields.price,
      }),
    });
  };

  return (
    <>
      <div className="mr-auto">
        <Button
          name="Add Document"
          fill
          handler={() => setOpenAddModal(true)}
        />
      </div>

      <Modal
        size="medium"
        as="div"
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Additional Document</span>
          <span className="text-sm font-light opacity-50">
            Provide necessary details to add document
          </span>
        </div>
        <form className="flex flex-col gap-10">
          <Field.Textbox
            type="text"
            name="title"
            label="Name of Document"
            required
            value={fields.title}
            onChange={setFields}
          />
          <Field.Textbox
            type="number"
            name="price"
            value={fields.price}
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
              value={fields.description}
              onChange={(event) =>
                setFields({ ...fields, description: event.target.value })
              }
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
            />
          </div>
          <Button fill name="Add Document" handler={handleAddDocument} />
        </form>
      </Modal>
    </>
  );
};

export default AddDocumentModal;
