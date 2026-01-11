import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import CarrouselCard from "./CarrouselCard";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarrouselProps {
  modelFeatures: ModelFeature[];
}

export const Carrousel = ({ modelFeatures }: CarrouselProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const navArrowStyle =
    "hidden md:flex absolute top-0 h-full w-14 justify-center bg-[#F7F7F7]/70 z-10 cursor-pointer";

  return (
    <div className="relative w-full bg-[#F7F7F7] py-8">
      <button ref={prevRef} className={`${navArrowStyle} left-0`}>
        <IoIosArrowBack fontSize={30} fill="#474747" className="mt-25" />
      </button>
      <button ref={nextRef} className={`${navArrowStyle} right-0`}>
        <IoIosArrowForward fontSize={30} fill="#474747" className="mt-25" />
      </button>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 8,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
            centeredSlides: true,
          },
        }}
      >
        {modelFeatures.map((feature, index) => (
          <SwiperSlide key={"feature-" + index}>
            <CarrouselCard feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
