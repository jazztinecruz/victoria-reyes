import { Prisma } from "@prisma/client";
import axios from "axios";

export type Signin = {
  email: string;
  password: string;
};

export type Signup = Prisma.UserCreateInput & {
  address: Prisma.AddressCreateWithoutUserInput;
  households: Prisma.HouseholdCreateWithoutUserInput[];
};

const api = {
  signin: async (fields: Signin) => {
    const { data, status } = await axios
      .post("/api/auth/signin", fields)
      .then((response) => response)
      .catch((error) => error.response);
    return { data, status };
  },
  signup: async (fields: Signup) => {
    const { data, status } = await axios
      .post("/api/auth/signup", fields)
      .then((response) => response)
      .catch((error) => error.response);
    return { data, status };
  },
};

export default api;
