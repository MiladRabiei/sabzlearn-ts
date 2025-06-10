import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./PresellCourses.css";
import useFetch from "../../hooks/useFetch";
import { lastCourseType } from "../types/all.types";
import CourseBox from "../CourseBox/CourseBox";
import { Autoplay } from "swiper/modules";

export default function PresellCourses() {
  const [data] = useFetch("courses/presell");
  const presellCourses = data as lastCourseType[];
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader title="جدیدترین ها" desc="دوره‌های جدید، فرصت‌های نو" />
        <div className="">
          <div className="container">
            <div className="">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {presellCourses?.map((course) => (
                  <SwiperSlide key={course._id}>
                    <CourseBox {...course} isSlider={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
