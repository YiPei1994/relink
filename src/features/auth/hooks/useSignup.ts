import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../apiAuth";

export const useSignup = () => {
  const { mutate: signUp } = useMutation({
    mutationFn: userSignup,
  });
  return { signUp };
};
