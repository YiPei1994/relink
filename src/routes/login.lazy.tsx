import LogIn from "@/features/auth/components/LogIn";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return <LogIn />;
}
