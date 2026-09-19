import { useState } from "react";
import { Reviews } from "./components/Reviews";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addGoodCount = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const addNeutralCount = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  };

  const addBadCount = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    total === 0 ? 0 : Math.round((feedback.good / total) * 100);

  return (
    <Reviews
      {...feedback}
      total={total}
      positivePercentage={positivePercentage}
      addGoodCount={addGoodCount}
      addNeutralCount={addNeutralCount}
      addBadCount={addBadCount}
    />
  );
}

export default App;
