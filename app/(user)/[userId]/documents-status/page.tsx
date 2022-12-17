import moment from "moment";
import Table from "../../../../components/table";
import database from "../../../../library/database";

const getUser = async (id: string) => {
  const user = await database.user.findUnique({ where: { id } });
  return user!;
};

const DocumentStatus = async ({ params }: any) => {
  const user = await getUser(params.userId);

  const fields = [
    "Count",
    "Resident ID",
    "Full Name",
    "Request Document",
    "Request Date",
    "Amount",
    "Status",
    "Processing Days",
  ];

  return (
    <div className="space-section laptop:grid laptop:place-items-center">
      <Table.Main name="ALL DOCUMENT STATUS">
        <Table.Head>
          <Table.Row heading>
            {fields.map((field) => (
              <Table.Heading key={field}>{field}</Table.Heading>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Data value={1} />
            <Table.Data value={user.id} />
            <Table.Data value={user.givenName + " " + user.familyName} />
            <Table.Data value="Barangay Clearance" />
            <Table.Data value={moment(user.birthdate).format("LL")} />
            <Table.Data value="50.00" />
            <Table.Data value="PENDING" />
            <Table.Data value="1-2 Days" />
          </Table.Row>
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default DocumentStatus;
