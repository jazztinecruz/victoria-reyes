import AllDocuments from "../../../../components/documents";
import database from "../../../../library/database";

const getUser = async (id: string) => {
  const user = await database.user.findUnique({ where: { id } });
  return user!;
};

const Documents = async ({ params }: any) => {
  const user = await getUser(params.userId);

  return (
    <div className="grid h-full place-items-center">
      <AllDocuments userId={user.id} />
    </div>
  );
};

export default Documents;
