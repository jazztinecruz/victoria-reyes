import { use } from "react";
import database from "../../library/database";
import UserRequestDocument from "../modals/user-request-document";

interface Props {
  userId: string;
}

const getDocuments = async () => {
  const documents = await database.document.findMany();
  return documents;
};

const AllDocuments = ({ userId }: Props) => {
  const documents = use(getDocuments());

  return (
    <div className="grid grid-flow-row items-start justify-start gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
      {documents.map((document) => (
        <div
          key={document.id}
          className="card w-96 cursor-pointer border-2 border-gray-100 bg-white text-center">
          <div className="card-body gap-6">
            <h2 className="card-title justify-center">{document.title}</h2>
            <p>{document.description}</p>
            <div className="card-actions justify-center">
              <UserRequestDocument
                userId={userId}
                documentId={document.id}
                price={document.price}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDocuments;
