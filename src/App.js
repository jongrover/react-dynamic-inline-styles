import React, { useState, useEffect } from 'react';
import Moment from 'moment';

function App() {

  const initStyle = {
    textAlign: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '500%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    lineHeight: 0,
    padding: '45vh 0 0',
    margin: 0,
    backgroundColor: 'rgb(255,255,255)',
    transition: 'background-color 2s',
    color: 'rgb(255,255,255)',
    cursor: 'pointer'
  },
  initHrs = new Date().getHours(),
  initFormat = 'h:mm:ss A',
  initTime = Moment().format(initFormat);

  const [style, setStyle] = useState(initStyle);
  const [hrs, setHrs] = useState(initHrs);
  const [time, setTime] = useState(initTime);
  const [format, setFormat] = useState(initFormat);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStyle = {...style};
      const updatedHrs = new Date().getHours();
      const updatedTime = Moment().format(format);
      setHrs(updatedHrs);
      setTime(updatedTime);
      switch (hrs) {
        case 0:  updatedStyle.backgroundColor = 'rgb(6,7,9)';       break; // 12 AM
        case 1:  updatedStyle.backgroundColor = 'rgb(15,23,36)';    break; //  1 AM
        case 2:  updatedStyle.backgroundColor = 'rgb(19,27,46)';    break; //  2 AM
        case 3:  updatedStyle.backgroundColor = 'rgb(23,39,64)';    break; //  3 AM
        case 4:  updatedStyle.backgroundColor = 'rgb(33,53,88)';    break; //  4 AM
        case 5:  updatedStyle.backgroundColor = 'rgb(44,80,142)';   break; //  5 AM
        case 6:  updatedStyle.backgroundColor = 'rgb(68,116,181)';  break; //  6 AM
        case 7:  updatedStyle.backgroundColor = 'rgb(100,159,212)'; break; //  7 AM
        case 8:  updatedStyle.backgroundColor = 'rgb(145,203,235)'; break; //  8 AM
        case 9:  updatedStyle.backgroundColor = 'rgb(191,228,247)'; break; //  9 AM
        case 10: updatedStyle.backgroundColor = 'rgb(171,217,241)'; break; // 10 AM
        case 11: updatedStyle.backgroundColor = 'rgb(160,205,235)'; break; // 11 AM
        case 12: updatedStyle.backgroundColor = 'rgb(153,195,230)'; break; // 12 PM
        case 13: updatedStyle.backgroundColor = 'rgb(138,179,220)'; break; //  1 PM
        case 14: updatedStyle.backgroundColor = 'rgb(122,160,202)'; break; //  2 PM
        case 15: updatedStyle.backgroundColor = 'rgb(112,150,193)'; break; //  3 PM
        case 16: updatedStyle.backgroundColor = 'rgb(109,125,182)'; break; //  4 PM
        case 17: updatedStyle.backgroundColor = 'rgb(90,106,174)';  break; //  5 PM
        case 18: updatedStyle.backgroundColor = 'rgb(54,68,144)';   break; //  6 PM
        case 19: updatedStyle.backgroundColor = 'rgb(39,47,100)';   break; //  7 PM
        case 20: updatedStyle.backgroundColor = 'rgb(22,27,61)';    break; //  8 PM
        case 21: updatedStyle.backgroundColor = 'rgb(20,20,43)';    break; //  9 PM
        case 22: updatedStyle.backgroundColor = 'rgb(15,20,31)';    break; // 10 PM
        case 23: updatedStyle.backgroundColor = 'rgb(17,16,23)';    break; // 11 PM
        default: updatedStyle.backgroundColor = 'rgb(127,127,127)';
      }
      setStyle(updatedStyle);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [format, hrs, time, style]);

  const switchFormat = () => {
    let updatedFormat = format;
    (updatedFormat === 'h:mm:ss A') ? updatedFormat = 'H:mm:ss' : updatedFormat = 'h:mm:ss A';
    setFormat(updatedFormat);
  };

  return (
    <h1 onClick={switchFormat} style={style}>{time}</h1>
  );
}

export default App;
