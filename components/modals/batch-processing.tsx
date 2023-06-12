"use client";
import { Fragment, useState } from "react";
import Button from "../elements/button/button";

import Table from "../table";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Dialog, Transition } from "@headlessui/react";
import { format } from "timeago.js";
import PdfContentToPrint from "../contentToPrint2";
import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button as PdfPrintButton } from "@progress/kendo-react-buttons";

interface Props {
  requests: any;
}

const BatchProcessingModal = ({ requests }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const tableRef = useRef<HTMLTableElement>(null);
  const contentToPrintRef = useRef<any>(null);

  const headers = [
    "Document Status",
    "Document ID",
    "Document Title",
    "Document Price",
    "Purpose",
    "Resident ID",
    "Created",
    "First Name",
    "Middle Name",
    "Last Name",
    "Account Verified",
  ];

  const approvedRequest = requests.filter(
    (request: typeof requests[number]) => request.status === "APPROVED"
  );

  const handleDownload = () => {
    if (tableRef.current) {
      const doc = new jsPDF();
      const table = tableRef.current;

      html2canvas(table).then((canvas) => {
        const imageData = canvas.toDataURL("image/png");
        const imgWidth = doc.internal.pageSize.getWidth(); // Use full page width
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjust height based on aspect ratio
        doc.addImage(imageData, "PNG", 0, 0, imgWidth, imgHeight);
        doc.save("table.pdf");
      });
    }
  };

  const handleExportAsPdf = () => {
    if (contentToPrintRef.current) {
      contentToPrintRef.current?.save();
    }
  };

  return (
    <div>

      {/* button */}
      <div className="mr-auto">
        <Button
          name="Batch Process"
          fill
          handler={() => setOpenModal(!openModal)}
        />
      </div>

      {openModal && (
        <Transition appear show={openModal} as={Fragment}>
          <Dialog onClose={() => setOpenModal(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="grid min-h-full p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel
                    as="div"
                    ref={tableRef}
                    className="transform space-y-4 overflow-hidden rounded bg-white p-6 shadow transition-all duration-100">
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                      <span className="mt-5 text-lg font-medium">
                        Are you sure you want to do batch processing?
                      </span>
                      <span className="-mt-2 text-sm font-medium opacity-50">
                        This will print all requested documents in one go.
                      </span>
                      <div className="my-4 flex items-center gap-4">
                      <PdfContentToPrint componentRef={contentToPrintRef} requestsToPrint={approvedRequest} />
                        <Button
                          handler={() => setOpenModal(false)}
                          name="Go Back"
                        />

                        <PdfPrintButton onClick={handleExportAsPdf}>
                          <Button fill name="Print Table" />
                        </PdfPrintButton>
                      </div>
                      <div className="h-96 w-full">
                        <Table.Main name="List of Pending Requests">
                          <Table.Head>
                            <Table.Row heading>
                              {headers.map((field) => (
                                <Table.Heading key={field}>
                                  {field}
                                </Table.Heading>
                              ))}
                            </Table.Row>
                          </Table.Head>
                          <Table.Body>
                            {approvedRequest.map(
                              (request: typeof approvedRequest[number]) => (
                                <Table.Row key={request.id}>
                                  <Table.Data value={request.status} />
                                  <Table.Data value={request.documentId} />
                                  <Table.Data value={request.document?.title} />
                                  <Table.Data value={request.document?.price} />
                                  <Table.Data value={request.purpose} />
                                  <Table.Data value={request!.user!.id} />
                                  <Table.Data
                                    value={format(request!.createdAt)}
                                  />
                                  <Table.Data
                                    value={request!.user!.givenName}
                                  />
                                  <Table.Data
                                    value={request!.user!.middleName}
                                  />
                                  <Table.Data
                                    value={request!.user!.familyName}
                                  />
                                  <Table.Data value={request!.user!.verified} />
                                </Table.Row>
                              )
                            )}
                          </Table.Body>
                        </Table.Main>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default BatchProcessingModal;
