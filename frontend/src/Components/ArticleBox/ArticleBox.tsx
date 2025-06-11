import React from "react";

import "./ArticleBox.css";
import { Link } from "react-router-dom";
type ArticleBoxProps = {
  title: string;
  description: string;
  cover: string;
  shortName: string;
};
export default function ArticleBox({
  title,
  description,
  cover,
  shortName,
}: ArticleBoxProps) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-xl">
      <div className="article-card__header">
        <Link
          to={`/article-info/${shortName}`}
          className="article-card__link-img"
        >
          <img
            src={`https://sabzlearn-ts.onrender.com/courses/covers/${cover}`}
            className="article-card__img h-45 object-cover"
            alt="Article Cover"
          />
        </Link>
      </div>
      <div className="px-5 py-4">
        <h3 className=" font-DanaDemiBold h-12 md:h-14 line-clamp-2 mb-3">
          <Link to={`/article-info/${shortName}`} className="">
            {title}
          </Link>
        </h3>
        <p className="line-clamp-3 font-Dana text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center px-5 my-4 py-4 font-MorabbaMedium border-t-1 border-t-gray-300 justify-center hover:text-emerald-400">
          <Link
            className="w-full flex items-center justify-center"
            to={`/article-info/${shortName}`}
          >
            <span>مطالعه مقاله</span>
            <svg className="size-5">
              <use href="#arrow-left-circle"></use>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
