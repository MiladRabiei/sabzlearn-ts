import React from "react";
import { Link } from "react-router-dom";

import "./SectionHeader.css";
type SectionHeaderProps = {
  title: string;
  desc: string;
  btnTitle?: string;
  btnHref?: string;
};
export default function SectionHeader({
  title,
  desc,
  btnTitle,
  btnHref,
}: SectionHeaderProps) {
  console.log(`href: ${btnHref}`);
  return (
    <div className="block items-center justify-between sm:flex">
      <div className="courses-header__right">
        <span className="courses-header__title section_title font-MorabbaMedium">
          {title}
        </span>
        <span className="courses-header__text font-MorabbaLight">{desc}</span>
      </div>
      {btnTitle ? (
        <div className="flex justify-end font-MorabbaLight my-3 sm:my-0 hover:text-emerald-400">
          <Link to={`/${btnHref}`} className="courses-header__link">
            {btnTitle}
            <svg className="size-5">
              <use href="#arrow-up-left"></use>
            </svg>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
