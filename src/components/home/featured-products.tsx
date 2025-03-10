import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/empty-list";
import SectionTitle from "../global/section-title";
import ProductsGrid from "../products/products-grid";

export default async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="produtos favoritos" />
      <ProductsGrid products={products} />
    </section>
  );
}
