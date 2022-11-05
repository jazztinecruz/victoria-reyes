import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  order: "left" | "right";
};
const Feature = ({ image, title, description, order }: Props) => {
  return (
    <div className="grid grid-flow-row items-center gap-32 px-10 tablet:grid-cols-2">
      {/* content */}
      <div className="flex flex-col items-center justify-center gap-3 tablet:items-start">
        <span className="text-center text-xl font-semibold tablet:text-left laptop:text-2xl">
          {title}
        </span>
        <p className="text-center leading-relaxed tablet:text-left laptop:text-lg">
          {description}
        </p>
      </div>

      {/* image */}
      <div
        className={`${
          order === "left" ? "tablet:-order-1" : "tablet:order-1"
        } relative h-[450px] w-full laptop:w-[550px]`}>
        <Image alt={title} src={image} fill={true} className="object-contain" />
      </div>
    </div>
  );
};

export default Feature;
