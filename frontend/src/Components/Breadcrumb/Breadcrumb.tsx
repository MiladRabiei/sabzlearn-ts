import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.css";
type Breadcrumblink = {
  id: number;
  title: string;
  to: string;
};
type BreadcrumbProps = {
  links: Breadcrumblink[];
};
export default function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="font-MorabbaMedium">
          <div className="breadcrumb__home-content-icon">
            <i className="fas fa-home breadcrumb__home-icon"></i>
          </div>
          <ul className="breadcrumb__list">
            {links.map((link) => (
              <li key={link.id} className="breadcrumb__item">
                <Link
                  to={`/${link.to}/1`}
                  className="flex items-center  text-lg"
                >
                  {link.title}
                  {link.id !== links.length ? (
                    <svg className="size-5 mx-2">
                      <use href="#chevron-left"></use>
                    </svg>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
