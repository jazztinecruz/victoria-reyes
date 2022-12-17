import React from "react";
import Modal from ".";
import Button from "../button/button";

interface Props {
  onClose: any;
  handler: any;
}

const ConfirmedDocumentrequest = ({ onClose, handler }: Props) => {
  return (
    <Modal size="medium" as="div" open onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <span className="mt-5 text-xl font-semibold text-brand">
          You've succesfully requested!
        </span>
        <span className="text-gray mb-4 text-sm">
          <span>
            Please prepare <span className="font-semibold">50.00</span> upon
            claiming.
          </span>
          <br></br>
          <br></br>
          <span className="font-semibold">Note:</span> You can only request a
          document from <span className="font-semibold">8:00 am</span> to{" "}
          <span className="font-semibold">11:00 am</span>. All documents that
          are requested after the desginated time will be process tomorrow.
          <br></br> <br></br>
          <span>
            You can check your request's status on the{" "}
            <span className="font-semibold">Documents Status Page</span> and
            claim your document to our office.
          </span>
        </span>
        <Button handler={handler} name="I Got it!" fill />
      </div>
    </Modal>
  );
};

export default ConfirmedDocumentrequest;
