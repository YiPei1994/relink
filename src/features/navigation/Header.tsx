import { useDisplayNavbar } from "./hooks/navigationStore";
import Logo from "./Logo";

import { HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import Navbar from "./Navbar";

function Header() {
  const { displayNavbar, toggleDisplayNavbar } = useDisplayNavbar();
  return (
    <header className="flex w-full justify-between items-center p-4 flex-wrap lg:flex-nowrap ">
      <Logo />
      <button className="block lg:hidden" onClick={() => toggleDisplayNavbar()}>
        {displayNavbar ? (
          <HiOutlineXMark className="text-primary text-2xl" />
        ) : (
          <HiOutlineListBullet className="text-primary text-2xl" />
        )}
      </button>

      <>
        <nav
          className={`${
            displayNavbar
              ? "max-h-fit opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          } w-full lg:hidden transition-[max-h] duration-300  flex justify-center`}
        >
          <Navbar />
        </nav>
        <nav className="hidden lg:block">
          <Navbar />
        </nav>
      </>
    </header>
  );
}

export default Header;
