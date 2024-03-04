import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { createLazyFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
