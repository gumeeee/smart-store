import FavoriteToggleButton from "@/components/products/favorite-toggle-button";
import AddToCart from "@/components/single-product/add-to-cart";
import BreadCrumbs from "@/components/single-product/bread-crumbs";
import ProductRating from "@/components/single-product/product-rating";
import ShareButton from "@/components/single-product/share-button";
import { fetchProductById } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);
  const { name, image, company, description, price } = product;
  const BRLAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>

        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={params.id} />
              <ShareButton name={name} productId={params.id} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-4 text-md bg-muted inline-block p-2 rounded-lg">
            {BRLAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}
