"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Table from "../../../../components/table";
import Button from "../../../../components/elements/button/button";
import Field from "../../../../components/elements/field";
import Modal from "../../../../components/elements/modal";

const PaymentMaintenance = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const headings = ["No", "Document Type", "Amount", "Process By", "Date"];
  const documents = [
    "Barangay ID",
    "Barangay Certificate",
    "Barangay Indigency",
    "Cedula",
    "Date",
    "Barangay Clearance",
  ];
  const initialValue = {
    type: "",
    amount: 0,
    processor: "",
    date: Date.now(),
  };
  const [value, setValue] = useState(initialValue);
  const [transactions, setTransactions] = useState<typeof value[]>([]);

  return (
    <div className="grid gap-10">
      {/* button */}
      <div className="mr-auto">
        <Button
          name="Add Payment"
          fill
          handler={() => setOpenModal(!openModal)}
        />
      </div>

      {/* table */}
      <div className="w-full">
        <Table.Main name="Transaction History">
          <Table.Head>
            <Table.Row heading>
              {headings.map((head) => (
                <Table.Heading key={head}>{head}</Table.Heading>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {transactions.map((transaction, index) => (
              <Table.Row key={index}>
                <Table.Data value={index + 1} />
                <Table.Data value={transaction.type} />
                <Table.Data value={transaction.amount} />
                <Table.Data value={transaction.processor} />
                <Table.Data value={transaction.date} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Main>
      </div>

      {/* modal */}
      {openModal && (
        <Modal
          size="medium"
          as="div"
          open
          onClose={() => setOpenModal(!openModal)}>
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
                  value={value.type}
                  onChange={setValue}
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
                          setValue({ ...value, type: document });
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
                onChange={setValue}
              />
              <Field.Textbox
                type="text"
                label="Process By"
                name="processor"
                required
                onChange={setValue}
              />
              <Field.Textbox
                type="date"
                label="Date"
                name="date"
                required
                onChange={setValue}
              />

              <Button
                name="Add Transaction"
                fill
                handler={() => {
                  setTransactions([...transactions, value]);
                  setOpenModal(false);
                  setValue(initialValue);
                }}
              />
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PaymentMaintenance;
