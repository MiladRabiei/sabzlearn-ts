import React from "react";

type AboutUsBoxProps = {
  title: string;
  desc: string;
  icon?: string;
  color: string;
  bgColor: string;
  darkBgColor: string;
};
export default function AboutUsBox({
  title,
  desc,
  icon,
  color,
  bgColor,
  darkBgColor,
}: AboutUsBoxProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white rounded-xl dark:bg-gray-800 shadow-2xl">
      <div
        className={`flex justify-center  lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11  lg:mb-0 lg:ml-11 ${bgColor} ${darkBgColor} rounded-full`}
      >
        <svg
          className={`size-13 ${color} translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2`}
        >
          <use href={`#${icon}`}></use>
        </svg>
      </div>
      <div className="text-center lg:text-right">
        <h4 className="font-MorabbaBold lg:text-lg">{title}</h4>
        <p className="text-center text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}
