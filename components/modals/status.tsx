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

  return (
    <div className="relative">
      <Button fill name="Approve" handler={handleApproveRequest} />
    </div>
  );
};

export default Status;
