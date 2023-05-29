import database from "../../../../library/database";
import Sidebar from "./sidebar";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  children: React.ReactNode;
  params: {
    userId: string;
  };
}

const getAdmin = async (id: string) => {
  const admin = await database.admin.findUnique({
    where: {
      id: id,
    },
  });
  return admin;
};

const DashboardLayout = async ({ children, params }: Props) => {
  const { userId } = params;
  const admin = await getAdmin(userId);

  if (!admin) return <></>;

  return (
    <div className="smooth mx-auto grid notebook:grid-cols-[auto,auto,1fr]">
      <aside>
        <Sidebar admin={admin} />
      </aside>

      <div className="ml-0 hidden h-screen w-[1px] bg-slate-200 notebook:block" />

      <main className="scrollbar-thumb-rounded-full max-h-screen overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-500">
        <div className="smooth p-4 desktop:p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
