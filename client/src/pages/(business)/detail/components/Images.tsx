import Images1 from "@/assets/images/detail-1.png";
import Images2 from "@/assets/images/detail-2.png";
import Images3 from "@/assets/images/detail-3.png";
import Images4 from "@/assets/images/detail-4.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const ImagesSection = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-[1fr_124px] gap-6">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      <img src={Images1} alt="Main" className="col-span-3" />
      <img src={Images2} alt="Other" />
      <img src={Images3} alt="Other" />
      <img src={Images4} alt="Other" />
    </div>
  );
};
