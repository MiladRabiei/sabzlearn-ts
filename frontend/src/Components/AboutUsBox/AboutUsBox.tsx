import React from "react";

import "./AboutUsBox.css";
type AboutUsBoxProps={
  title:string
  desc:string
  icon?:string
}
export default function AboutUsBox({ title, desc, icon }:AboutUsBoxProps) {
  return (
    <div className="col-6">
      <div className="about-us__box">
        <div className="about-us__box-right">
          <i className="far fa-copyright about-us__icon"></i>
        </div>
        <div className="about-us__box-left">
          <span className="about-us__box-title">{ title }</span>
          <span className="about-us__box-text">
              { desc }
          </span>
        </div>
      </div>
    </div>
  );
}
