import QUESTIONS from '../../questions/questions';

export default function SummaryAnswere({ userAnswer }) {
  return userAnswer.map((answer, index) => {
    let cssClass = 'user-answer';

    if (answer === null) {
      cssClass += ' skipped';
    } else if (answer === QUESTIONS[index].answers[0]) {
      cssClass += ' correct';
    } else {
      cssClass += ' wrong';
    }

    return (
      <li key={index}>
        <h3>{index + 1}</h3>
        <p className="question">{QUESTIONS[index].text}</p>
        <p className={cssClass}>{answer ?? 'Skipped'}</p>
      </li>
    );
  });
}
