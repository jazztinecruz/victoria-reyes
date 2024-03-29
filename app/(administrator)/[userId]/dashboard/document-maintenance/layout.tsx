import Breadcrumbs from "../breadcrumbs";

export const revalidate = 10;
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="notebook:space-section space-content smooth">
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default DashboardLayout;
