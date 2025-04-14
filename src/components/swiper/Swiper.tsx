import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataSwiper } from "../../data";

import "./swiper.css";

const MySwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 30,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper  "
    >
      {dataSwiper.map((data) => {
        return (
          <SwiperSlide
            key={data.id}
            className="swiper-slide shadow-md mb-15 p-5 text-color-text bg-white"
            // style={{ width: "406.667px", marginRight: "50px" }}
          >
            <div className="flex flex-col gap-5 ">
              <p className="leading-8">{data.desc}</p>
              <div className="flex justify-start items-center gap-3">
                <img
                  src={data.image}
                  alt=""
                  className="rounded-full w-16 h-16 object-cover"
                />
                <div>
                  <h5 className="mb-1 font-bold text-xl">{data.name}</h5>
                  <p className="font-bold text-gray-500">{data.skill}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
