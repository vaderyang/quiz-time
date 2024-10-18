import {Composition} from 'remotion';
import {Main} from './Main';

export const RemotionRoot: React.FC = () => {
  // Calculate the total duration for all questions
  const questionDuration = 210; // 7 seconds per question
  const totalQuestions = 10;
  const totalDuration = questionDuration * totalQuestions;

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