import React, { useContext, useEffect, useRef, useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import authContext from "../Context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { topbarLinksType } from "../types/all.types";
export default function Navbar() {
  const auth = useContext(authContext);
  const navMenu = useRef<HTMLDivElement>(null);
  const overlayMenu = useRef<HTMLDivElement>(null);
  const [data, isLoading, refetch] = useFetch("menus");
  const allMenus = data as topbarLinksType[];
  const [light, setLight] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "sun";
  });
  const [mode, setMode] = useState("sun");
  const [activeMenu, setActiveMenu] = useState<string | null>("");
  useEffect(() => {
    if (light) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "sun");
      setMode("moon");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "moon");
      setMode("sun");
    }
  }, [light]);
  const toggleMenu = (title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };
  const openMenu = () => {
    navMenu.current?.classList.remove("-right-75");
    navMenu.current?.classList.add("right-0");
    overlayMenu.current?.classList.remove("hidden");
    overlayMenu.current?.classList.add("block");
  };
  const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    if (overlayMenu?.current?.contains(event.target as Node)) {
      overlayMenu.current?.classList.remove("block");
      overlayMenu.current?.classList.add("hidden");
      navMenu.current?.classList.remove("right-0");
      navMenu.current?.classList.add("-right-75");
    }
  };
  return (
    <>
      {/* desktop nav */}
      <div className="hidden md:block py-5 px-5">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2 lg:gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="main-header__logo absolute right-0 left-0 mx-auto md:static h-11 md:h-10 lg:h-14 shrink-0"
                viewBox="0 0 1020 769"
              >
                <polygon
                  fill="#006537"
                  points="484.8124 560.0603 302.0609 655.3444 238.4124 617.2945 238.4124 462.4662 484.8124 560.0603"
                ></polygon>
                <polygon
                  fill="#006869"
                  points="972.5712 207.8379 484.6647 462.7753 10.7595 275.1003 498.7369 20.1923 972.5712 207.8379"
                ></polygon>
                <line
                  fill="#1a3d3d"
                  x1="929.7475"
                  y1="307.461"
                  x2="929.6513"
                  y2="307.6423"
                ></line>
                <polygon
                  fill="#006869"
                  points="1010.2748 576.281 951.4402 632.8758 896.4012 572.396 934.1612 536.0524 934.0697 227.9393 972.5606 207.8255 972.3776 534.6349 1010.2748 576.281"
                ></polygon>
                <polygon
                  fill="#00524c"
                  points="972.5669 246.8789 972.5027 335.57 934.0989 357.7689 934.0747 266.9936 972.5669 246.8789"
                ></polygon>
                <polygon
                  fill="#004b26"
                  points="478.5395 760.6504 238.4571 617.3325 238.4571 604.062 484.6701 560.0356 489.1606 570.333 478.5395 760.6504"
                ></polygon>
                <polygon
                  fill="#00524c"
                  points="585.898 409.8693 484.472 463.0223 10.7549 275.1038 498.7374 20.1923 585.898 409.8693"
                ></polygon>
                <polygon
                  fill="#00322d"
                  points="972.5669 207.8394 972.5027 255.9601 934.0989 300.7406 934.0747 227.9542 972.5669 207.8394"
                ></polygon>
                <polygon
                  fill="#1eb35b"
                  points="816.6519 386.7124 816.6519 527.0091 478.1841 760.5632 302.0575 655.3487 816.6519 386.7124"
                ></polygon>
              </svg>
              <ul className="flex items-center gap-x-3 lg:gap-x-8">
                <li>
                  <Link to="/">صفحه اصلی</Link>
                </li>
                <li className="relative group/menu ">
                  <Link to="/">دوره های آموزشی</Link>
                  <div
                    className="invisible opacity-0 
                  group-hover/menu:visible group-hover/menu:opacity-100 
                  absolute top-full pt-7 transition-all z-50 "
                  >
                    <ul
                      className=" relative  w-55  rounded-lg hover:rounded-l-none bg-white
                   dark:bg-slate-950 text-gray-900 dark:text-white  
                     "
                    >
                      {allMenus?.map((menu: topbarLinksType) => {
                        return (
                          <li className=" first:hover:rounded-tr-lg  group p-4 hover:bg-sky-100 hover:text-sky-700  border-l-4 border-l-transparent hover:border-l-4 hover:border-l-sky-500">
                            <div
                              id={menu.title}
                              className={`flex justify-between items-center`}
                            >
                              <NavLink to={`/category-info/${menu?.href}/1`}>
                                {menu.title}
                              </NavLink>
                              <svg id={menu.href} className={`size-3 `}>
                                <use href="#chevron-left"></use>
                              </svg>
                            </div>
                            {menu?.submenus?.length !== 0 && (
                              <div
                                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-white
                                 dark:bg-slate-950  z-50  right-full top-0 rounded-l-lg overflow-hidden"
                              >
                                <ul
                                  id={menu.title}
                                  className=" w-55 min-h-[392px]  p-5 space-y-5"
                                >
                                  {menu.submenus?.map((item) => (
                                    <li className="text-gray-900 dark:text-white hover:text-sky-700">
                                      <Link to={"/course-info/" + item.href}>
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/">مقالات</Link>
                </li>
                {/* {allMenus?.map((item: topbarLinksType) => (
                <li className="main-header__item">
                  <NavLink
                    to={`/category-info/${item?.href}/1`}
                    className="main-header__link"
                  >
                    {item?.title}
                    <i className="fas fa-angle-down main-header__link-icon"></i>
                  </NavLink>

                  <ul className="main-header__dropdown">
                    {item.submenus?.length !== 0 &&
                      item.submenus?.map((sub) => (
                        <li className="main-header__dropdown-item">
                          <Link
                            to={"/course-info/" + sub.href}
                            className="main-header__dropdown-link"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))} */}
              </ul>
            </div>

            <div className="flex items-center gap-x-3 lg:gap-x-5 ">
              <svg
                className="size-6 cursor-pointer"
                onClick={() => setLight((prev) => !prev)}
              >
                <use href={`#${mode}`}></use>
              </svg>

              <Link to="#">
                <svg className="size-6">
                  <use href="#bag"></use>
                </svg>
              </Link>
              {!auth.isLoading && auth.isLoggedIn ? (
                <Link to="#" className="main-header__profile">
                  <span className="main-header__profile-text">
                    {auth.userInfos?.name}
                  </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-x-2 rounded-lg w-40 h-12 text-white bg-emerald-400 hover:bg-emerald-500 px-4 py-2  "
                >
                  <svg className="size-6">
                    <use href="#user"></use>
                  </svg>
                  <span className="main-header__profile-text">
                    ورود|ثبت نام
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="flex justify-between items-center md:hidden py-5 px-5">
        <svg onClick={openMenu} className="size-6">
          <use href="#hamburger"></use>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="main-header__logo absolute right-0 left-0 mx-auto md:static h-11 md:h-10 lg:h-14 shrink-0"
          viewBox="0 0 1020 769"
        >
          <polygon
            fill="#006537"
            points="484.8124 560.0603 302.0609 655.3444 238.4124 617.2945 238.4124 462.4662 484.8124 560.0603"
          ></polygon>
          <polygon
            fill="#006869"
            points="972.5712 207.8379 484.6647 462.7753 10.7595 275.1003 498.7369 20.1923 972.5712 207.8379"
          ></polygon>
          <line
            fill="#1a3d3d"
            x1="929.7475"
            y1="307.461"
            x2="929.6513"
            y2="307.6423"
          ></line>
          <polygon
            fill="#006869"
            points="1010.2748 576.281 951.4402 632.8758 896.4012 572.396 934.1612 536.0524 934.0697 227.9393 972.5606 207.8255 972.3776 534.6349 1010.2748 576.281"
          ></polygon>
          <polygon
            fill="#00524c"
            points="972.5669 246.8789 972.5027 335.57 934.0989 357.7689 934.0747 266.9936 972.5669 246.8789"
          ></polygon>
          <polygon
            fill="#004b26"
            points="478.5395 760.6504 238.4571 617.3325 238.4571 604.062 484.6701 560.0356 489.1606 570.333 478.5395 760.6504"
          ></polygon>
          <polygon
            fill="#00524c"
            points="585.898 409.8693 484.472 463.0223 10.7549 275.1038 498.7374 20.1923 585.898 409.8693"
          ></polygon>
          <polygon
            fill="#00322d"
            points="972.5669 207.8394 972.5027 255.9601 934.0989 300.7406 934.0747 227.9542 972.5669 207.8394"
          ></polygon>
          <polygon
            fill="#1eb35b"
            points="816.6519 386.7124 816.6519 527.0091 478.1841 760.5632 302.0575 655.3487 816.6519 386.7124"
          ></polygon>
        </svg>
        <svg className="size-6">
          <use href="#bag"></use>
        </svg>
      </div>
      {/* mobile menu */}
      <div
        ref={navMenu}
        className="fixed md:hidden top-0 -right-75 w-75 h-screen bg-white dark:bg-slate-950 z-10 overflow-y-auto transition-all "
      >
        {auth.isLoggedIn ? (
          <div className=" w-full flex items-center justify-center bg-sky-100 dark:bg-slate-900">
            <button className="text-center py-5">
              <span>{auth.userInfos?.name}</span>
              <svg>
                <use href="#chevron-left"></use>
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-sky-100 dark:bg-slate-900 text-sky-700">
            <button className="text-center font-bold text-lg py-5">
              ورود و ثبت نام
            </button>
          </div>
        )}
        {/* content */}
        <div className="px-5 py-5">
          <h3 className="text-emerald-400 dark:text-emerald-300">
            دسته بندی ها
          </h3>
          <ul className="py-5 *:py-2 text-sm ">
            {allMenus?.map((menu: topbarLinksType) => {
              const isActive = activeMenu === menu.title;
              return (
                <li>
                  <div
                    id={menu.title}
                    className={`flex justify-between items-center  ${
                      isActive ? "text-emerald-400" : ""
                    }`}
                    onClick={() => toggleMenu(menu.title)}
                  >
                    <NavLink to={`/category-info/${menu?.href}/1`}>
                      {menu.title}
                    </NavLink>
                    <svg
                      id={menu.href}
                      className={`size-3 ${isActive ? "-rotate-90" : ""}`}
                    >
                      <use href="#chevron-left"></use>
                    </svg>
                  </div>
                  {menu?.submenus?.length !== 0 && isActive && (
                    <ul
                      id={menu.title}
                      className="bg-white/30 dark:bg-slate-700  rounded-lg p-5 my-3 *:py-2"
                    >
                      {menu.submenus?.map((item) => (
                        <li>
                          <Link to={"/course-info/" + item.href}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li>
              <NavLink to={"/courses/1"}>همه دوره ها</NavLink>
            </li>
            <li>
              <NavLink to={"/articles/1"}> مقالات</NavLink>
            </li>
            <li className="my-5 flex items-center gap-x-2 border-t-2 border-t-black/10">
              <svg
                className="size-6 "
                onClick={() => setLight((prev) => !prev)}
              >
                <use href={`#${mode}`}></use>
              </svg>
              <span>{mode === "sun" ? "تم روشن" : "تم تیره"}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={overlayMenu}
        onClick={(event) => closeMenu(event)}
        className="overlay hidden md:hidden z-5 bg-black/50 absolute top-0 size-full"
      ></div>
    </>
  );
}
