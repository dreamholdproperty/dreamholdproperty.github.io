import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dreamhold Property" },
    { name: "description", content: "We are hiring!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
