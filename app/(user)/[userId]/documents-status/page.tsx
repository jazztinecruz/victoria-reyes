import moment from "moment";
import { use } from "react";
import Table from "../../../../components/table";
import database from "../../../../library/database";

const getRequests = async () => {
  const requests = await database.request.findMany({
    include: {
      user: true,
      document: true,
    },
  });
  return requests;
};

const DocumentStatus = () => {
  const requests = use(getRequests());

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
          {requests.map((request, index) => (
            <Table.Row key={request.id}>
              <Table.Data value={index + 1} />
              <Table.Data value={request.documentId} />
              <Table.Data value={request.document?.title} />
              <Table.Data value={request.document?.price} />
              <Table.Data value={request.status} />
              <Table.Data value={request!.user!.id} />
              <Table.Data value={request!.user!.givenName} />
              <Table.Data value={request!.user!.middleName} />
              <Table.Data value="5 Working Days" />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default DocumentStatus;
