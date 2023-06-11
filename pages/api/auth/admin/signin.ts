import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "../../../../library/crypto";
import database from "../../../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    return response.status(405).send({ message: "Invalid Method." });
  }
  
  const body = JSON.parse(request.body);

  try {
    const admin = await database.admin.findUnique({
      where: { email: body.email },
      select: { id: true, name: true, password: true },
    });
    if (!admin) {
      return response.status(404).send({ message: "Can't find admin." });
    }
    const decryptedPassword = crypto.decrypt(admin.password);
    console.log(decryptedPassword)
    if (body.password === decryptedPassword) {
      return response
        .status(200)
        .send({ message: "Authenticated user", admin });
    }
    return response.status(403).send({ message: "Incorrect password." });
  } catch (error) {
    return response.status(505).send({ message: "Internal server error." });
  }
};

export default handler;
