import React, { useEffect, useMemo, useState } from "react";

export default function ReferentialEqualityUseMemo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: theme ? "black" : "white",
      color: theme ? "white" : "black",
    };
  }, [theme]);

  // const themeStyles = {
  //   backgroundColor: theme ? "black" : "white",
  //   color: theme ? "white" : "black",
  // };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  return (
    <>
      <h1>refential equality</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        click me
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("calling slowFUnction");
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}
