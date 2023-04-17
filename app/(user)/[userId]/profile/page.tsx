import React from "react";
import Profile from "../../../../components/profile";
import database from "../../../../library/database";

const getUser = async (id: string) => {
  const user = await database.user.findUnique({ where: { id } });
  return user!;
};

const UserProfile = async ({ params }: any) => {
  const user = await getUser(params.userId);

  return <Profile user={JSON.parse(JSON.stringify(user))} />;
};

export default UserProfile;
