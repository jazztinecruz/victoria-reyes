import React, { use } from "react";
import AddSignatory from "../../../../components/modals/add-signatory";
import DeleteSignatory from "../../../../components/modals/delete-signatory";
import Table from "../../../../components/table";
import database from "../../../../library/database";

const getSignatories = async () => {
  const signatories = await database.signatory.findMany();
  return signatories;
};

const SignatoriesMaintenance = () => {
  const signatories = use(getSignatories());

  return (
    <div className="grid gap-10">
      <AddSignatory />

      <Table.Main name="List of Signatories">
        <Table.Head>
          <Table.Row heading>
            <Table.Heading>No.</Table.Heading>
            <Table.Heading>Given Name</Table.Heading>
            <Table.Heading>Middle Name</Table.Heading>
            <Table.Heading>Family Name</Table.Heading>
            <Table.Heading>Action</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {signatories.map((signatory, index) => (
            <Table.Row key={signatory.id}>
              <Table.Data value={index + 1} />
              <Table.Data value={signatory.firstName} />
              <Table.Data value={signatory.middleName} />
              <Table.Data value={signatory.lastName} />
              <Table.Data value={<DeleteSignatory signatory={signatory} />} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default SignatoriesMaintenance;
