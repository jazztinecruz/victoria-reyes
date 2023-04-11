"use client";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
  document: {
    id: string;
    title: string;
    price: number;
    description: string;
  };
}

const DeleteDocument = ({ document }: Props) => {
  const handleDeleteDocument = async () => {
    const response = await fetch("/api/delete-document", {
      method: "DELETE",
      body: JSON.stringify({
        id: document.id,
      }),
    });
  };

  return (
    <TrashIcon
      onClick={handleDeleteDocument}
      className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-red-700"
    />
  );
};

export default DeleteDocument;
