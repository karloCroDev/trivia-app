"use client";
import React, { useState } from "react";
import style from "./styles/start.module.scss";
import { useRouter } from "next/navigation";
import { UseCntx } from "./contexes/FireabseC";
import toast from "react-hot-toast";

type ReturnData = {
  name: string;
  score: number;
};
const Start = () => {
  //Fetch this on server
  const { name, setName, data } = UseCntx();

  const { push } = useRouter();

  const [categoryS, setCategoryS] = useState<string>("9"); //Only used in this component
  console.log(categoryS);
  return (
    <div className={style.container}>
      <section>
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (name) {
              push(`/${categoryS}`);
              return;
            }
            toast.error("Please enter your name", {
              position: "top-center",
              duration: 4000,
            });
            //Since next 13 I can't pass normally additional params, so I need to use slug like this
          }}
        >
          <div>
            <h1>Kvizardio</h1>
            <p>The most various quizz you will ever find</p>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCategoryS(e.target.value)
              }
            >
              <option value="9">General knowledge</option>
              <option value="10">Books</option>
              <option value="11">Films</option>
              <option value="12"> Music</option>
              <option value="17">Science & nature</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
            </select>
          </div>

          <button type="submit">Let's start</button>
        </form>
      </section>
      <section>
        <h1>Leaderboard</h1>
        <hr />
        {data
          .sort((a: ReturnData, b: ReturnData) => b.score - a.score)
          .map((itm: ReturnData, i) => {
            return (
              <>
                <div key={i}>
                  <h2>{`${i + 1} ${itm.name}`}</h2>
                  <h2>{itm.score}</h2>
                </div>
                <hr />
              </>
            );
          })}
      </section>
    </div>
  );
};

export default Start;
