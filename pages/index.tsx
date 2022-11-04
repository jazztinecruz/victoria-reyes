import { GetServerSideProps } from "next";
import database from "../library/database";

const HomePage = ({ users }: any) => {
  console.log(users);
  return <div>Home Page Here...</div>;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await database.user.findMany();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
};
