import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../apiAuth";

export function useLogOut() {
  const queryClient = useQueryClient();
  const { mutate: logOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.removeQueries();
    },
  });
  return { logOut };
}
