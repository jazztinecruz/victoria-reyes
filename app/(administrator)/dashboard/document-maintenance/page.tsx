"use client";
import { useState } from "react";
import DeleteDocument from "../../../../components/documents/delete-document";
import EditDocument from "../../../../components/documents/edit-document";
import Button from "../../../../components/elements/button/button";
import AddDocumentModal from "../../../../components/elements/modal/add-document";
import Document from "../../../document";

const DocumentMaintenance = () => {
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
        <AddDocumentModal
          setDocument={setDocument}
          document={document}
          documents={documents}
          setDocuments={setDocuments}
          openAddModal={openAddModal}
          setOpenAddModal={setOpenAddModal}
          initialValue={initialValue}
        />
      )}
    </div>
  );
};

export default DocumentMaintenance;
