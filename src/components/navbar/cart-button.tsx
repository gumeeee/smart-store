import Link from "next/link";
import { Button } from "../ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { fetchCartItems } from "@/utils/actions";

export default async function CartButton() {
  const numItemsInCart: number = await fetchCartItems();

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
