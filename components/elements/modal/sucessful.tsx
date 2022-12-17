import Image from "next/image";
import React from "react";
import Modal from ".";

interface Props {
  onClose: any;
  handler: any;
  children: React.ReactNode;
}

const SuccessfulModal = ({ onClose, handler, children }: Props) => {
  return (
    <Modal size="medium" as="div" open onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 h-full w-full">
          <Image
            alt="login secure illustration"
            src="/images/confetti.webp"
            fill
            className="-z-50 h-auto w-full object-cover"
          />
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default SuccessfulModal;
