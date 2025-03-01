import Link from "next/link";
import { Button } from "../ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartButton() {
  //temp
  const numItemsInCart: number = 10;

  return (
    <Button
      asChild
      variant={"outline"}
      size={"icon"}
      className="flex justify-center items-center relative"
    >
      <Link href={"/cart"}>
        <AiOutlineShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
