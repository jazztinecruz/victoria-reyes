import NavLink from "../nav-link/nav-link";

const NavLinks = () => {
  return (
    <div className="notebook:hidden laptop:block ">
      <div className="flex items-center gap-5">
        {/* navlinks */}
        <NavLink name="Home" link="#" />
        <NavLink name="About Us" link="#" />
        <NavLink name="Barangay Documents" link="#" />
        <NavLink name="What's New?" link="#" />
        <NavLink name="Contact Us" link="#" />
      </div>
    </div>
  );
};

export default NavLinks;
