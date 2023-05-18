import database from "../../../../../library/database";
import Table from "../../../../../components/table";
import { use } from "react";
import Status from "../../../../../components/modals/status";
import BatchProcessingModal from "../../../../../components/modals/batch-processing";

const getRequests = async () => {
  const requests = await database.request.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      user: true,
      document: true,
    },
  });
  return requests;
};

const DashboardRequestsPage = () => {
  const requests = use(getRequests());

  const headers = [
    "ACTION",
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
    "Account Verified",
  ];

  return (
    <div className="space-section">
      <BatchProcessingModal requests={requests} />
      <Table.Main name="List of Pending Requests">
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
              <Table.Data value={<Status requestId={request.id} />} />
              <Table.Data value={index + 1} />
              <Table.Data value={request.documentId} />
              <Table.Data value={request.document?.title} />
              <Table.Data value={request.document?.price} />
              <Table.Data value={request.status} />
              <Table.Data value={request.purpose} />
              <Table.Data value={request!.user!.id} />
              <Table.Data value={request!.user!.givenName} />
              <Table.Data value={request!.user!.middleName} />
              <Table.Data value={request!.user!.familyName} />
              <Table.Data value={request!.user!.verified} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default DashboardRequestsPage;
