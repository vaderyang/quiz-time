/**
 * @file Countdown.tsx
 * @author Vader Yang <vader.yang@gmail.com>
 * @copyright Copyright (c) 2024 Vader Yang
 * @license Apache-2.0
 */

import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';

interface CountdownProps {
  totalFrames: number;
}

export const Countdown: React.FC<CountdownProps> = ({totalFrames}) => {
  const frame = useCurrentFrame();
  const countdown = Math.max(0, Math.floor((totalFrames - frame) / 30));
  const progress = interpolate(frame, [0, totalFrames], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '120px',
      fontWeight: 'bold',
      color: '#333',
      boxShadow: '0 5px 0 rgba(0,0,0,0.2)',
    }}>
      <div style={{
        position: 'absolute',
        top: '5px',
        left: '5px',
        width: 'calc(100% - 10px)',
        height: 'calc(100% - 10px)',
        borderRadius: '50%',
        border: '15px solid #00FF00',
        borderRightColor: 'transparent',
        transform: `rotate(${progress * 360}deg)`,
        transition: 'transform 0.1s linear',
        opacity: 1,
      }} />
      {countdown}
    </div>
  );
};
