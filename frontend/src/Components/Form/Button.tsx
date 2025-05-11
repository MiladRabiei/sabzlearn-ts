import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "../types/all.types";

export default function Button(props:ButtonProps) {
  if (props.to) {
    return (
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    );
  } else if (props.href) {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        className={props.className}
        type={props.type}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
}
