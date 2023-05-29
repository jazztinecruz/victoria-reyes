"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../../../../../components/elements/button/button";
import Modal from "../../../../../components/modals";
import Table from "../../../../../components/table";

interface Props {
  proof: string;
}

const Proof = ({ proof }: Props) => {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <Table.Data
        value={
          <div className="flex items-center gap-3">
            {proof}
            <Button name="View" fill handler={() => setPreview(true)} />
          </div>
        }
      />

      {preview ? (
        <Modal open={preview} onClose={() => setPreview(false)}>
          <Image
            src={proof}
            alt="proof of residency"
            width={500}
            height={500}
          />
          <div className="z-50">
            <Button name="Close" fill handler={() => setPreview(false)} />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Proof;
