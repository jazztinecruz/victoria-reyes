import { use } from "react";
import database from "../../library/database";

const getUsers = async () => {
  const users = await database.user.findMany({
    where: {
      verified: true,
    },
    include: {
      address: true,
      households: true,
    },
  });
  console.log("getUsers hits", users);
  return users;
};

const TestPage = () => {
  const users = use(getUsers());
  console.log(users);
  return <div>TestPage {users[0]?.email}</div>;
};

export default TestPage;
