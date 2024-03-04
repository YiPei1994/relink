import { Auth } from "@/features/auth/components/Auth";
import Header from "@/features/navigation/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <hr />
      <Auth>
        <Outlet />
      </Auth>
      <TanStackRouterDevtools />
    </>
  ),
});
