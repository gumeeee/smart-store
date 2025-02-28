import Link from "next/link";
import { Button } from "../ui/button";
import { VscCoffee } from "react-icons/vsc";

export default function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href="/">
        <VscCoffee className="w-7 h-7" />
      </Link>
    </Button>
  );
}
