import React, { useEffect, useState } from "react";

import "./Pagination.css";
import { Link, useParams } from "react-router-dom";
import { articleType, lastCourseType } from "../types/all.types";
export type paginationPropsType<T> = {
  itemsCount: number;
  items: T[];
  pathName: string;
  setShownCourses: (displayItems: T[]) => void;
};
export default function Pagination<T>({
  itemsCount,
  items,
  pathName,
  setShownCourses,
}: paginationPropsType<T>) {
  const { page } = useParams();
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [mainPage, setMainPage] = useState(1);
  console.log(page);
  useEffect(() => {
    const startIndex = itemsCount * Number(page) - itemsCount;
    const endIndex = itemsCount + startIndex;
    const displayItems = items?.slice(startIndex, endIndex);
    setShownCourses(displayItems);
    const pagesCount = Math.ceil(items?.length / itemsCount);
    setPageCount(pagesCount);
  }, [page, items]);

  const paginationFunc = () => {
    const pages = [];

    for (let i = 1; i <= (pageCount || 1); i++) {
      pages.push(
        <li className="courses__pagination-item">
          <Link
            to={`${pathName}/${i}`}
            onClick={() => setMainPage(i)}
            className={`courses__pagination-link ${
              mainPage === i ? "courses__pagination-link--active" : null
            }`}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pages;
  };
  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        <li className="courses__pagination-item">
          <a href="#" className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
          </a>
        </li>
        {paginationFunc()}
      </ul>
    </div>
  );
}
