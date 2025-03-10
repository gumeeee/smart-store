import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./hero-carousel";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Estamos mudando a maneira como as pessoas compram
        </h1>
        <p className="mt-8 max-w-xl leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          veniam hic dignissimos molestias, at vero ratione natus perspiciatis!
          Unde, nesciunt!
        </p>
        <Button asChild size={"lg"} className="mt-10">
          <Link href="/products">Nossos produtos</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
