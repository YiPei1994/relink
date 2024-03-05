import { Link, useNavigate } from "@tanstack/react-router";
import { useDisplayNavbar } from "./hooks/navigationStore";

import { useCurrentUser } from "../auth/hooks/useCurrentUser";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useLogOut } from "../auth/hooks/useLogout";
import { ModeToggle } from "@/components/ui/ModeToggler";
import { Button } from "@/components/ui/button";

function Navbar() {
  const { isAutenticated } = useCurrentUser();
  const { toggleDisplayNavbar } = useDisplayNavbar();
  const { logOut } = useLogOut();
  const navigate = useNavigate();
  function handleLogout() {
    logOut(undefined, {
      onSuccess: () => {
        navigate({ to: "/login" });
        toggleDisplayNavbar();
      },
    });
  }
  return (
    <ul className="flex flex-col justify-center items-center gap-6 lg:flex-row">
      <li onClick={toggleDisplayNavbar}>
        <Link
          to="/"
          className="[&.active]:text-primary [&.active]:bg-accent/50  px-4 py-2 rounded-md transition-all duration-300"
        >
          Home
        </Link>{" "}
      </li>
      <li onClick={toggleDisplayNavbar}>
        <Link
          to="/goal"
          className="[&.active]:text-primary [&.active]:bg-accent/50  px-4 py-2 rounded-md transition-all duration-300"
        >
          Goal
        </Link>{" "}
      </li>
      {!isAutenticated && (
        <li onClick={toggleDisplayNavbar}>
          <Link
            to="/login"
            className="[&.active]:text-primary [&.active]:bg-accent/50  px-4 py-2 rounded-md transition-all duration-300"
          >
            Log in
          </Link>
        </li>
      )}

      <li className="flex gap-4 items-center">
        <ModeToggle />
        {isAutenticated && (
          <Button onClick={handleLogout}>
            <HiOutlineArrowRightOnRectangle />
          </Button>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
