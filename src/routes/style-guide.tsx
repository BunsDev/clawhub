import { createFileRoute } from "@tanstack/react-router";
import { ChaoticStyleGuide } from "../components/style-guide/ChaoticStyleGuide";

export const Route = createFileRoute("/style-guide")({
  component: StyleGuidePage,
});

function StyleGuidePage() {
  return <ChaoticStyleGuide />;
}
