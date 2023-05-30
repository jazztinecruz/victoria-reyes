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
  });
  return requests;
};

const DashboardRequestsPage = () => {
  const requests = use(getRequests());

  return <Requests requests={requests} />;
};

export default DashboardRequestsPage;
