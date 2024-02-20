"use client";
import React, { useState } from "react";

const Page = () => {
  const [inputData, setInputData] = useState("");
  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  let databtn = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "(",
    ")",
    "+",
    "-",
    "*",
    "/",
  ];
  return (
    <div className="cal">
      <form action="" className=" form text-center absolute top-16 ">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 py-3">
          Simple Calculator
        </h1>
        <input
          type="text"
          className=" flex justify-center text"
          onChange={handleChange}
          value={inputData}
        />
        <br />
        <div className=" grid grid-cols-4 gap-4 ">
          {databtn.map((item, index) => {
            return (
              <input
                className=" btn rounded-md "
                key={item}
                type="button"
                value={item}
                onClick={(e) => setInputData(inputData + e.target.value)}
              />
            );
          })}
          <input
            className=" del  rounded-md "
            type="button"
            value="AC"
            onClick={(e) => setInputData("")}
          />
          <input
            className="  del  rounded-md"
            type="button"
            value="DEL"
            onClick={(e) => setInputData(inputData.slice(0, -1))}
          />
          <input
            className="   equal rounded-md"
            type="button"
            value="="
            onClick={(e) => setInputData(eval(inputData))}
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
