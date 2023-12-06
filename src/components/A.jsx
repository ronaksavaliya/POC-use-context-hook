import React from "react";
import B from "./B";
import { useContext } from "react";
import { name } from "../App";


export default function A() {

  const {sum} =useContext(name);

  return (
    <div>
      <B />
      sum={sum(3,5)}
    </div>
  );
}
