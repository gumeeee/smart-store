import SectionTitle from "@/components/global/section-title";
import ProductsGrid from "@/components/products/products-grid";
import { fetchUserFavorites } from "@/utils/actions";

export default async function FavoritePage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0) {
    return <SectionTitle text="Você ainda não tem produtos favoritos." />;
  }

  return (
    <div>
      <SectionTitle text="Favoritos" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}
