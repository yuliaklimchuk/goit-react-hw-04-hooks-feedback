import React, { useState } from "react";
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export function App() { 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { name: 'good', value: good, onChahge: setGood },
    { name: 'neutral', value: neutral, onChahge: setNeutral },
    {name: 'bad', value: bad, onChahge: setBad}
  ];
  const  onLeaveFeedback = (option) => {
    option.onChahge(option.value + 1);
  }
  const countTotalFeedback = () => { 
    return good + neutral + bad;
  }
  const  countPositiveFeedbackPercentage = () => { 
    return Math.round(good/countTotalFeedback()*100);
  }
  return (
      <Section title='Please leave feedback' >
        <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback()
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            :
            <Notification message="There is no feedback" />
          }
        </Section>
      );
}