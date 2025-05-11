import React, { useContext } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import authContext from "../Context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { topbarLinksType } from "../types/all.types";
export default function Navbar() {
  const auth = useContext(authContext);
  const [data,isLoading,refetch]=useFetch("menus")
  const allMenus=data as topbarLinksType[]
  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />

            <ul className="main-header__menu">
              <li className="main-header__item">
                <Link to="/" className="main-header__link">
                  صفحه اصلی
                </Link>
              </li>
              {allMenus?.map((item:topbarLinksType)=>(
                <li className="main-header__item">
                <NavLink to={`/category-info/${item?.href}/1`} className="main-header__link">
                   {item?.title}
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                </NavLink>

                <ul className="main-header__dropdown">
                  {item.submenus?.length!==0&&(
                    item.submenus?.map((sub)=>(

                      <li className="main-header__dropdown-item">
                    <Link to={sub.href} className="main-header__dropdown-link">
                      {sub.title} 
                    </Link>
                  </li>
                    ))
                  )}
                  
                </ul>
              </li>
              ))}
              
              
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            {!auth.isLoading && auth.isLoggedIn ? (
              <Link to="#" className="main-header__profile">
                <span className="main-header__profile-text">
                  {auth.userInfos?.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">ورود|ثبت نام</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
