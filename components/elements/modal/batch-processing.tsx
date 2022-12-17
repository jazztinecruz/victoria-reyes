"use client";
import { useState } from "react";
import Modal from ".";
import Button from "../button/button";

const BatchProcessingModal = () => {
  const [openModal, setOpenModal] = useState(false);

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
        <Modal
          size="medium"
          as="div"
          open
          onClose={() => setOpenModal(!openModal)}>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <span className="mt-5 text-lg font-medium">
              Are you sure you want to do batch processing?
            </span>
            <span className="-mt-2 text-sm font-medium opacity-50">
              This will print all documents in one go
            </span>
            <div className="mt-4 flex items-center gap-4">
              <Button handler={() => setOpenModal(!openModal)} name="Go Back" />
              <Button
                handler={() => setOpenModal(!openModal)}
                fill
                name="Print All"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BatchProcessingModal;
