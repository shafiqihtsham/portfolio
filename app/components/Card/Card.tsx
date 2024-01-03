"use client";

import { ReactNode} from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{props.title}</h3>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
