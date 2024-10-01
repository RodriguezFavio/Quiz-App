import SummaryDescription from './SummaryDescription';
import SummaryAnswere from './SummaryAnswere';

import quizCompleteImg from '../../assets/quiz-complete.png';
import QUESTIONS from '../../questions/questions';

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <SummaryDescription text="Skipped" percent={skippedAnswersShare} />
        <SummaryDescription
          text="Answered correctly"
          percent={correctAnswersShare}
        />
        <SummaryDescription
          text="Answered incorrectly"
          percent={wrongAnswersShare}
        />
      </div>
      <ol>
        <SummaryAnswere userAnswer={userAnswers} />
      </ol>
    </div>
  );
}
