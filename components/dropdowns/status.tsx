"use client";
import { useState } from "react";

const Status = () => {
  const statuses = ["APPROVED", "PENDING", "DECLINED"];
  const [status, setStatus] = useState("");

  return (
    <td className="dropdown mt-2">
      <input
        type="text"
        tabIndex={0}
        className="btn m-1 mx-auto placeholder:text-white"
        placeholder="Status"
        value={status}
      />
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box top-16 w-56 bg-base-100 p-2 shadow">
        {statuses.map((status, index) => (
          <li key={index}>
            <a onClick={() => setStatus(status)}>{status}</a>
          </li>
        ))}
      </ul>
    </td>
  );
};

export default Status;
