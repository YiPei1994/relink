import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layouts/goal")({
  component: GoalPage,
});

function GoalPage() {
  return <div>GoalPage</div>;
}

export default GoalPage;
