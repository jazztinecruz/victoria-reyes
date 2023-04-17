"use client";
import Button from "../elements/button/button";

interface Props {
  requestId: string;
}

const Status = ({ requestId }: Props) => {
  const handleApproveRequest = async () => {
    const response = await fetch("/api/approve-request", {
      method: "PUT",
      body: JSON.stringify({
        id: requestId,
      }),
    });
  };

  return <Button fill name="Approve" handler={handleApproveRequest} />;
};

export default Status;
