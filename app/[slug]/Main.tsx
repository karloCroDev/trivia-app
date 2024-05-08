import React from "react-dom";
import style from "../styles/main.module.scss";
import Answers from "./Answers";

type props = {
  category: string;
};

const quizzData = async (category: string) => {
  try {
    const data = await fetch(
      `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=medium&type=multiple`
    );
    const res = await data.json();
    return res.results;
  } catch (error) {
    console.error(error);
  }
};
//This didn't needed to be fecthed on server, but I wanted to make that user needs call much less times

const Main = async ({ category }: props) => {
  const data: any = await quizzData(category);
  //

  return (
    <div className={style.mainContainer}>
      <article>
        <Answers data={data} />
      </article>
    </div>
  );
};

export default Main;
