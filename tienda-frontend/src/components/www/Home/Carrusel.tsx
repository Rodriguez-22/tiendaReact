import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Carrusel = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src="/img/carrusel/1.jpg" alt="Spring" />
            </CarouselItem>
            <CarouselItem>
              <img src="/img/carrusel/2.jpg" alt="Bootstrap" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;