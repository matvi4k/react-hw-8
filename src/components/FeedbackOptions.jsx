export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <button onClick={() => onLeaveFeedback(options[0])}>Good</button>
      <button onClick={() => onLeaveFeedback(options[1])}>Neutral</button>
      <button onClick={() => onLeaveFeedback(options[2])}>Bad</button>
    </div>
  );
}
