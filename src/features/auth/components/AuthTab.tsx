import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

function AuthTab() {
  return (
    <Tabs defaultValue="login" className="w-4/5 m-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Log-in</TabsTrigger>
        <TabsTrigger value="signup">Sign-up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LogIn />
      </TabsContent>
      <TabsContent value="signup">
        <SignUp />
      </TabsContent>
    </Tabs>
  );
}

export default AuthTab;
