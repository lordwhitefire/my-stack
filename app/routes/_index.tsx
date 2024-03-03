import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold text-red-500 underline">
      Hello world!
      <span className="icon-[lucide--arrow-right] h-4 w-4 "> </span>
    </h1>
  )
}
