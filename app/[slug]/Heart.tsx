"use client";
import React from "react";
import style from "../styles/navbar.module.scss";
import { FaHeart } from "react-icons/fa";
import { UseCntx } from "../contexes/FireabseC";
const Heart = () => {
  const { life } = UseCntx();
  const heartArr: string[] = ["", "", ""]; //I think this is more practical
  return (
    <ul>
      {heartArr.map((itm, i) => {
        if (i < life) {
          return (
            <li key={i}>
              <FaHeart className={style.heart} />
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default Heart;
