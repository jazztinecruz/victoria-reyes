import type { NextApiRequest, NextApiResponse } from "next";
import type { SigninFields } from "../../../library/api";
import crypto from "../../../library/crypto";
import database from "../../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "GET") {
    return response
      .status(405)
      .send({ message: "Method not support for signin" });
  }
  try {
    const users = await database.user.findMany();
    return response.status(200).send(users);
  } catch (error) {
    return response.status(505).send({ message: "Internal server error" });
  }
};

export default handler;
