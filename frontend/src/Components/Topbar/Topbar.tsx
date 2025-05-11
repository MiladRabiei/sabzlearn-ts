import React, { useState } from "react";

import "./Topbar.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { topbarLinksType } from "../types/all.types";

export default function Topbar() {
  const [allTopbarLinks,isLoading,refetch]=useFetch("/menus/topbar")
  const getRandomTopbarItems=(arr:topbarLinksType[],randomCount:number)=>{
    const shuffle=arr.sort(()=>0.5-Math.random())
    return shuffle.slice(0,randomCount)
  }
  console.log(allTopbarLinks);
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {!isLoading&&getRandomTopbarItems(allTopbarLinks,6).map(item=>(
                <li key={item?.id} className="top-bar__item">
                <Link to={item?.href} className="top-bar__link">
                  {item?.title}
                </Link>
              </li>
              ))}
              

            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                sabzlearn@gmail.com
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                09921558293
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
