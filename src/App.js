import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Circle from "./Circle";
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
let arr = [];
let mar = 0;
const Circle12 = styled.div`
border-radius: 50%;
height: ${props => props.x}px;
width: ${props => props.y}px;
background-color: ${props => props.color};
margin: 0px auto;
overflow: hidden;
// float: left;
`;
const Circle122 = styled.div`
border-radius: 50%;
height: ${props => props.x}px;
width: ${props => props.y}px;
background-color: ${props => props.color};
margin: 10px auto;
overflow: hidden;
// float: left;
`;
const Circle123 = styled.div`
border-radius: 50%;
height: ${props => props.x}px;
width: ${props => props.y}px;
background-color: ${props => props.color};
margin: 5px auto;
overflow: hidden;
// float: left;
`;
function cc(x) {

  if (x > 0) return  <Circle12 x={x} y={x} color = {genColor()}> {cc(x-10)}  </Circle12> ;
  else return "";
}
function cc2(x) {

  if (x > 0) return  <Circle122 x={x} y={x} color = {genColor()}> {cc2(x-10)}  </Circle122> ;
  else return "";
}
function cc3(x) {

  if (x > 0) return  <Circle123 x={x} y={x} color = {genColor()}> {cc3(x-10)}  </Circle123> ;
  else return "";
}
function genColor() {
  let color = ["#"];
  for (let i = 1; i <= 6; ++i) {
    color[i] = (Math.random() * 16).toString(16).slice(0, 1);
  }
  return color;
}
// window.onclick()
function App() {
  const x = 200,
    y = 200;
  const Rectangle = styled.div`
    height: ${x}px;
    width: ${y}px;
    margin: 100px auto;
    // border: 1px solid black;
  `;



  const Circle1 = styled.div`
    border-radius: 50%;
    height: ${props => props.x}px;
    width: ${props => props.y}px;
    background-color: ${genColor()};
    margin: 50px auto;
    overflow: hidden;
    // float: left;
  `;
  const Circle11 = styled.div`
    border-radius: 50%;
    height: ${props => props.x}px;
    width: ${props => props.y}px;
    background-color: #123654;
    margin: 50px auto;
    overflow: hidden;

    // float: left;
  `;
  const Rectangle2 = styled.div`
    height: ${x / 2}px;
    width: ${y / 2}px;
    margin: 50px auto;
    background-color: #00ff00;
    float: left;
    border: 1px solid black;
  `;

  return (
    <div className="App">
      {Circle(20, 100)}
      {Circle3(20, 100)}
      {Circle2(20, 100)}
      {cc(300)}
      {cc2(300)}
      {cc3(300)}

      {/* <Rectangle> */}
      {/* <Circle1 x={200} y={200}>
        <Circle11 x={100} y={100}>
          <Circle1 x={500} y={500}></Circle1>
        </Circle11> */}
        {/* <Rectangle2></Rectangle2> */}
      {/* </Circle1> */}
      {/* </Rectangle> */}
      
    </div>
  );
}

export default App;
