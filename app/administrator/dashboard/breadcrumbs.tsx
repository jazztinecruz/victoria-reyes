"use client";

import { useSelectedLayoutSegments } from "next/navigation";

const Breadcrumbs = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <section className="grid h-12 items-center">
      <div className="flex items-center gap-2">
        <h1 className="font-bold uppercase ">DASHBOARD</h1>
        {segments.length ? (
          <span className="text-base capitalize opacity-fade">
            {">"} {segments[0]}
          </span>
        ) : null}
      </div>
    </section>
  );
};

export default Breadcrumbs;
