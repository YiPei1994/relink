import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { Navigate, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layouts")({
  component: Layouts,
});

function Layouts() {
  const { isAutenticated } = useCurrentUser();

  if (!isAutenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layouts;
