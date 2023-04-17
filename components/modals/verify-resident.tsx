"use client";
import Button from "../elements/button/button";

interface Props {
  userId: string;
}

const VerifyResident = ({ userId }: Props) => {
  const handleVerifyResident = async () => {
    const response = await fetch("/api/verify-resident", {
      method: "PUT",
      body: JSON.stringify({
        id: userId,
      }),
    });
  };

  return <Button name="Verify" fill handler={handleVerifyResident} />;
};

export default VerifyResident;
