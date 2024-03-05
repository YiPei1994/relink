import { Link } from "@tanstack/react-router";
import { useDisplayNavbar } from "./hooks/navigationStore";
import UserOperations from "./UserOperations";

function Navbar() {
  const { toggleDisplayNavbar } = useDisplayNavbar();
  return (
    <ul className="flex flex-col justify-center items-center gap-4 lg:flex-row">
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
          to="/goal/goals"
          className="[&.active]:text-primary [&.active]:bg-accent/50  px-4 py-2 rounded-md transition-all duration-300"
        >
          Goal
        </Link>{" "}
      </li>
      <li onClick={toggleDisplayNavbar}>
        <Link
          to="/login"
          className="[&.active]:text-primary [&.active]:bg-accent/50  px-4 py-2 rounded-md transition-all duration-300"
        >
          Log in
        </Link>
      </li>

      <li>
        <UserOperations />
      </li>
    </ul>
  );
}

export default Navbar;
