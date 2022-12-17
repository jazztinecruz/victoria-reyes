import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  fields: {
    type: string;
    amount: number;
    processor: string;
    date: number;
  };
  setFields: React.Dispatch<
    React.SetStateAction<{
      type: string;
      amount: number;
      processor: string;
      date: number;
    }>
  >;
  transactions: {
    type: string;
    amount: number;
    processor: string;
    date: number;
  }[];
  setTransactions: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
        amount: number;
        processor: string;
        date: number;
      }[]
    >
  >;
  initialValue: {
    type: string;
    amount: number;
    processor: string;
    date: number;
  };
}

const AddTransaction = ({
  openModal,
  setOpenModal,
  fields,
  setFields,
  transactions,
  setTransactions,
  initialValue,
}: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const documents = [
    "Barangay ID",
    "Barangay Certificate",
    "Barangay Indigency",
    "Cedula",
    "Date",
    "Barangay Clearance",
  ];

  return (
    <Modal size="medium" as="div" open onClose={() => setOpenModal(!openModal)}>
      <div className="z-50 grid gap-6">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Add transaction</span>
          <span className="text-sm font-light opacity-50">
            Provide necessary details to add another transaction
          </span>
        </div>

        <form className="grid gap-6">
          <div className="relative grid grid-cols-[1fr,auto] items-center gap-4">
            <Field.Textbox
              type="text"
              label="Type of Document"
              name="type"
              value={fields.type}
              onChange={setFields}
              readOnly
            />

            <ChevronDownIcon
              className="mt-8 h-6 w-6"
              onClick={() => setOpenDropdown(!openDropdown)}
            />

            {openDropdown && (
              <div className="absolute top-24 left-0 w-full rounded-md border-2 border-gray-200 bg-white">
                {documents.map((document) => (
                  <div
                    key={document}
                    onClick={() => {
                      setFields({ ...fields, type: document });
                      setOpenDropdown(false);
                    }}
                    className="w-full cursor-pointer py-3 px-4 text-left text-sm font-medium hover:bg-brand/50">
                    {document}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Field.Textbox
            type="number"
            label="Amount"
            name="amount"
            required
            onChange={setFields}
          />
          <Field.Textbox
            type="text"
            label="Process By"
            name="processor"
            required
            onChange={setFields}
          />
          <Field.Textbox
            type="date"
            label="Date"
            name="date"
            required
            onChange={setFields}
          />

          <Button
            name="Add Transaction"
            fill
            handler={() => {
              setTransactions([...transactions, fields]);
              setOpenModal(false);
              setFields(initialValue);
            }}
          />
        </form>
      </div>
    </Modal>
  );
};

export default AddTransaction;
