import LoadingContainer from "@/components/global/loading-container";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
