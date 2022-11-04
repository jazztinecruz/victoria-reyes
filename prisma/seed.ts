import { SignupFields } from "../library/api";
import crypto from "../library/crypto";
import database from "../library/database";

const data: SignupFields = {
  email: "jazztine@gmail.com",
  password: "NixNonex990922",
  givenName: "Jazztine",
  middleName: "Tabugara",
  familyName: "Abucejo",
  gender: "MALE",
  birthdate: "September 12, 1999",
  birthplace: "Makati City",
  phone: "+6395193321",
  occupation: "Programmer",
  homeowner: false,
  voter: false,
  address: {
    street: "Blk 11 Lot 12, Phase 3",
  },
  households: [
    {
      givenName: "George",
      middleName: "The",
      familyName: "Many",
      gender: "MALE",
      birthdate: "September 12, 2004",
      birthplace: "Tagaytay Zoo",
      phone: "+6396293710",
      occupation: "Gamer",
      relationship: "SON",
    },
    {
      givenName: "Brad",
      middleName: "Meow",
      familyName: "Wawaaku",
      gender: "FEMALE",
      birthdate: "December 16, 2023",
      birthplace: "Cavite City",
      phone: "+6391193310",
      occupation: "Teacher",
      relationship: "OTHERS",
    },
  ],
};

const seed = async () => {
  await database.user.create({
    data: {
      ...data,
      password: crypto.encrypt(data.password),
      birthdate: new Date(data.birthdate),
      address: {
        create: { street: data.address.street },
      },
      households: {
        create: data.households.map((household) => {
          return { ...household, birthdate: new Date(data.birthdate) };
        }),
      },
    },
    select: { id: true },
  });
};

seed()
  .then(async () => {
    await database.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await database.$disconnect();

    process.exit(1);
  });
