"use client";

import { useState } from "react";
import Table from "../../../../components/table";
import Button from "../../../../components/elements/button/button";
import AddTransaction from "../../../../components/elements/modal/add-transaction";

const PaymentMaintenance = () => {
  const [openModal, setOpenModal] = useState(false);
  const initialValue = {
    type: "",
    amount: 0,
    processor: "",
    date: Date.now(),
  };
  const [fields, setFields] = useState(initialValue);
  const [transactions, setTransactions] = useState<typeof fields[]>([]);
  const headings = ["No", "Document Type", "Amount", "Process By", "Date"];

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
        <AddTransaction
          openModal={openModal}
          setOpenModal={setOpenModal}
          fields={fields}
          setFields={setFields}
          transactions={transactions}
          setTransactions={setTransactions}
          initialValue={initialValue}
        />
      )}
    </div>
  );
};

export default PaymentMaintenance;
