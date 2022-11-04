import Head from "./head";
import Data from "./data";
import Heading from "./heading";
import Body from "./body";
import Row from "./row";

type Props = {
  children: React.ReactNode;
  name: string;
};

const TableComponent = ({ children, name }: Props) => {
  return (
    <section className="space-content">
      <h2 className="font-medium">{name}</h2>
      <div className="scrollbar-thumb-rounded-full max-h-[60vh] overflow-x-auto scrollbar-thin  scrollbar-track-slate-50 scrollbar-thumb-slate-900">
        <table className="text-left text-sm">{children}</table>
      </div>
    </section>
  );
};

const Table = {
  Main: TableComponent,
  Body: Body,
  Head: Head,
  Heading: Heading,
  Row: Row,
  Data: Data,
};

export default Table;
