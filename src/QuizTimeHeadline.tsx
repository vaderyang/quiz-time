import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';

export const QuizTimeHeadline: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      position: 'absolute',
      top: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '80px',
      fontWeight: 'bold',
      textAlign: 'center',
      textShadow: '4px 4px 0px #000000',
      lineHeight: '1',
      opacity,
    }}>
      <div>Quiz Time</div>
      <div style={{color: '#FFD700'}}>Challenge</div>
    </div>
  );
};
