"use client";
import { useState } from "react";
import DeleteDocument from "../../../../components/dashboard/documents/delete-document";
import EditDocument from "../../../../components/dashboard/documents/edit-document";
import Button from "../../../../components/elements/button/button";
import Field from "../../../../components/elements/field";
import Modal from "../../../../components/elements/modal";
import Document from "../../../document";

const DocumentsMaintenance = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const initialValue = {
    id: 0,
    name: "",
    description: "",
  };
  const [document, setDocument] = useState(initialValue);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Barangay Clearance",
      description:
        "A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose.",
    },
    {
      id: 2,
      name: "Barangay Indigency",
      description:
        "A document that are sometimes required by the Philippine government or a private institution as proof of an individual's financial situation.",
    },
    {
      id: 3,
      name: "Barangay ID",
      description:
        "A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose.",
    },
    {
      id: 4,
      name: "Cedula",
      description:
        "one of the basic requirements for most government transactions. It can also serve as valid identification for individuals and corporations residing or located in the same municipality from where it's acquired",
    },
  ]);

  return (
    <div className="grid gap-8">
      {/* button */}
      <div className="mr-auto">
        <Button
          name="Add Document"
          fill
          handler={() => setOpenAddModal(!openAddModal)}
        />
      </div>

      {/* documents */}
      <div className="grid grid-cols-1 gap-6 rounded-md tablet:grid-cols-2">
        {documents.map((document, index) => (
          <div
            key={index}
            className="grid grid-rows-[auto,1fr] rounded-md border-2 border-gray-200 p-6">
            <div className="ml-auto flex items-center gap-4">
              <EditDocument
                document={document}
                documents={documents}
                setDocuments={setDocuments}
              />
              <DeleteDocument
                document={document}
                documents={documents}
                setDocuments={setDocuments}
              />
            </div>
            <Document name={document.name} description={document.description} />
          </div>
        ))}
      </div>

      {openAddModal && (
        <Modal
          size="medium"
          as="div"
          open
          onClose={() => setOpenAddModal(!openAddModal)}>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Additional Document</span>
            <span className="text-sm font-light opacity-50">
              Provide necessary details to add document
            </span>
          </div>
          <form
            onSubmit={() => {
              setDocuments([...documents, document]);
              setDocument(initialValue);
              setOpenAddModal(false);
            }}
            className="flex flex-col gap-10">
            <Field.Textbox
              type="text"
              name="name"
              label="Name of Document"
              required
              onChange={setDocument}
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
                onChange={(event) =>
                  setDocument({
                    ...document,
                    description: event?.target.value,
                  })
                }
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
              />
            </div>
            <Button fill name="Add Document" />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default DocumentsMaintenance;
