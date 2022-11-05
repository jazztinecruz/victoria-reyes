import Document from "./document";
const Documents = () => {
  return (
    <div className="relative h-full laptop:mt-52">
      <div className="mx-auto grid h-full max-w-5xl grid-flow-row items-start justify-center gap-20 p-4 tablet:grid-cols-2 tablet:py-10">
        <Document
          name="Barangay Clearance"
          paragraph="A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose."
        />

        <Document
          name="Barangay Indigency"
          paragraph=" a document that are sometimes required by the Philippine government or a private institution as proof of an individual's financial situation."
        />

        <Document
          name="Barangay ID"
          paragraph="A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose."
        />

        <Document
          name="Cedula"
          paragraph="one of the basic requirements for most government transactions. It can also serve as valid identification for individuals and corporations residing or located in the same municipality from where it's acquired"
        />
      </div>
    </div>
  );
};

export default Documents;
