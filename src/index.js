import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date(2022, 1, 29, 16);
currDate = currDate.getHours();

let greeting = " ";
const cssStyle = {};

if (currDate >= 1 && currDate < 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}


ReactDOM.render(
  <>
    <h1>
      <div>
        <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
      </div>
    </h1>
  </>,
  document.getElementById('root')
);

