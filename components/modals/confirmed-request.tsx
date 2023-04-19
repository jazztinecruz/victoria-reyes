import Modal from ".";
import Button from "../elements/button/button";

interface Props {
  onClose: any;
  handler: any;
  price: number;
}

const ConfirmedDocumentrequest = ({ onClose, handler, price }: Props) => {
  return (
    <Modal size="medium" as="div" open onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <span className="mt-5 text-xl font-semibold text-brand">
          Are you sure you want to request this document?
        </span>
        <span className="text-gray mb-4 text-sm">
          <span>
            Please prepare <span className="font-semibold">{price}.00</span>{" "}
            upon claiming.
          </span>
          <br></br>
          <br></br>
          <span className="font-semibold">Note:</span> You can only request a
          document from <span className="font-semibold">8:00 am</span> to
          <span className="font-semibold">11:00 am</span>. All documents that
          are requested after the desginated time will be process tomorrow.
        </span>
        <Button handler={handler} name="Request" fill />
      </div>
    </Modal>
  );
};

export default ConfirmedDocumentrequest;
