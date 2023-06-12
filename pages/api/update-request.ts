import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "PATCH") {
     const requestIds = request.body.requestIds as string[];
  try {
    const updateMany = await database.request.updateMany({
        where: {
            id: {
                in: requestIds
            }
        },
        data: {
            status: 'READY'
        }
    })
    return response.status(200).send(updateMany);

  } catch (error) {
    return response.status(505).send({ message: "Internal server error" });
  }
  }
  
  return response.status(405).send({ message: "Invalid Method" });
};

export default handler;
