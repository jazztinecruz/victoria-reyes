import type { NextApiRequest, NextApiResponse } from "next";
import validatePhone from "../../../helpers/validate-phone";
import type { SignupFields } from "../../../library/api";
import crypto from "../../../library/crypto";
import database from "../../../library/database";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const body: SignupFields = request.body;
  if (request.method !== "POST") {
    return response
      .status(405)
      .send({ message: "Method not support for signup" });
  }
  try {
    const existingUser = await database.user.findUnique({
      where: { email: body.email },
    });
    if (existingUser) {
      return response.status(403).send({ message: "User already exist" });
    }

    const { password, phone, households } = body;

    const deepValidatePhone = () => {
      if (!validatePhone(phone)) return false;
      for (const household of households) {
        if (!validatePhone(household.phone)) return false;
      }
      return true;
    };

    if (!deepValidatePhone()) {
      return response.status(400).send({ message: "Invalid phone number" });
    }

    const user = await database.user.create({
      data: {
        ...body,
        password: crypto.encrypt(password),
        birthdate: new Date(body.birthdate),
        households: {
          create: body.households.map((household) => {
            return { ...household, birthdate: new Date(body.birthdate) };
          }),
        },
      },
      select: { id: true },
    });
    return response
      .status(200)
      .send({ message: "Created user", userId: user.id });
  } catch (error) {
    console.log(error);
    response
      .status(505)
      .send({ message: "Internal server error | Invalid credentials" });
  }
};

export default handler;
