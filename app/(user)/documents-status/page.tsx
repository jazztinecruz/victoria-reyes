import Table from "../../../components/dashboard/sections/table";

const DocumentStatus = () => {
  const fields = [
    "Count",
    "Resident ID",
    "Full Name",
    "Request Document",
    "Request Date",
    "Amount",
    "Status",
  ];

  return (
    <div className="space-section">
      <Table.Main name="MY DOCUMENT STATUS">
        <Table.Head>
          <Table.Row heading>
            {fields.map((field) => (
              <Table.Heading key={field}>{field}</Table.Heading>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row key="1">
            <Table.Data value="1" />
            <Table.Data value="201934095-394" />
            <Table.Data value="Jazztine Hernandez Cruz" />
            <Table.Data value="Barangay Clearance" />
            <Table.Data value="September 14 2022" />
            <Table.Data value="50.00" />
            <Table.Data value="PENDING" />
          </Table.Row>
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default DocumentStatus;
