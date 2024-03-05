import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/useLogin";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserLogin } from "../authType";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";

function LogIn() {
  const { login } = useLogin();
  const { toast } = useToast();
  const form = useForm<UserLogin>({
    defaultValues: {
      email: "test@gmail.yp",
      password: "testacc",
    },
  });
  const navigate = useNavigate();

  function onSubmit(data: UserLogin) {
    if (!data) return;
    login(data, {
      onSuccess: () => {
        navigate({ to: "/" });
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        toast({
          title: "Log-in failed!",
          description: err.message,
        });
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 pt-6"
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
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button type="submit">Log In</Button>
        </div>
      </form>
    </Form>
  );
}

export default LogIn;
