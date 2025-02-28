import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Home Page</h1>
      <Button variant={"outline"} size={"lg"} className="capitalize m-8">
        clique em mim
      </Button>
    </div>
  );
}
