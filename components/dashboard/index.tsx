"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Household, User } from "@prisma/client";
import moment from "moment";
import { useState } from "react";
import Table from "../table";

interface Props {
  users: (User & {
    households: Household[];
  })[];
}

const AdminDashboard = ({ users }: Props) => {
  const [input, setInput] = useState("");

  const fields = [
    "Resident ID",
    "First Name",
    "Middle Name",
    "Last Name",
    "Email Address",
    "Gender",
    "Birth Date",
    "Address",
    "Birth Place",
    "Phone Number",
    "Occupation",
    "Head",
    "Code",
    "Homeowner",
    "Voter",
    "Account Verified",
  ];

  return (
    <div className="space-section">
      {/* search */}
      <div className="group flex items-center gap-5">
        <MagnifyingGlassIcon className="h-6 w-6 group-hover:text-brand" />
        <input
          type="search"
          placeholder="Search Resident"
          className="w-96 rounded-md bg-transparent py-3 pl-3 outline-none group-hover:border-2 group-hover:border-brand"
          onChange={(event) => setInput(event?.target.value)}
        />
      </div>

      {/* table results */}
      {/* if input is empty, display all datas */}
      {input === "" ? (
        <Table.Main name="List of Residents">
          <Table.Head>
            <Table.Row heading>
              {fields.map((field) => (
                <Table.Heading key={field}>{field}</Table.Heading>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id}>
                <Table.Data value={user.id} />
                <Table.Data value={user.givenName} />
                <Table.Data value={user.middleName} />
                <Table.Data value={user.familyName} />
                <Table.Data value={user.email} />
                <Table.Data value={user.gender} />
                <Table.Data value={moment(user.birthdate).format("LL")} />
                <Table.Data value={user.fullAddress} />
                <Table.Data value={user.birthplace} />
                <Table.Data value={user.phone} />
                <Table.Data value={user.occupation} />
                <Table.Data value={user.head ? "true" : 'false'} />
                <Table.Data value={user.code} />
                <Table.Data value={user.homeowner} />
                <Table.Data value={user.voter} />
                <Table.Data value={user.verified} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Main>
      ) : (
        <Table.Main name="List of Residents">
          <Table.Head>
            <Table.Row heading>
              {fields.map((field) => (
                <Table.Heading key={field}>{field}</Table.Heading>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users
              .filter(
                (user) =>
                  user.id.toLowerCase().includes(input.toLowerCase()) ||
                  user.givenName.toLowerCase().includes(input.toLowerCase()) ||
                  user.middleName
                    ?.toLowerCase()
                    .includes(input.toLowerCase()) ||
                  user.familyName.toLowerCase().includes(input.toLowerCase()) ||
                  user.email.toLowerCase().includes(input.toLowerCase()) ||
                  user.gender.toLowerCase().includes(input.toLowerCase()) ||
                  user.phone.toLowerCase().includes(input.toLowerCase()) ||
                  user.occupation.toLowerCase().includes(input.toLowerCase()) ||
                  user.birthplace.toLowerCase().includes(input.toLowerCase()) ||
                  user.fullAddress
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                  user?.code?.toLowerCase().includes(input.toLowerCase())
              )
              .map((user) => (
                <Table.Row key={user.id}>
                  <Table.Data value={user.id} />
                  <Table.Data value={user.givenName} />
                  <Table.Data value={user.middleName} />
                  <Table.Data value={user.familyName} />
                  <Table.Data value={user.email} />
                  <Table.Data value={user.gender} />
                  <Table.Data value={moment(user.birthdate).format("LL")} />
                  <Table.Data value={user.fullAddress} />
                  <Table.Data value={user.birthplace} />
                  <Table.Data value={user.phone} />
                  <Table.Data value={user.occupation} />
                  <Table.Data value={user.head ? "true" : 'false'} />
                  <Table.Data value={user?.code} />
                  <Table.Data value={user.homeowner} />
                  <Table.Data value={user.voter} />
                  <Table.Data value={user.verified} />
                </Table.Row>
              ))}
          </Table.Body>
        </Table.Main>
      )}
    </div>
  );
};

export default AdminDashboard;
