"use client";
import { useState } from "react";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  userId: string;
}

const VerifyResidentModal = ({ userId }: Props) => {
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleVerifyResident = async () => {
    try {
      const response = await fetch("/api/verify-resident", {
        method: "PUT",
        body: JSON.stringify({
          id: userId,
        }),
      });
      if (response.status === 201) setOpenSuccessfulModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button name="Verify" fill handler={handleVerifyResident} />;
      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully verfied a resident account!
          </span>
          <span className="text-gray">
            You can see all the verified accounts on the dashboard..
          </span>
          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenSuccessfulModal(false)}
            />
          </div>
        </SuccessfulModal>
      ) : null}
    </>
  );
};

export default VerifyResidentModal;
