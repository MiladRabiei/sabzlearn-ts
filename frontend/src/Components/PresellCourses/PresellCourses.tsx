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
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای توضیحات دوره های پیش فروش"
        />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
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
