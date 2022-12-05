import React from "react";
import Profile from "../../../../components/user-profile";
import database from "../../../../library/database";

const getUser = async (id: string) => {
  const user = await database.user.findUnique({ where: { id } });
  return user!;
};

const UserProfile = async ({ params }: any) => {
  const user = await getUser(params.userId);
  console.log(user)

  return <Profile user={user}/>;
};

export default UserProfile