import { useState } from 'react';
import { Container, Title } from './App.styled';

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = feedBack => {
        switch (feedBack) {
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
                console.log('default');
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return countTotalFeedback()
            ? Math.round((good / countTotalFeedback()) * 100)
            : 0;
    };

    return (
        <Container>
            <Title>feedback</Title>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
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
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </Container>
    );
}

// class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     onLeaveFeedback = feedback => {
//         this.setState(prevState => {
//             return { [feedback]: prevState[feedback] + 1 };
//         });
//     };

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     };

//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         const total = this.countTotalFeedback();
//         return total ? Math.round((good / total) * 100) : 0;
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         return (
//             <Container>
//                 <Title>feedback</Title>
//                 <Section title="Please leave feedback">
//                     <FeedbackOptions
//                         options={['good', 'neutral', 'bad']}
//                         onLeaveFeedback={this.onLeaveFeedback}
//                     />
//                 </Section>
//                 <Section title="Statistics">
//                     {this.countTotalFeedback() ? (
//                         <Statistics
//                             good={good}
//                             neutral={neutral}
//                             bad={bad}
//                             total={this.countTotalFeedback()}
//                             positivePercentage={this.countPositiveFeedbackPercentage()}
//                         />
//                     ) : (
//                         <Notification message="There is no feedback" />
//                     )}
//                 </Section>
//             </Container>
//         );
//     }
// }

// // function App() {
// //   return (
// //     <Container>
// //       <Title>feedback</Title>
// //       <Section></Section>
// //       <Section></Section>
// //     </Container>
// //   );
// // }

// export default App;
