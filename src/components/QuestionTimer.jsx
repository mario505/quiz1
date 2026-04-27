import { useEffect, useState } from "react";

export const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting interval");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 200);
    }, 200);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};
