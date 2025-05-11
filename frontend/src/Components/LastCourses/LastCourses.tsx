import React from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastCourses.css";
import useFetch from "../../hooks/useFetch";
import { lastCourseType } from "../types/all.types";

export default function LastCourses() {
  const[data,isLoading,refetch]=useFetch("/courses")
  const allCourses=data as lastCourseType[]
  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref='courses/1'
          />

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {allCourses?.slice(0,6).map(course=>(
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
