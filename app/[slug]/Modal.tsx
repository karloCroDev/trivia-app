"use client";
import React, { useEffect, useRef } from "react";
import Confetti from "react-confetti";
import style from "../styles/modal.module.scss";
import Link from "next/link";
import { UseCntx } from "../contexes/FireabseC";

type Props = {
  text: string;
  confetti: boolean;
};
const Modal = ({ text, confetti }: Props) => {
  const {
    createPlayer,
    name,
    score,
    life,
    trigger,
    setLife,
    setScore,
    setName,
    setTrigger,
  } = UseCntx();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const removeModal = async () => {
    if (name && score > 0) {
      await createPlayer();
    }
    setName("");
    setLife(3);
    setScore(0);
    setTrigger(!trigger);
    dialogRef.current?.close();
  };
  useEffect(() => {
    dialogRef.current?.showModal();
  }, [life]);
  console.log(name);
  console.log(score);
  return (
    <>
      {confetti ? <Confetti /> : null}

      <dialog
        ref={dialogRef}
        onKeyDown={(e: React.KeyboardEvent<HTMLDialogElement>) => {
          if (e.key === "Escape") e.preventDefault(); //I don't want to enable user to get out of modal
        }}
        className={style.dialog}
      >
        <div className={style.helper}>
          {/* Need to use this because I set display to be flex so modal won't close by it's default behavior */}
          <h2>{text}</h2>
          <div>
            <button onClick={() => window.location.reload()}>Play again</button>
            <Link href={"/"}>
              <button className={style.lastBtn} onClick={removeModal}>
                Main menu
              </button>
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
