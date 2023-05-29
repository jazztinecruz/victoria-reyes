import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  image: string;
}

const File = ({ onChange, image }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span>Proof of Residency</span>
        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
      </div>

      <input
        type="file"
        name="proof"
        onChange={onChange}
        className="file-input w-full max-w-xs"
      />

      {image && <Image src={image} alt="image" width={500} height={500} />}
    </div>
  );
};

export default File;
