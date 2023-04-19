"use client";
import { useState } from "react";
import Modal from ".";
import database from "../../library/database";
import Button from "../elements/button/button";
import Table from "../table";

interface Props {
  requests: any;
}

const BatchProcessingModal = ({ requests }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const headers = [
    "No.",
    "Document ID",
    "Document Title",
    "Document Price",
    "Document Status",
    "Resident ID",
    "First Name",
    "Middle Name",
    "Last Name",
    "Account Verified",
  ];

  return (
    <div>
      {/* button */}
      <div className="mr-auto">
        <Button
          name="Batch Process"
          fill
          handler={() => setOpenModal(!openModal)}
        />
      </div>

      {openModal && (
        <Modal
          size="large"
          as="div"
          open
          onClose={() => setOpenModal(!openModal)}>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <span className="mt-5 text-lg font-medium">
              Are you sure you want to do batch processing?
            </span>
            <span className="-mt-2 text-sm font-medium opacity-50">
              This will print all requested documents in one go.
            </span>
            <div className="my-4 flex items-center gap-4">
              <Button handler={() => setOpenModal(!openModal)} name="Go Back" />
              <Button
                handler={() => setOpenModal(!openModal)}
                fill
                name="Print All"
              />
            </div>

            {/* tables */}
            <div className="h-96 w-full overflow-scroll">
              <Table.Main name="List of Pending Requests">
                <Table.Head>
                  <Table.Row heading>
                    {headers.map((field) => (
                      <Table.Heading key={field}>{field}</Table.Heading>
                    ))}
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {requests.map((request: any, index: any) => (
                    <Table.Row key={request.id}>
                      <Table.Data value={index + 1} />
                      <Table.Data value={request.documentId} />
                      <Table.Data value={request.document?.title} />
                      <Table.Data value={request.document?.price} />
                      <Table.Data value={request.status} />
                      <Table.Data value={request!.user!.id} />
                      <Table.Data value={request!.user!.givenName} />
                      <Table.Data value={request!.user!.middleName} />
                      <Table.Data value={request!.user!.familyName} />
                      <Table.Data value={request!.user!.verified} />
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Main>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BatchProcessingModal;
