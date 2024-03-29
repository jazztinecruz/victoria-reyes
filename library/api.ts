import { Prisma } from "@prisma/client";
import axios from "axios";

export type SigninFields = {
  email: string;
  password: string;
};

export type SignupFields = Prisma.UserCreateInput & {
  households: Prisma.HouseholdCreateWithoutUserInput[];
};

const api = {
  signin: async (fields: SigninFields) => {
    const { data, status } = await axios
      .post("/api/auth/signin", fields)
      .then((response) => response)
      .catch((error) => error.response);
      console.log(data, status)
    return { data, status };
  },
  signup: async (fields: SignupFields) => {
    const { data, status } = await axios
      .post("/api/auth/signup", fields)
      .then((response) => response)
      .catch((error) => error.response);
    return { data, status };
  },
};

export default api;
