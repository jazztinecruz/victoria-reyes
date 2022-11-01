import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "../../../library/crypto";
import database from "../../../library/database";

type Body = {
  email: string;
  password: string;
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const body: Body = request.body;
  if (request.method !== "POST") {
    return response
      .status(405)
      .send({ message: "Method not support for signin" });
  }
  try {
    const user = await database.user.findUnique({
      where: { email: body.email },
      select: { id: true, password: true },
    });
    const decryptedPassword = crypto.decrypt(user!.password);
    if (body.password === decryptedPassword) {
      return response
        .status(200)
        .send({ message: "Authenticated user", userId: user!.id });
    }
    return response.status(403).send({ message: "Incorrect password" });
  } catch (error) {
    return response.status(505).send({ message: "Can't find user" });
  }
};

export default handler;
