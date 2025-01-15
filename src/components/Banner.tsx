import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "./ui/carousel";

const bannerImages = [
  {
    id: 1,
    src: "https://images.cnbctv18.com/uploads/2024/08/alhind-airline-2024-08-411f840c4c4a5f44d25888a3f30d1299.jpg",
    alt: "Alhind Airline Banner 1",
  },
  {
    id: 2,
    src: "https://files.alhindgroup.com/Documents/Images/Events/Banner_10014.jpg",
    alt: "Alhind Event Banner 2",
  },
  {
    id: 3,
    src: "https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/7535/gallery_31483035548_679e036ea0.jpg",
    alt: "GST Contracts Banner 3",
  },
];

const Banner = () => {
  return (
    <div className=" px-8 pb-4 mt-2 overflow-hidden flex justify-center">
      <Carousel plugins={[Autoplay({delay:2000})]}>
        <CarouselContent>
          {bannerImages.map((img) => (
            <CarouselItem key={img.id} className="flex justify-center">
              <img
                src={img.src}
                className="max-w-[90%] grow rounded-3xl"
                width="90%"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
