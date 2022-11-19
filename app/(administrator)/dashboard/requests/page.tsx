import moment from "moment";
import database from "../../../../library/database";
import Table from "../../../../components/dashboard/sections/table";
import { use } from "react";
import Status from "../../../../components/dashboard/sections/dropdowns/status";

const getUsers = async () => {
  const users = await database.user.findMany({
    where: {
      verified: true,
    },
    include: {
      address: true,
      households: true,
    },
  });
  return users;
};

const DashboardRequestsPage = () => {
  const users = use(getUsers());

  const fields = [
    "Resident ID",
    "Document Name",
    "Request Date",
    "Document Status",
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
    "Households",
    "Homeowner",
    "Voter",
    "Account Verified",
  ];


  return (
    <div className="space-section">
      <Table.Main name="List of Requests">
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
              <Table.Data value="Barangay Indigency" />
              <Table.Data value="September 22, 2022" />
              <Status />
              <Table.Data value={user.givenName} />
              <Table.Data value={user.middleName} />
              <Table.Data value={user.familyName} />
              <Table.Data value={user.email} />
              <Table.Data value={user.gender} />
              <Table.Data value={moment(user.birthdate).format("LL")} />
              <Table.Data value={user.address!.street} />
              <Table.Data value={user.birthplace} />
              <Table.Data value={user.phone} />
              <Table.Data value={user.occupation} />
              <Table.Data value={user.households.length} />
              <Table.Data value={user.homeowner} />
              <Table.Data value={user.voter} />
              <Table.Data value={user.verified} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default DashboardRequestsPage;
