import { createLazyFileRoute } from "@tanstack/react-router";
import Layouts from "./_layouts";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Layouts />;
}
