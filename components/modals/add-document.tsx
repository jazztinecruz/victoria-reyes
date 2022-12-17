import { Dispatch, SetStateAction } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";

interface Props {
  openAddModal: boolean;
  setOpenAddModal: Dispatch<SetStateAction<boolean>>;
  document: {
    id: number;
    name: string;
    description: string;
  };
  setDocument: Dispatch<
    SetStateAction<{
      id: number;
      name: string;
      description: string;
    }>
  >;
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
  initialValue: {
    id: number;
    name: string;
    description: string;
  };
}

const AddDocumentModal = ({
  openAddModal,
  setOpenAddModal,
  documents,
  setDocuments,
  document,
  setDocument,
  initialValue,
}: Props) => {
  return (
    <Modal
      size="medium"
      as="div"
      open
      onClose={() => setOpenAddModal(!openAddModal)}>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Additional Document</span>
        <span className="text-sm font-light opacity-50">
          Provide necessary details to add document
        </span>
      </div>
      <form
        onSubmit={() => {
          setDocuments([...documents, document]);
          setDocument(initialValue);
          setOpenAddModal(false);
        }}
        className="flex flex-col gap-10">
        <Field.Textbox
          type="text"
          name="name"
          label="Name of Document"
          required
          onChange={setDocument}
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">
              Description of Document
            </span>
            <span className="text-sm font-light opacity-50">
              You can stretch out this field for a better view
            </span>
          </div>
          <textarea
            name="description"
            required
            onChange={(event) =>
              setDocument({
                ...document,
                description: event?.target.value,
              })
            }
            className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
          />
        </div>
        <Button fill name="Add Document" />
      </form>
    </Modal>
  );
};

export default AddDocumentModal;
