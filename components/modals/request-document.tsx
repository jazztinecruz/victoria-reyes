import Modal from ".";
import Button from "../elements/button/button";

interface Props {
  onClose: any;
  backHandler: any;
  continueHandler: any;
}

const RequestDocument = ({ onClose, backHandler, continueHandler }: Props) => {
  return (
    <Modal size="medium" as="div" open onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <span className="mt-5 text-lg font-medium">
          Are you sure you want to request this document?
        </span>
        <div className="mt-4 flex items-center gap-4">
          <Button handler={backHandler} name="Go Back" />
          <Button handler={continueHandler} fill name="Continue" />
        </div>
      </div>
    </Modal>
  );
};

export default RequestDocument;
