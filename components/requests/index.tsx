"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { User, Request, Document } from "@prisma/client";
import { useState } from "react";
import BatchProcessingModal from "../modals/batch-processing";
import Status from "../modals/status";
import Table from "../table";

interface Props {
  requests: (Request & {
    user: User | null;
    document: Document | null;
  })[];
}

const Requests = ({ requests }: Props) => {
  const [input, setInput] = useState("");

  const headers = [
    "ACTION",
    "No.",
    "Document ID",
    "Document Title",
    "Document Price",
    "Document Status",
    "Purpose",
    "Resident ID",
    "First Name",
    "Middle Name",
    "Last Name",
    "Account Verified",
  ];

  return (
    <div className="space-section">
      <div className="group flex items-center gap-5">
        <MagnifyingGlassIcon className="h-6 w-6 group-hover:text-brand" />
        <input
          type="search"
          placeholder="Search Resident"
          className="w-96 rounded-md bg-transparent py-3 pl-3 outline-none group-hover:border-2 group-hover:border-brand"
          onChange={(event) => setInput(event?.target.value)}
        />
      </div>

      <BatchProcessingModal requests={requests} />

      {input === "" ? (
        <Table.Main name="List of Pending Requests">
          <Table.Head>
            <Table.Row heading>
              {headers.map((field) => (
                <Table.Heading key={field}>{field}</Table.Heading>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {requests.map((request, index) => (
              <Table.Row key={request.id}>
                <Table.Data value={<Status requestId={request.id} />} />
                <Table.Data value={index + 1} />
                <Table.Data value={request.documentId} />
                <Table.Data value={request.document?.title} />
                <Table.Data value={request.document?.price} />
                <Table.Data value={request.status} />
                <Table.Data value={request.purpose} />
                <Table.Data value={request!.user!.id} />
                <Table.Data value={request!.user!.givenName} />
                <Table.Data value={request!.user!.middleName} />
                <Table.Data value={request!.user!.familyName} />
                <Table.Data value={request!.user!.verified} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Main>
      ) : (
        <Table.Main name="List of Pending Requests">
          <Table.Head>
            <Table.Row heading>
              {headers.map((field) => (
                <Table.Heading key={field}>{field}</Table.Heading>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {requests
              .filter(
                (request) =>
                  request.user?.id
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.user?.givenName
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.user?.middleName
                    ?.toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.user?.familyName
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.documentId
                    ?.toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.document?.title
                    ?.toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.document?.description
                    ?.toLowerCase()
                    .includes(input.toLowerCase()) ||
                  request.status?.toLowerCase().includes(input.toLowerCase()) ||
                  request.purpose?.toLowerCase().includes(input.toLowerCase())
              )
              .map((request, index) => (
                <Table.Row key={request.id}>
                  <Table.Data value={<Status requestId={request.id} />} />
                  <Table.Data value={index + 1} />
                  <Table.Data value={request.documentId} />
                  <Table.Data value={request.document?.title} />
                  <Table.Data value={request.document?.price} />
                  <Table.Data value={request.status} />
                  <Table.Data value={request.purpose} />
                  <Table.Data value={request!.user!.id} />
                  <Table.Data value={request!.user!.givenName} />
                  <Table.Data value={request!.user!.middleName} />
                  <Table.Data value={request!.user!.familyName} />
                  <Table.Data value={request!.user!.verified} />
                </Table.Row>
              ))}
          </Table.Body>
        </Table.Main>
      )}
    </div>
  );
};

export default Requests;
