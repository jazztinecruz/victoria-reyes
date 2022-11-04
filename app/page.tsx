import Navbar from "../components/app/navbar/navbar";

const HomePage = () => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto] items-center">
      {/* navbar */}
      <nav className=" bg-white">
        <div className="mx-auto max-w-5xl border-2">
          <Navbar />
        </div>
      </nav>

      {/* homepage sections */}
      <main className="h-full">
        <div className="mx-auto max-w-5xl border-2">sections</div>
      </main>

      {/* footer */}
      <footer>
        <div className="mx-auto max-w-5xl border-2">footer</div>
      </footer>
    </div>
  );
};

export default HomePage;
