"use client";
import { useState } from "react";
import ConfirmedDocumentrequest from "../../../../components/elements/modal/confirmed-request";
import RequestDocument from "../../../../components/elements/modal/request-document";

const Documents = () => {
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const documents = [
    {
      name: "Barangay Clearance",
      description:
        "A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose.",
    },
    {
      name: "Barangay Indigency",
      description:
        "A document that are sometimes required by the Philippine government or a private institution as proof of an individual's financial situation.",
    },
    {
      name: "Barangay ID",
      description:
        "A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose.",
    },
    {
      name: "Cedula",
      description:
        "one of the basic requirements for most government transactions. It can also serve as valid identification for individuals and corporations residing or located in the same municipality from where it's acquired.",
    },
  ];

  return (
    <div className="grid h-full place-items-center">
      <div className="grid grid-flow-row items-start justify-start gap-6 tablet:grid-cols-2">
        {documents.map((document) => (
          <div className="card w-96 cursor-pointer border-2 border-gray-100 bg-white text-center">
            <div className="card-body gap-6">
              <h2 className="card-title justify-center">{document.name}</h2>
              <p>{document.description}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => setOpenRequestModal(!openRequestModal)}
                  className="btn-primary btn border-none bg-brand hover:btn-ghost">
                  Request
                </button>
              </div>
            </div>
          </div>
        ))}

        {openRequestModal && (
          <RequestDocument
            onClose={() => setOpenRequestModal(!openRequestModal)}
            backHandler={() => setOpenRequestModal(!openRequestModal)}
            continueHandler={() =>
              setOpenConfirmationModal(!openConfirmationModal)
            }
          />
        )}

        {openConfirmationModal && (
          <ConfirmedDocumentrequest
            onClose={() => setOpenConfirmationModal(!openConfirmationModal)}
            handler={() => {
              setOpenConfirmationModal(!openConfirmationModal);
              setOpenRequestModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Documents;
