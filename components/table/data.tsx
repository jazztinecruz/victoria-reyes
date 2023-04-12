type Props = {
  value: string | number | boolean | null | React.ReactNode;
};

const Data = ({ value }: Props) => {
  return (
    <td
      scope="row"
      className={`${
        typeof value !== "string" ? "text-center" : ""
      } smooth whitespace-nowrap p-6 font-normal`}>
      {typeof value === "boolean" ? (
        <input type="checkbox" checked={value} readOnly />
      ) : (
        value
      )}
    </td>
  );
};

export default Data;
