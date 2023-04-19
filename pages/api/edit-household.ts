import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "PUT") {
    return response.status(405).send({ message: "Invalid Method" });
  }

  const {
    householdId,
    userId,
    givenName,
    middleName,
    familyName,
    gender,
    birthdate,
    birthplace,
    phone,
    occupation,
    relationship,
  } = JSON.parse(request.body);

  try {
    const updatedHousehold = await database.household.update({
      where: {
        id_userId: {
          id: householdId,
          userId,
        },
      },
      data: {
        givenName,
        middleName,
        familyName,
        gender,
        birthdate,
        birthplace,
        phone,
        occupation,
        relationship,
      },
    });

    return response.status(200).send(updatedHousehold);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: "Internal server error" });
  }
};

export default handler;
