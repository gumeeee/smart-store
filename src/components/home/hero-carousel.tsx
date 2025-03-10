import herocarousel1 from "@/../public/images/hero-carousel-1.jpg";
import herocarousel2 from "@/../public/images/hero-carousel-2.jpg";
import herocarousel3 from "@/../public/images/hero-carousel-3.jpg";
import herocarousel4 from "@/../public/images/hero-carousel-4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const carouselImages = [
  herocarousel1,
  herocarousel2,
  herocarousel3,
  herocarousel4,
];

export default function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt="Image carousel"
                    className="w-full h-[24rem] rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
