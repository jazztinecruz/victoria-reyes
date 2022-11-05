import Feature from "./feature";

const Feautures = () => {
  return (
    <div className="h-full w-full mt-52 tablet:mt-28 laptop:mt-0">
      <div className="mx-auto grid gap-14 tablet:gap-0 laptop:gap-32 h-full max-w-5xl items-center justify-center">
        <Feature
          title="Get your account verified."
          paragraph="Sign up and fill up all necessary information to make an account, and wait for your account to be verified."
          image="/images/features/feat1.png"
          order="right"
        />

        <Feature
          title="You can request any barangay documents."
          paragraph="You can now request any barangay documents anytime, anywhere effortlessly."
          image="/images/features/feat2.png"
          order="left"
        />

        <Feature
          title="See when you can claim your requested document."
          paragraph="See your requested documents when it would be available."
          image="/images/features/feat3.png"
          order="right"
        />
        <Feature
          title="See how much will cost your requested document."
          paragraph="See how much you will pay to your requested documents when it is ready to claim in barangay victoria reyes."
          image="/images/features/feat4.png"
          order="left"
        />
        <Feature
          title="You can check your request status."
          paragraph="You can always check your request status if its’s ready to claim onsite.."
          image="/images/features/feat5.png"
          order="right"
        />
      </div>
    </div>
  );
};

export default Feautures;
