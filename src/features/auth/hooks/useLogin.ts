import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogin } from "../apiAuth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { mutate: login } = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      const user = data?.user; // Make sure to access the correct property based on your API response
      queryClient.setQueryData(["user", user], user); // Pass the updater function
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { login };
};
