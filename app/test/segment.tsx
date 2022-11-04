"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

const Segment = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <div>
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
    </div>
  );
};

export default Segment;
