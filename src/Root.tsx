/**
 * @file Root.tsx
 * @author Vader Yang <vader.yang@gmail.com>
 * @copyright Copyright (c) 2024 Vader Yang
 * @license Apache-2.0
 */

import {Composition} from 'remotion';
import {Main} from './Main';
import questions from './questions.json';

export const RemotionRoot: React.FC = () => {
  const introDuration = 60; // 2 seconds at 30 fps
  const outroDuration = 60; // 2 seconds at 30 fps
  const questionDuration = 180; // 6 seconds per question
  const totalQuestions = questions.length;
  const totalDuration = introDuration + (questionDuration * totalQuestions) + outroDuration;

  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={totalDuration}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
