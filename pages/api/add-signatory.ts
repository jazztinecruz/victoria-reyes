import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    return response.status(405).send({ message: "Invalid Method" });
  }
  const body = JSON.parse(request.body);
  try {
    const existingSignatory = await database.signatory.findMany({
      where: {
        firstName: body.firstName,
        middleName: body.middleName,
        lastName: body.lastName,
      },
    });
    if (existingSignatory.length)
      return response
        .status(404)
        .send({ message: "Signatory already exists." });

    const document = await database.signatory.create({
      data: {
        firstName: body.firstName,
        middleName: body.middleName,
        lastName: body.lastName,
      },
    });
    return response.status(201).send(document);
  } catch (error) {
    return response.status(505).send({ message: "Internal server error" });
  }
};

export default handler;
