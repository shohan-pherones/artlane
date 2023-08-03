import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { data } from "../data/sliderData";
import { motion } from "framer-motion";
import { getTransition } from "../utils/getTransition";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent), url(${item.src})`,
              }}
              className="w-screen h-[calc(100vh-4rem)] bg-cover bg-no-repeat bg-center"
            >
              <div className="wrapper section-padding w-full h-full text-base-100 flex flex-col gap-5 items-start justify-center">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={getTransition()}
                    className="text-8xl uppercase font-bold"
                  >
                    {item.heading}
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={getTransition(0.2)}
                    className="text-xl"
                  >
                    {item.paragraph}
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={getTransition(0.4)}
                  >
                    <Link to="/arts" className="btn btn-primary">
                      {item.cta}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
