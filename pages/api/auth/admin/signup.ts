import type { NextApiRequest, NextApiResponse } from "next";
import type { SignupFields } from "../../../../library/api";
import crypto from "../../../../library/crypto";
import database from "../../../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    return response.status(405).send({ message: "Invalid Method." });
  }
  const body = JSON.parse(request.body);
  try {
    const existingAdmin = await database.admin.findUnique({
      where: { email: body.email },
    });
    if (existingAdmin) {
      return response.status(403).send({ message: "Admin already exists." });
    }

    const admin = await database.admin.create({
      data: {
        email: body.email,
        name: body.name,
        password: crypto.encrypt(body.password),
      },
    });
    return response.status(200).send({ message: "Created New Admin", admin });
  } catch (error) {
    console.log(error);
    response
      .status(505)
      .send({ message: "Internal server error | Invalid credentials" });
  }
};

export default handler;
