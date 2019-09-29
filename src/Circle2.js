import React from "react";
import styled from "styled-components";
let arr = [];
let red = "";
function genColor() {
  let color = ["#"];
  for (let i = 1; i <= 6; ++i) {
    color[i] = (Math.random() * 16).toString(16).slice(0, 1);
  }
  return color;
}
function genaret(n, r) {
  arr = [];
  for (let i = 1; i <= n; ++i) {
    // red = "#" + (Math.random() * 10000000).toString(16).slice(0, 6);
    red = genColor();
    const c = Circle(r / i);
    arr.push(c);
  }
  console.log(arr[0]);
  return arr;
}

function Circle(r) {
  //   const red = "#ad232f";

  const Circle2 = styled.div`
    border-radius: 50%;
    height: ${r}px;
    width: ${r}px;
    background-color: ${red};
    margin: 0px auto;
  `;

  return <Circle2> </Circle2>;
}

export default genaret;
