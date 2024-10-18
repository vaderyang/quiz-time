/**
 * @file QuizQuestion.tsx
 * @author Vader Yang <vader.yang@gmail.com>
 * @copyright Copyright (c) 2024 Vader Yang
 * @license Apache-2.0
 */

import {AbsoluteFill, useCurrentFrame, interpolate, spring} from 'remotion';
import {Countdown} from './Countdown';
import {QuizTimeHeadline} from './QuizTimeHeadline';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  questionNumber: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  correctAnswer,
  questionNumber,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const countdownDuration = 150; // 3 seconds at 30 fps
  const revealDuration = 60; // 2 seconds at 30 fps
  const totalDuration = countdownDuration + revealDuration;

  const isTimeUp = frame >= countdownDuration;
  const isRevealPhase = frame >= countdownDuration && frame < totalDuration;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        opacity,
        padding: '20px',
      }}
    >
      <QuizTimeHeadline />
      <div style={{
        backgroundColor: 'white',
        borderRadius: '30px',
        padding: '30px',
        width: '90%',
        maxWidth: '900px',
        boxShadow: '0 10px 0 rgba(0,0,0,0.2)',
      }}>
        <h2 style={{
          fontSize: '70px',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#333',
        }}>
          {question}
        </h2>
        {options.map((option, index) => {
          const delay = index * 10;
          const scale = spring({
            frame: frame - delay,
            from: 0,
            to: 1,
            fps: 30,
            config: {
              damping: 12,
            },
          });

          const isCorrectAnswer = index === correctAnswer;
          let backgroundColor = '#FFD700';
          let color = '#333';

          if (isRevealPhase && isCorrectAnswer) {
            backgroundColor = '#008000'; // Darker Green
            color = 'white';
          }

          return (
            <div
              key={index}
              style={{
                fontSize: '60px',
                marginBottom: '20px',
                transform: `scale(${scale})`,
                backgroundColor,
                padding: '20px 25px',
                borderRadius: '30px',
                boxShadow: '0 5px 0 #DAA520',
                color,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
              }}
            >
              {String.fromCharCode(97 + index)}) {option}
            </div>
          );
        })}
      </div>
      {!isTimeUp && <Countdown totalFrames={countdownDuration} />}
    </AbsoluteFill>
  );
};
