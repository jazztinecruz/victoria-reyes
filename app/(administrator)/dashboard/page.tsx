import { use } from "react";
import database from "../../../library/database";
import AdminDashboard from "../../../components/dashboard";

const getUsers = async () => {
  const users = await database.user.findMany({
    where: {
      verified: true,
    },
    include: {
      households: true,
    },
  });
  return users;
};

const DashboardPage = () => {
  const users = use(getUsers());
  return <AdminDashboard users={users} />;
};

export default DashboardPage;
