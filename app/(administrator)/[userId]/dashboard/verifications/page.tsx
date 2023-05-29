import { use } from "react";
import Verifications from "../../../../../components/verifications";
import database from "../../../../../library/database";

const getUsers = async () => {
  const users = await database.user.findMany({
    where: {
      verified: false,
      declined: false,
    },
    include: {
      households: true,
    },
  });
  return users;
};

const DashboardVerificationsPage = () => {
  const users = use(getUsers());
  return <Verifications users={users} />;
};

export default DashboardVerificationsPage;
