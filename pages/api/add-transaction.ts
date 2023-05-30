import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    return response.status(405).send({ message: "Invalid Method" });
  }
  const body = JSON.parse(request.body);
  try {
    const existingUser = await database.user.findUnique({
      where: {
        id: body.userId,
      },
    });
    const existingDocument = await database.document.findUnique({
      where: {
        id: body.documentId,
      },
    });

    if (!existingUser) {
      return response.status(404).send({ message: "User ID does not exist." });
    }

    if (!existingDocument) {
      return response
        .status(404)
        .send({ message: "Document ID does not exist." });
    }

    const document = await database.request.create({
      data: {
        status: "CLAIMED",
        documentId: body.documentId,
        userId: body.userId,
        adminId: body.adminId,
        purpose: "Added by Admin",
      },
    });
    return response.status(201).send(document);
  } catch (error) {
    return response.status(505).send({ message: "Internal server error" });
  }
};

export default handler;
