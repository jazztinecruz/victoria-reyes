import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "../../../library/crypto";
import database from "../../../library/database";

type Body = Prisma.UserCreateInput & {
  address: Prisma.AddressCreateInput;
  households: Prisma.HouseholdCreateInput[];
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const body: Body = request.body;
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
      return response.status(505).send({ message: "User already exist" });
    }
    const { password } = body;
    const user = await database.user.create({
      data: {
        ...body,
        password: crypto.encrypt(password),
        birthdate: new Date(body.birthdate),
        address: {
          create: { street: body.address.street },
        },
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
      .send({ message: "Authenticated user", userId: user.id });
  } catch (error) {
    console.log(error);
    response.status(505).send({ message: "Invalid credentials" });
  }
};

export default handler;
