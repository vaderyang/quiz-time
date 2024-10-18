/**
 * @file Background.tsx
 * @author Vader Yang <vader.yang@gmail.com>
 * @copyright Copyright (c) 2024 Vader Yang
 * @license Apache-2.0
 */

import {AbsoluteFill} from 'remotion';

export const Background: React.FC = () => {
  return (
    <AbsoluteFill style={{
      background: '#4FB4E9',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(10, 1fr)',
        opacity: 0.3,
      }}>
        {Array(60).fill(0).map((_, i) => (
          <div key={i} style={{
            backgroundColor: '#3DA3D8',
            margin: '10px',
            borderRadius: '10px',
          }} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
