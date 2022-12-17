import { TrashIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface Props {
  document: {
    id: number;
    name: string;
    description: string;
  };
  documents: {
    id: number;
    name: string;
    description: string;
  }[];
  setDocuments: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        description: string;
      }[]
    >
  >;
}

const DeleteDocument = ({ document, documents, setDocuments }: Props) => {
  return (
    <TrashIcon
      onClick={() => {
        const newDocuments = documents.filter((d) => d.id !== document.id);
        setDocuments(newDocuments);
      }}
      className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-red-700"
    />
  );
};

export default DeleteDocument;
