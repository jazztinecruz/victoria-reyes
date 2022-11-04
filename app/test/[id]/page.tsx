import { User } from "@prisma/client";
import { use } from "react";
import database from "../../../library/database";

// const getUsers = async () => {
//   const response = await fetch("http://localhost:3000/api/users", {
//     cache: "no-store",
//   });
//   const users: User[] = await response.json();
//   console.log("getUsers hits", users);
//   return users;
// };

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
  return users;
};

const TestPage = () => {
  const users = use(getUsers());

  console.log(users);
  return <div>TestPage ID {users[0]?.email}</div>;
};

export default TestPage;
