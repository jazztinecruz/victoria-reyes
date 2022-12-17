"use client";

import React, { useState } from "react";
import Button from "../../../../components/elements/button/button";
import AddSignatory from "../../../../components/elements/modal/add-signatory";
import Table from "../../../../components/table";

const SignatoriesMaintenance = () => {
  const [openModal, setOpenModal] = useState(false);
  const signatory = {
    givenName: "",
    middleName: "",
    familyName: "",
  };
  const [signatories, setSignatories] = useState<typeof signatory[]>([]);
  return (
    <div className="grid gap-10">
      <div className="mr-auto">
        <Button
          name="Add Signatory"
          fill
          handler={() => setOpenModal(!openModal)}
        />
      </div>

      <Table.Main name="List of Signatories">
        <Table.Head>
          <Table.Row heading>
            <Table.Heading>No.</Table.Heading>
            <Table.Heading>Given Name</Table.Heading>
            <Table.Heading>Middle Name</Table.Heading>
            <Table.Heading>Family Name</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {signatories.map((signatory, index) => (
            <Table.Row key={index}>
              <Table.Data value={index + 1} />
              <Table.Data value={signatory.givenName} />
              <Table.Data value={signatory.middleName} />
              <Table.Data value={signatory.familyName} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>

      {openModal && (
        <AddSignatory
          onClose={() => setOpenModal(!openModal)}
          signatories={signatories}
          setSignatories={setSignatories}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default SignatoriesMaintenance;
