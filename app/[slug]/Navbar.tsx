import React from "react";
import style from "../styles/navbar.module.scss";

import Heart from "./Heart";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <Link href={"/"}>
          <h1>Kvizardio</h1>
        </Link>
        <Heart />
      </nav>
    </>
  );
};

export default Navbar;
