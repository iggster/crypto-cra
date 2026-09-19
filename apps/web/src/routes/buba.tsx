import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buba")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-blue-50">Hello "/buba"!</div>;
}
