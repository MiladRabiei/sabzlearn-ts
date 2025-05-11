import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./PresellCourses.css";
import useFetch from "../../hooks/useFetch";
import { lastCourseType } from "../types/all.types";
import CourseBox from "../CourseBox/CourseBox";

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
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {presellCourses?.map((course) => (
                  <SwiperSlide>
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
