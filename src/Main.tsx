/**
 * @file Main.tsx
 * @author Vader Yang <vader.yang@gmail.com>
 * @copyright Copyright (c) 2024 Vader Yang
 * @license Apache-2.0
 */

import {AbsoluteFill, useCurrentFrame, interpolate, Sequence} from 'remotion';
import {QuizQuestion} from './QuizQuestion';
import {Background} from './Background';
import questions from './questions.json';
import {QuizTimeHeadline} from './QuizTimeHeadline';

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '80px',
      fontWeight: 'bold',
      color: 'white',
      opacity,
    }}>
      <QuizTimeHeadline />
      How many questions 
      <br/>can you answer correctly?
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '60px',
      fontWeight: 'bold',
      color: 'white',
      opacity,
      textAlign: 'center',
    }}>
      <QuizTimeHeadline />
      How many did you get right?
    </AbsoluteFill>
  );
};

export const Main: React.FC = () => {
  const introDuration = 60; // 2 seconds at 30 fps
  const outroDuration = 60; // 2 seconds at 30 fps
  const questionDuration = 180; // 6 seconds per question (4 seconds countdown + 2 seconds reveal)

  return (
    <AbsoluteFill>
      <Background />
      <Sequence from={0} durationInFrames={introDuration}>
        <Intro />
      </Sequence>
      {questions.map((q, index) => (
        <Sequence from={introDuration + index * questionDuration} durationInFrames={questionDuration} key={index}>
          <QuizQuestion 
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            questionNumber={index + 1}
          />
        </Sequence>
      ))}
      <Sequence from={introDuration + questions.length * questionDuration} durationInFrames={outroDuration}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
