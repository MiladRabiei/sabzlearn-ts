import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { lastCourseType } from "../../Components/types/all.types";

export default function Category() {
  const{categoryName}=useParams()
  const[data,isLoading,refetch]=useFetch(`/courses/category/${categoryName}`)
  const categories=data as lastCourseType[]
  const [shownCourses,setShownCourses]=useState<lastCourseType[]>([])

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="courses">
        <div className="container">
          <div className="courses-top-bar">
            <div className="courses-top-bar__right">
              <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                <i className="fas fa-border-all courses-top-bar__icon"></i>
              </div>
              <div className="courses-top-bar__column-btn">
                <i className="fas fa-align-left courses-top-bar__icon"></i>
              </div>

              <div className="courses-top-bar__selection">
                <span className="courses-top-bar__selection-title">
                  مرتب سازی پیش فرض
                  <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                </span>
                <ul className="courses-top-bar__selection-list">
                  <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                    مرتب سازی پیش فرض
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس محبوبیت
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس امتیاز
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس آخرین
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس ارزان ترین
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس گران ترین
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
                />
                <i className="fas fa-search courses-top-bar__search-icon"></i>
              </form>
            </div>
          </div>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {categories?.length===0?(
                  <div className="alert alert-warning">
                    هنوز هیچ دوره ای برای این کتگوری وجود ندارد
                  </div>
                ):(

                  shownCourses?.map(category=>(
                    
                    <CourseBox {...category} />
                  ))
                )}
                
              </div>
            </div>
          </div>

          {!isLoading&&(
            <Pagination
            itemsCount={5}
            items={categories}
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
