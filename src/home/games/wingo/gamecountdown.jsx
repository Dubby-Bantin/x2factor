import React, { useState, useEffect } from "react";

function Countdown({
  initialMinutes = 0,
  initialSeconds = 0,
  setGameTimeLeft,
  totalSeconds,
}) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [totalSecondsValue, setTotalSecondsValue] = useState(totalSeconds);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setTotalSecondsValue(totalSecondsValue - 1);
        setGameTimeLeft(totalSecondsValue - 1);
        console.log("this is the total seconds", totalSeconds);
      } else if (seconds === 0) {
        if (minutes === 0) {
          // When the countdown reaches zero, reset to initial values
          setMinutes(initialMinutes);
          setSeconds(initialSeconds);
          setTotalSecondsValue(totalSeconds);
          setGameTimeLeft(totalSecondsValue);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds, initialMinutes, initialSeconds, setGameTimeLeft]);

  const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

  return (
    <div className="countdown">
      <div className="digitContainer">{formatTime(minutes)[0]}</div>
      <div className="digitContainer">{formatTime(minutes)[1]}</div>
      <div className="separator">:</div>
      <div className="digitContainer">{formatTime(seconds)[0]}</div>
      <div className="digitContainer">{formatTime(seconds)[1]}</div>
    </div>
  );
}

export default Countdown;
