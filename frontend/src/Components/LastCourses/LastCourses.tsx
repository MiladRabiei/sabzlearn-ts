import React from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

import useFetch from "../../hooks/useFetch";
import { lastCourseType } from "../types/all.types";

export default function LastCourses() {
  const [data, isLoading, refetch] = useFetch("/courses");
  const allCourses = data as lastCourseType[];
  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref="courses/1"
          />

          <div className="courses-content">
            <div className="container">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  sm:gap-7">
                {allCourses?.slice(0, 12).map((course) => (
                  <CourseBox {...course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
