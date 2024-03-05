import AuthTab from "@/features/auth/components/AuthTab";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-[160px]">
      <div>
        <img src="/otherIcons/logo.png" />
      </div>
      <AuthTab />
    </div>
  );
}
