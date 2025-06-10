import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";
import "./CourseBox.css";
import { lastCourseType } from "../types/all.types";

export default function CourseBox(props: lastCourseType) {
  const [isImgShow, setIsImgShow] = useState(false);

  const onImageLoaded = () => setIsImgShow(true);

  const onImageError = () => {
    // Codes
  };

  return (
    <div className="" style={{ width: `${props.isSlider ? "100%" : ""}` }}>
      <div className="course-box shadow-xl">
        <Link to={`/course-info/${props.shortName}`}>
          <img
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            // src="https://placeimg.com/295/295/any/tech?t=190129384"
            alt="Course img"
            className="w-full object-cover h-42 rounded-t-2xl"
            onLoad={onImageLoaded}
            onError={onImageError}
            loading="lazy"
          />
          {!isImgShow && <CircleSpinner />}
        </Link>
        <div className="course-box__main">
          <Link
            to={`/course-info/${props.shortName}`}
            className="course-box__title line-clamp-1  text-nowrap overflow-ellipsis"
          >
            {props.name}
          </Link>

          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-300 font-MorabbaLight"
              >
                {props.creator}
              </a>
            </div>
            <div className="course-box__rating">
              <img
                src="/images/svgs/star.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
            </div>
          </div>

          <div className="course-box__status">
            <div className="course-box__users">
              <i className="fas fa-users course-box__users-icon"></i>
              <span className="course-box__users-text"> {props.registers}</span>
            </div>
            <span className="font-DanaDemiBold text-emerald-500">
              {props.price === 0 ? "رایگان" : props.price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="course-box__footer">
          <Link
            to={`/course-info/${props.shortName}`}
            className="font-MorabbaMedium hover:text-emerald-400 flex items-center justify-center"
          >
            مشاهده اطلاعات
            <svg className="size-5">
              <use href="#arrow-left-circle"></use>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
