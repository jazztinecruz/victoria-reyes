"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "../../../../components/elements/button/button";
import Modal from "../../../../components/elements/modal";

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
          <Modal
            size="medium"
            as="div"
            open
            onClose={() => setOpenRequestModal(!openRequestModal)}>
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <span className="mt-5 text-xl font-semibold text-brand">
                Are you sure you want to request this document?
              </span>
              <div className="mt-6 flex items-center gap-4">
                <Button
                  handler={() => setOpenRequestModal(!openRequestModal)}
                  name="Go Back"
                />
                <Button
                  handler={() =>
                    setOpenConfirmationModal(!openConfirmationModal)
                  }
                  fill
                  name="Continue"
                />
              </div>
            </div>
          </Modal>
        )}

        {openConfirmationModal && (
          <Modal
            size="medium"
            as="div"
            open
            onClose={() => setOpenConfirmationModal(!openConfirmationModal)}>
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <span className="mt-5 text-xl font-semibold text-brand">
                You've succesfully requested!
              </span>
              <span className="text-gray mb-4 text-sm">
                <span>
                  Please prepare <span className="font-semibold">50.00</span>{" "}
                  upon claiming.
                </span>
                <br></br>
                <br></br>
                <span className="font-semibold">Note:</span> You can only
                request a document from{" "}
                <span className="font-semibold">8:00 am</span> to{" "}
                <span className="font-semibold">11:00 am</span>. All documents
                that are requested after the desginated time will be process
                tomorrow.
                <br></br> <br></br>
                <span>
                  You can check your request's status on the{" "}
                  <span className="font-semibold">Documents Status Page</span>{" "}
                  and claim your document to our office.
                </span>
              </span>
              <Button
                handler={() => {
                  setOpenConfirmationModal(!openConfirmationModal);
                  setOpenRequestModal(false);
                }}
                name="I Got it!"
                fill
              />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Documents;
