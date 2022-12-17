import Modal from ".";
import Button from "../elements/button/button";

interface Props {
  onClose: any;
  handler: any;
  errorMessage: string;
}

const ErrorModal = ({ onClose, handler, errorMessage }: Props) => {
  return (
    <Modal size="medium" as="div" open onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <span className="mt-5 text-xl font-semibold text-brand">
          Oops.. {errorMessage} Please Try Again
        </span>
        <Button handler={handler} fill name="Go Back" />
      </div>
    </Modal>
  );
};

export default ErrorModal;
