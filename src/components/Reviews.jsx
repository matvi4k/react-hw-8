import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Section } from "./Section";
import { Statistics } from "./Statistics";

export function Reviews({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  addGoodCount,
  addNeutralCount,
  addBadCount,
}) {
  const handleFeedback = (option) => {
    if (option === "good") {
      addGoodCount();
    } else if (option === "neutral") {
      addNeutralCount();
    } else {
      addBadCount();
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
