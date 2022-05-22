import React, { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (key) => {
    this.setState((prevState) => ({ [key]: prevState[key] + 1 }))
      ;
  }
  
  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => { 
    const { good } = this.state;
    return Math.round(good/this.countTotalFeedback()*100);
  }

  render() { 
    const { good, neutral, bad } = this.state;
    return (
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback()
          ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          :
          <Notification message="There is no feedback" />
        }
      </Section>
    );
  }
}

