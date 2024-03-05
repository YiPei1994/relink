import { useForm } from "react-hook-form";
import { UserAuthSchema, userRegisterSchema } from "../authType";
import { useSignup } from "../hooks/useSignup";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterSuccess } from "../hooks/useAuthstore";

function SignUp() {
  const { signUp } = useSignup();
  const { toast } = useToast();
  const { registerSuccess, toggleRegisterSuccess } = useRegisterSuccess();

  const form = useForm<UserAuthSchema>({
    resolver: zodResolver(userRegisterSchema),
  });

  function onSubmit(data: UserAuthSchema) {
    if (!data) return;
    const newData = {
      email: data.email,
      password: data.password,
    };

    signUp(newData, {
      onSuccess: () => {
        toast({
          description: "Welcome!",
        });
        toggleRegisterSuccess();
      },
    });
  }
  return (
    <>
      <Form {...form}>
        {registerSuccess ? (
          <p className="py-6 text-center">
            Success! please check your Email-
            <span className="text-primary">{form.getValues("email")} </span>
            to verify.
          </p>
        ) : (
          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      type="password"
                      {...field}
                      autoComplete="current-password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="confirm password"
                      type="password"
                      {...field}
                      autoComplete="new-password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <div className="flex items-center justify-between gap-2">
              <Button
                type="reset"
                variant="secondary"
                onClick={() => form.reset()}
                disabled={form.formState.isSubmitting}
              >
                Reset
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                Sign up
              </Button>
            </div>
          </form>
        )}
      </Form>
    </>
  );
}

export default SignUp;
