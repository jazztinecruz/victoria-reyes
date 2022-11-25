"use client";
import { useState } from "react";

const Households = () => {
  const [open, setOpen] = useState(false);

  return (
    <tr>
      <button className="btn" onClick={() => setOpen(!open)}>
        Households
      </button>

      {open && <div className="absolute left-0 right-0 -top-16 w-full bg-slate-600 p-2 text-white shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet
        praesentium odio vero mollitia assumenda modi doloremque delectus
        accusantium enim.
      </div>}
    </tr>
  );
};

export default Households;