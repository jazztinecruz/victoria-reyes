import database from "../library/database";
import { faker } from "@faker-js/faker";
import { Gender, Prisma, Relationship } from "@prisma/client";

const generateHouseHolds = (
  count: number
): Prisma.HouseholdCreateWithoutUserInput[] => {
  const households: Prisma.HouseholdCreateWithoutUserInput[] = [];
  for (let i = 0; i < Math.floor(Math.random() * count) + 1; i++) {
    const household = {
      givenName: faker.name.firstName(),
      middleName: faker.name.middleName(),
      familyName: faker.name.lastName(),
      gender: faker.name.sexType().toUpperCase() as Gender,
      birthdate: new Date(faker.date.birthdate()),
      birthplace: `${faker.address.cityName()} ${faker.address.streetAddress()}`,
      phone: faker.phone.number("+6391######"),
      occupation: faker.name.jobTitle(),
      relationship: "OTHERS" as Relationship,
    };
    households.push(household);
  }

  return households;
};

const generateUser = (): Prisma.UserCreateInput => {
  return {
    verified: faker.datatype.boolean(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    givenName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    familyName: faker.name.lastName(),
    gender: faker.name.sexType().toUpperCase() as Gender,
    birthdate: new Date(faker.date.birthdate()),
    birthplace: `${faker.address.cityName()} ${faker.address.streetAddress()}`,
    phone: faker.phone.number("+6391######"),
    occupation: faker.name.jobTitle(),
    homeowner: faker.datatype.boolean(),
    voter: faker.datatype.boolean(),
  };
};

const generateAddress = (): Prisma.AddressCreateWithoutUserInput => {
  return {
    street: faker.address.streetAddress(),
  };
};

const generate = () => {
  const data = {
    ...generateUser(),
    address: { create: { ...generateAddress() } },
    households: { create: generateHouseHolds(10) },
  };
  return data;
};

const seed = async (count: number) => {
  for (let i = 0; i < count; i++) {
    await database.user.create({
      data: generate(),
    });
  }
};

seed(200)
  .then(async () => {
    await database.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await database.$disconnect();
    process.exit(1);
  });
