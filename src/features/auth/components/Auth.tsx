import { Navigate } from "@tanstack/react-router";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { ReactNode } from "react";

type AuthProps = {
  children: ReactNode;
};

export function Auth({ children }: AuthProps) {
  const { isAutenticated } = useCurrentUser();
  if (!isAutenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
