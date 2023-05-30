"use client";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Status as StatusEnum } from "@prisma/client";
import { useParams } from "next/navigation";
import { Fragment, useState } from "react";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  requestId: string;
  status: StatusEnum;
}

const Status = ({ requestId, status }: Props) => {
  const userId = useParams();
  const adminId = userId;
  const [selectedStatus, setSelectedStatus] = useState<StatusEnum>(status);
  const [successfullModal, setSuccessfullModal] = useState(false);

  const handleUpdateRequest = async (status: StatusEnum) => {
    setSelectedStatus(status);
    try {
      const response = await fetch("/api/update-status-request", {
        method: "PUT",
        body: JSON.stringify({
          id: requestId,
          adminId: adminId?.userId,
          status: status,
        }),
      });
      if (response.status === 201) setSuccessfullModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Menu as="div" className="relative flex items-center">
        <Menu.Button>{selectedStatus}</Menu.Button>

        <Menu.Items className="absolute top-6 left-0 w-64 z-50 space-y-2 rounded border bg-white p-2 shadow-lg">
          {Object.values(StatusEnum).map((status) => (
            <Menu.Item key={status}>
              {({ active }) => (
                <button
                  onClick={() => handleUpdateRequest(status)}
                  className={`${
                    active
                      ? "bg-slate-200 opacity-100 hover:bg-slate-200"
                      : "opacity-fade"
                  } smooth flex gap-4 rounded p-2 text-sm w-full`}>
                  <h3>{status}</h3>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      {successfullModal ? (
        <SuccessfulModal
          onClose={() => setSuccessfullModal(false)}
          handler={() => setSuccessfullModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully updated the status of a document!
          </span>
          <span className="text-gray">
            You can see the transaction from the transaction page.
          </span>
          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setSuccessfullModal(false)}
            />
          </div>
        </SuccessfulModal>
      ) : null}
    </>
  );
};

export default Status;
