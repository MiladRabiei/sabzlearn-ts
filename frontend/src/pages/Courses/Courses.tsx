import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
import "./Courses.css";
import useFetch from "../../hooks/useFetch";
import { lastCourseType } from "../../Components/types/all.types";
import Pagination from "../../Components/Pagination/Pagination";

export default function Courses() {
  const [data, isLoading, refetch] = useFetch("/courses");
  const allCourses = data as lastCourseType[];
  const [shownCourses, setShownCourses] = useState<lastCourseType[]>([]);
  if (isLoading) {
    return;
  }
  return (
    <>
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3">
                {shownCourses?.map((course) => (
                  <CourseBox {...course} key={course._id} />
                ))}
              </div>
            </div>
          </div>

          <Pagination
            itemsCount={5}
            items={allCourses}
            pathName={"/courses"}
            setShownCourses={setShownCourses}
          />
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
