import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "PUT") {
    return response.status(405).send({ message: "Invalid Method" });
  }
  const body = JSON.parse(request.body);
  try {
    const existingCode = await database.user.findMany({
      where: { code: body.code },
    });
    if (!existingCode.length)
      return response.status(404).send({ message: "Code doesn't exists." });
    const user = await database.user.update({
      where: {
        id: body.id,
      },
      data: {
        code: body.code,
      },
    });
    return response.status(201).send(user);
  } catch (error) {
    return response.status(500).send({ message: "Internal server error" });
  }
};

export default handler;
