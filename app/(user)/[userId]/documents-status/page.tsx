import Table from "../../../../components/table";
import database from "../../../../library/database";

const getUser = async (id: string) => {
  const user = await database.user.findUnique({
    where: { id },
    include: {
      requests: {
        include: {
          document: true,
        },
      },
    },
  });
  return user!;
};

const DocumentStatus = async ({ params }: any) => {
  const user = await getUser(params.userId);

  const headers = [
    "No.",
    "Document ID",
    "Document Title",
    "Document Price",
    "Document Status",
    "Purpose",
    "Resident ID",
    "First Name",
    "Middle Name",
    "Last Name",
    "Processing Days",
  ];

  return (
    <div className="space-section laptop:grid laptop:place-items-center">
      <Table.Main name="ALL DOCUMENT STATUS">
        <Table.Head>
          <Table.Row heading>
            {headers.map((field) => (
              <Table.Heading key={field}>{field}</Table.Heading>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {user.requests.map((request, index) => (
            <Table.Row key={request.id}>
              <Table.Data value={index + 1} />
              <Table.Data value={request.documentId} />
              <Table.Data value={request.document?.title} />
              <Table.Data value={request.document?.price} />
              <Table.Data value={request.status} />
              <Table.Data value={request.purpose} />
              <Table.Data value={user.id} />
              <Table.Data value={user!.givenName} />
              <Table.Data value={user!.middleName} />
              <Table.Data value={user!.givenName} />
              <Table.Data value="5 Working Days" />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default DocumentStatus;
