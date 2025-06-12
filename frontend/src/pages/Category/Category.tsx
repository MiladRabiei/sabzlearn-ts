import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { lastCourseType } from "../../Components/types/all.types";

export default function Category() {
  const { categoryName } = useParams();
  const [data, isLoading, refetch] = useFetch(
    `/courses/category/${categoryName}`
  );
  const categories = data as lastCourseType[];
  const [shownCourses, setShownCourses] = useState<lastCourseType[]>([]);
  const [status, setStatus] = useState("default");
  const [orderedCourses, setOrderedCourses] = useState<lastCourseType[]>([]);
  const [categoryTitle, setCategoryTitle] = useState<string | null>(
    "مرتب سازی براساس پیش فرض"
  );
  const [searchValue, setSearchValue] = useState("");
  const [courseDisplayType, setCourseDisplayType] = useState("row");
  useEffect(() => {
    switch (status) {
      case "free": {
        const orderedCategory = categories
          .slice()
          .filter((item) => item.price === 0);
        setOrderedCourses(orderedCategory);
        break;
      }
      case "first": {
        const orderedCategory = categories.slice().reverse();
        setOrderedCourses(orderedCategory);
        break;
      }
      case "last": {
        setOrderedCourses(categories);
        break;
      }
      case "cheap": {
        const orderedCategory = categories
          .slice()
          .sort((a, b) => a.price - b.price);
        setOrderedCourses(orderedCategory);
        break;
      }
      case "expensive": {
        const orderedCategory = categories
          .slice()
          .sort((a, b) => b.price - a.price);
        setOrderedCourses(orderedCategory);
        break;
      }
      default: {
        setOrderedCourses(categories);
      }
    }
  }, [status, categories]);

  const changeTitle = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setCategoryTitle(event?.currentTarget.textContent);
  };
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    const searchedCourse = categories.filter((item) =>
      item.name.includes(event.currentTarget.value)
    );
    setOrderedCourses(searchedCourse);
  };
  return (
    <>
      <Navbar />

      <section className="courses">
        <div className="container">
          <div className="courses-top-bar">
            <div className="courses-top-bar__right">
              <div
                className={`courses-top-bar__row-btn ${
                  courseDisplayType === "row" && "courses-top-bar__icon--active"
                }`}
                onClick={() => setCourseDisplayType("row")}
              >
                <i className="fas fa-border-all courses-top-bar__icon"></i>
              </div>
              <div
                className={`courses-top-bar__row-btn ${
                  courseDisplayType === "column" &&
                  "courses-top-bar__icon--active"
                }`}
                onClick={() => setCourseDisplayType("column")}
              >
                <i className="fas fa-align-left courses-top-bar__icon"></i>
              </div>

              <div className="courses-top-bar__selection">
                <span className="courses-top-bar__selection-title">
                  {categoryTitle}
                  <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                </span>
                <ul className="courses-top-bar__selection-list">
                  <li
                    className="courses-top-bar__selection-item courses-top-bar__selection-item--active"
                    onClick={(event) => {
                      setStatus("default");
                      changeTitle(event);
                    }}
                  >
                    مرتب سازی پیش فرض
                  </li>
                  <li
                    className="courses-top-bar__selection-item"
                    onClick={(event) => {
                      setStatus("free");
                      changeTitle(event);
                    }}
                  >
                    مرتب سازی بر اساس رایگان
                  </li>
                  <li
                    className="courses-top-bar__selection-item"
                    onClick={(event) => {
                      setStatus("first");
                      changeTitle(event);
                    }}
                  >
                    مرتب سازی بر اساس اولین
                  </li>
                  <li
                    className="courses-top-bar__selection-item"
                    onClick={(event) => {
                      setStatus("last");
                      changeTitle(event);
                    }}
                  >
                    مرتب سازی بر اساس آخرین
                  </li>
                  <li
                    className="courses-top-bar__selection-item"
                    onClick={(event) => {
                      setStatus("cheap");
                      changeTitle(event);
                    }}
                  >
                    مرتب سازی بر اساس ارزان ترین
                  </li>
                  <li
                    className="courses-top-bar__selection-item"
                    onClick={(event) => {
                      setStatus("expensive");
                      changeTitle(event);
                    }}
                  >
                    مرتب سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div className="courses-top-bar__left">
              <form action="#" className="courses-top-bar__form">
                <input
                  type="text"
                  className="courses-top-bar__input"
                  placeholder="جستجوی دوره ..."
                  value={searchValue}
                  onChange={(event) => searchHandler(event)}
                />
                <i className="fas fa-search courses-top-bar__search-icon"></i>
              </form>
            </div>
          </div>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {categories?.length === 0 || shownCourses?.length === 0 ? (
                  <div className="alert alert-warning">
                    هنوز هیچ دوره ای برای این کتگوری وجود ندارد
                  </div>
                ) : courseDisplayType === "row" ? (
                  shownCourses?.map((category) => <CourseBox {...category} />)
                ) : (
                  shownCourses?.map((course) => (
                    <div className="col-12">
                      <div className="course-box">
                        <div className="course__box-header">
                          <div className="course__box-right">
                            <a className="course__box-right-link" href="#">
                              <img
                                src={
                                  import.meta.env.BASE_URL +
                                  "/images/courses/fareelancer.png"
                                }
                                className="course__box-right-img"
                              />
                            </a>
                          </div>
                          <div className="course__box-left">
                            <div className="course__box-left-top">
                              <a href="#" className="course__box-left-link">
                                {course.name}
                              </a>
                            </div>
                            <div className="course__box-left-center">
                              <div className="course__box-left-teacher">
                                <i className="course__box-left-icon fa fa-chalkboard-teacher"></i>
                                <span className="course__box-left-name">
                                  محمد امین سعیدی راد
                                </span>
                              </div>
                              <div className="course__box-left-stars">
                                <span className="course__box-left-star">
                                  <img
                                    src={
                                      import.meta.env.BASE_URL +
                                      "/images/svgs/star_fill.svg"
                                    }
                                  />
                                </span>
                                <span className="course__box-left-star">
                                  <img
                                    src={
                                      import.meta.env.BASE_URL +
                                      "/images/svgs/star_fill.svg"
                                    }
                                  />
                                </span>
                                <span className="course__box-left-star">
                                  <img
                                    src={
                                      import.meta.env.BASE_URL +
                                      "/images/svgs/star_fill.svg"
                                    }
                                  />
                                </span>
                                <span className="course__box-left-star">
                                  <img
                                    src={
                                      import.meta.env.BASE_URL +
                                      "/images/svgs/star_fill.svg"
                                    }
                                  />
                                </span>
                                <span className="course__box-left-star">
                                  <img
                                    src={
                                      import.meta.env.BASE_URL +
                                      "/images/svgs/star_fill.svg"
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="course__box-left-bottom">
                              <div className="course__box-left-des">
                                <p>{course.description}</p>
                              </div>
                            </div>
                            <div className="course__box-footer">
                              <div className="course__box-footer-right">
                                <i className="course__box-footer-icon fa fa-users"></i>
                                <span className="course__box-footer-count">
                                  202
                                </span>
                              </div>
                              <span className="course__box-footer-left">
                                {course.price === 0
                                  ? "رایگان"
                                  : course.price.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {!isLoading && (
            <Pagination
              itemsCount={5}
              items={orderedCourses}
              pathName={`/category-info/${categoryName}`}
              setShownCourses={setShownCourses}
            />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
