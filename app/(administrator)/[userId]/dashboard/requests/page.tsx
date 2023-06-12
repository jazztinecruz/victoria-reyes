import database from "../../../../../library/database";
import { use } from "react";
import Requests from "../../../../../components/requests";

const getRequests = async () => {
  const requests = await database.request.findMany({
    where: {
      status: {
        not: "CLAIMED",
      },
      user: {
        declined: false,
      },
    },
    include: {
      user: true,
      document: true,
    },
    orderBy: [{ // i added createdAt and updatedAt to track the date and use it to sort as descending order
      createdAt: 'desc'
    }]
  });
  return requests;
};

const getExistingDocumentTypes = async () => {
  const requests = await database.document.findMany();
  return requests;
};

const DashboardRequestsPage = () => {
  const requests = use(getRequests());
  const documents = use(getExistingDocumentTypes());

  return <Requests requests={requests} documents={documents} />;
};

export default DashboardRequestsPage;
