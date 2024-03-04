import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../apiAuth";

export function useCurrentUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAutenticated: user?.role === "authenticated" };
}
