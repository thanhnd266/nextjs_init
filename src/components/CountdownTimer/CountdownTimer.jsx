import { secondsToHMS } from "@/app/Helper/helpFunction";
import { setRemainingTestTime } from "@/app/Store/reducer/TestExamStore";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useDispatch } from "react-redux";

const CountdownTimer = ({ seconds, onCountdownCompleted, isStopCountdown, paused, childRef }) => {
  const [time, setTime] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (seconds) {
      setTime(seconds);
    }
  }, [seconds]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0 && !paused) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
        onCountdownCompleted();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time, onCountdownCompleted]);
  
  useEffect(() => {
    if (isStopCountdown) {
      // luu time
      dispatch(setRemainingTestTime({ remainingTestTime: time }));
    }
  }, [isStopCountdown]);

  return <span ref={childRef}>{seconds ? secondsToHMS(time) : ""}</span>;
};

export default CountdownTimer;
