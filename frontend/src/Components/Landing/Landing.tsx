import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import LandingCounter from "../LandingCounter/LandingCounter";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";

export default function Landing() {
  return (
    <section className="bg-[url('/images/hero-section-mobile.webp')] w-full h-100 sm:h-auto aspect-[2/1] sm:aspect-none md:bg-[url('/images/hero-section.webp')]  text-white bg-center bg-cover ">
      <Navbar />
      <div className="container">
        <h1 className="font-MorabbaBold md:hidden my-5 text-lg sm:text-xl text-center font-bold">
          سبزلرن، اولین گام برنامه‌نویس شدن
        </h1>
        <h1 className="hidden md:block my-5 font-MorabbaBold text-2xl lg:text-4xl text-center ">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("سبزلرن - آکادمی خصوصی برنامه نویسی")
                .start()
                .pauseFor(2000);
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        <h3 className="font-MorabbaLight text-sm sm:text-lg md:text-xl my-5 md:my-10 text-center tracking-tight">
          با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.
        </h3>
        <div className="w-[70%] mx-auto my-5 md:my-10  relative">
          <input
            type="text"
            className="w-full py-4 md:py-7 px-4 outline-none border border-white/30 rounded-2xl text-xs sm:text-sm md:text-lg"
            placeholder="چه چیزی دوست داری یاد بگیری ..."
          />
          <button
            className="absolute left-1 p-3 md:p-5 top-2 md:top-2.5 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-all text-white"
            type="submit"
          >
            <svg className=" size-3 md:size-6 text-center">
              <use href="#search"></use>
            </svg>
          </button>
        </div>
        <div className="landing-status !py-5 ">
          <div className="landing-status__item">
            <img
              className="size-10 sm:size-12 md:size-15 lg:size-20"
              src={import.meta.env.BASE_URL + "/images/clock-min.webp"}
              alt=""
            />
            <LandingCounter count={1648} />
            <span className="text-sm sm:text-xl lg:text-2xl font-bold font-MorabbaMedium">
              ساعت آموزش
            </span>
          </div>

          <div className="landing-status__item">
            <img
              className="size-10 sm:size-12 md:size-15 lg:size-20"
              src={import.meta.env.BASE_URL + "/images/book-min.webp"}
              alt=""
            />
            <LandingCounter count={73} />
            <span className="text-sm sm:text-xl lg:text-2xl font-bold font-MorabbaMedium">
              دوره آموزشی
            </span>
          </div>

          <div className="landing-status__item">
            <img
              className="size-10 sm:size-12 md:size-15 lg:size-20"
              src={import.meta.env.BASE_URL + "/images/conversation-min.webp"}
              alt=""
            />
            <span className="py-3 text-sm sm:text-xl lg:text-2xl font-bold ">
              {178830}
            </span>
            <span className="text-sm sm:text-xl lg:text-2xl font-bold font-MorabbaMedium">
              دانشجو
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
