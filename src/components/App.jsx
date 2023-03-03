import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Notification } from './Feedback/Statistics/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonsNames = { good, neutral, bad };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return `${good || bad ? ((good / (good + bad)) * 100).toFixed(0) : 0}%`;
  }

  function onLeaveFeedback(optionName) {
    switch (optionName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(buttonsNames)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good, bad } = this.state;
//     return `${((good / (good + bad)) * 100).toFixed(0)}%`;
//   }

//   onLeaveFeedback = optionName => {
//     this.setState(prevState => {
//       return {
//         [optionName]: prevState[optionName] + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
