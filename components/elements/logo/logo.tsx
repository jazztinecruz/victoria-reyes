import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="Victoria Reyes Logo"
      src="/images/victoria-reyes-logo.svg"
      blurDataURL="/images/victoria-reyes-logo.svg"
      placeholder="blur"
      priority
      width={48}
      height={48}
      className="object-cover"
    />
  );
};

export default Logo;
