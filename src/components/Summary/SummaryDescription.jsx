export default function SummaryDescription({ text, percent }) {
  return (
    <p>
      <span className="number">{percent}%</span>
      <span className="text">{text}</span>
    </p>
  );
}
