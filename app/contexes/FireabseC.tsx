"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { db } from "./Fireabse";
import { addDoc, collection, getDocs } from "firebase/firestore";

import Modal from "../[slug]/Modal";

type DefineValues = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  createPlayer: Function;
  life: number;
  setLife: React.Dispatch<React.SetStateAction<number>>;
  data: [];
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cntx = createContext<DefineValues | null>(null);

const FirebaseC = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [life, setLife] = useState<number>(3);
  const [data, setData] = useState<[] | any>([]);
  const [trigger, setTrigger] = useState<boolean>(false); //Only purpose to trigger real time
  const createPlayer = async () => {
    try {
      await addDoc(collection(db, "players"), {
        name: name,
        score: score,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getDataInCollection = async () => {
    const querySnapshot = await getDocs(collection(db, "players"));
    const dataToMap = querySnapshot.docs.map((itms) => itms.data()); //gets data in array
    setData(dataToMap);
  };
  useEffect(() => {
    getDataInCollection();
  }, [trigger]);
  console.log(life);
  return (
    <>
      <Cntx.Provider
        value={{
          name,
          setName,
          score,
          setScore,
          createPlayer,
          life,
          setLife,
          data,
          trigger,
          setTrigger,
        }}
      >
        {children}
        {life === 0 ? (
          <Modal
            text={`Oh nooo you lost a game, your score is ${score}`}
            confetti={false}
          />
        ) : null}
        {score === 19 ? (
          <Modal
            text={"Congratualtions 👏 you have answered all the questions"}
            confetti={true}
          />
        ) : null}
      </Cntx.Provider>
    </>
  );
};

//This checks if item is used outside of Cntx, this allows me to immedtiatelly import items without checking
export const UseCntx = () => {
  const context = useContext(Cntx);
  if (!context) {
    throw new Error("needs to be used inside the Cntx");
  }
  return context;
};
export default FirebaseC;
