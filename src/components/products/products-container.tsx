import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./products-grid";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { Separator } from "../ui/separator";
import ProductList from "./product-list";

export default async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts();
  const totalProducts = products.length;
  const searchTerms = search ? `&search${search}` : "";

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} produto{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              asChild
              variant={layout === "grid" ? "default" : "ghost"}
              size={"icon"}
            >
              <Link href={`/products?layout=grid${searchTerms}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            <Button
              asChild
              variant={layout === "list" ? "default" : "ghost"}
              size={"icon"}
            >
              <Link href={`/products?layout=list${searchTerms}`}>
                <LuLayoutList />
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="mt-5" />
      </section>

      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Lamentamos, sem produtos encontrados de acordo com sua pesquisa...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
}
