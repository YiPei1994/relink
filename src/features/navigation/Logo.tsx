import { Link } from "@tanstack/react-router";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-4 ">
      <img className="w-8 h-8" src="/otherIcons/logo.png" />
      <p>
        Re<span className="text-primary">Link</span>
      </p>
    </Link>
  );
}

export default Logo;
