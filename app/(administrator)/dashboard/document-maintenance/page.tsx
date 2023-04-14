import { use } from "react";
import EditDocument from "../../../../components/modals/edit-document";
import AddDocumentModal from "../../../../components/modals/add-document";
import database from "../../../../library/database";
import Document from "../../../document";
import DeleteDocument from "../../../../components/modals/delete-document";

const getDocuments = async () => {
  const documents = await database.document.findMany();
  return documents;
};

const DocumentMaintenance = () => {
  const documents = use(getDocuments());

  return (
    <div className="grid gap-8">
      {/* button and modal */}
      <AddDocumentModal />

      {/* documents */}
      <div className="grid grid-cols-1 gap-6 rounded-md tablet:grid-cols-2 laptop:grid-cols-3">
        {documents.map((document) => (
          <div
            key={document.id}
            className="grid grid-rows-[auto,1fr] rounded-md border-2 border-gray-200 p-6">
            <div className="ml-auto flex items-center gap-4">
              <EditDocument document={document} />
              <DeleteDocument document={document} />
            </div>
            <Document
              key={document.id}
              title={document.title}
              description={document.description}
              price={document.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentMaintenance;
