import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    return response.status(405).send({ message: "Invalid Method" });
  }
  const body = JSON.parse(request.body);
  try {
    const document = await database.request.create({
      data: {
        userId: body.userId,
        documentId: body.documentId,
      },
    });
    return response.status(201).send(document);
  } catch (error) {
    return response.status(505).send({ message: "Internal server error" });
  }
};

export default handler;
