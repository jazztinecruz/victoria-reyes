import Segment from "./segment";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="notebook:space-section space-content smooth">
      <Segment />
      {children}
    </div>
  );
};

export default DashboardLayout;
