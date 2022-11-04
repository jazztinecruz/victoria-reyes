"use client";

import { useSelectedLayoutSegments } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments();

  return (
    <div className="notebook:space-section space-content smooth">
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
      {children}
    </div>
  );
};

export default DashboardLayout;
