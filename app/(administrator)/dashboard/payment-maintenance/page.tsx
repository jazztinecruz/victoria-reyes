import { use } from "react";
import AddTransaction from "../../../../components/modals/add-transaction";
import Table from "../../../../components/table";
import database from "../../../../library/database";

const getApprovedDocuments = async () => {
  const approvedRequests = await database.request.findMany({
    where: {
      status: "APPROVED",
    },
    include: {
      user: true,
      document: true,
    },
  });
  return approvedRequests;
};

const PaymentMaintenance = () => {
  const approvedRequests = use(getApprovedDocuments());

  const totalPayment = approvedRequests.reduce((prevPrice, transaction) => {
    return prevPrice + transaction?.document!.price;
  }, 0);

  const headers = [
    "No.",
    "Document ID",
    "Document Title",
    "Document Price",
    "Document Status",
    "First Name",
    "Middle Name",
    "Last Name",
    "Resident ID",
  ];

  return (
    <div className="grid gap-10">
      <AddTransaction />
      {/* table */}
      <span className="font-semibold">Total Payment: {totalPayment}</span>
      <Table.Main name="Transaction Book">
        <Table.Head>
          <Table.Row heading>
            {headers.map((header) => (
              <Table.Heading key={header}>{header}</Table.Heading>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {approvedRequests.map((transaction, index) => (
            <Table.Row key={transaction.id}>
              <Table.Data value={index + 1} />
              <Table.Data value={transaction.documentId} />
              <Table.Data value={transaction.document?.title} />
              <Table.Data value={transaction.document?.price} />
              <Table.Data value={transaction.status} />
              <Table.Data value={transaction.user?.givenName} />
              <Table.Data value={transaction.user?.middleName} />
              <Table.Data value={transaction.user?.familyName} />
              <Table.Data value={transaction.userId} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Main>
    </div>
  );
};

export default PaymentMaintenance;
