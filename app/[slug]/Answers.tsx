"use client";
import React, { useContext, useState } from "react";
import { UseCntx } from "../contexes/FireabseC";
import style from "../styles/main.module.scss";
import toast from "react-hot-toast";

const Answers = ({ data }: { data: {} | any }) => {
  const { score, setScore, life, setLife, clicked, setClicked } = UseCntx();

  const correct: string = data[score].correct_answer;
  const answArr: string[] = [...data[score].incorrect_answers, correct].sort();

  const [clickedIndx, setClickedIndx] = useState<number>(0);
  const chekcer = (itm: string, i: number) => {
    if (clicked) {
      if (clicked && clickedIndx == i && itm === correct) return style.correct;

      if (clicked && clickedIndx == i && itm !== correct) return style.wrong;
    }
    return "";
  };
  return (
    <>
      <div>
        <h1>Question number {score + 1}</h1>
        <p dangerouslySetInnerHTML={{ __html: data[score].question }}></p>
        {/* I used dangerouslySetInnerHTML because some data is rendered with
        &quot; and this is the easiest way also I needed to use this on muultiple places */}
      </div>
      {answArr.map((itm, i) => {
        return (
          <div
            className={chekcer(itm, i)}
            key={i}
            onClick={() => {
              if (itm === correct) {
                setClickedIndx(i);
                setClicked(true);
                toast.success("Woho correct answer", {
                  position: "top-center",
                  duration: 3000,
                });
                setTimeout(() => {
                  setScore(score + 1);
                  setClicked(false);
                }, 3000);
                return;
              }

              /////////////////////
              toast.error("Ouch, wrong answer", {
                position: "top-center",
                duration: 3000,
              });
              setClickedIndx(i);
              setClicked(true);
              setLife(life - 1);
              console.log(false);
            }}
          >
            <h2 dangerouslySetInnerHTML={{ __html: itm }}></h2>
          </div>
        );
      })}
    </>
  );
};

export default Answers;
