import {AbsoluteFill, useCurrentFrame, interpolate, Sequence} from 'remotion';
import {QuizQuestion} from './QuizQuestion';
import {Background} from './Background';

const questions = [
  {
    question: "法国的首都是哪里？",
    options: ["伦敦", "柏林", "巴黎", "马德里"],
    correctAnswer: 2
  },
  {
    question: "地球上最大的海洋是哪个？",
    options: ["大西洋", "印度洋", "北冰洋", "太平洋"],
    correctAnswer: 3
  },
  {
    question: "撒哈拉沙漠位于哪个大洲？",
    options: ["亚洲", "非洲", "南美洲", "澳大利亚"],
    correctAnswer: 1
  },
  {
    question: "世界上最长的河流是哪条？",
    options: ["亚马逊河", "尼罗河", "长江", "密西西比河"],
    correctAnswer: 1
  },
  {
    question: "大堡礁位于哪个国家？",
    options: ["巴西", "印度尼西亚", "澳大利亚", "菲律宾"],
    correctAnswer: 2
  },
  {
    question: "世界上最高的山峰是哪座？",
    options: ["K2", "乞力马扎罗山", "珠穆朗玛峰", "勃朗峰"],
    correctAnswer: 2
  },
  {
    question: "以下哪个不是大洲？",
    options: ["欧洲", "南极洲", "格陵兰", "澳大利亚"],
    correctAnswer: 2
  },
  {
    question: "按陆地面积计算，最大的国家是哪个？",
    options: ["中国", "美国", "加拿大", "俄罗斯"],
    correctAnswer: 3
  },
  {
    question: "以下哪个城市不在欧洲？",
    options: ["布拉格", "伊斯坦布尔", "开罗", "维也纳"],
    correctAnswer: 2
  },
  {
    question: "世界上最小的国家是哪个？",
    options: ["摩纳哥", "圣马力诺", "梵蒂冈", "列支敦士登"],
    correctAnswer: 2
  }
];

export const Main: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const questionDuration = 210; // 7 seconds per question (5 seconds countdown + 2 seconds reveal)

  return (
    <AbsoluteFill style={{opacity}}>
      <Background />
      <AbsoluteFill>
        {questions.map((q, index) => (
          <Sequence from={index * questionDuration} durationInFrames={questionDuration} key={index}>
            <QuizQuestion 
              question={q.question}
              options={q.options}
              correctAnswer={q.correctAnswer}
              questionNumber={index + 1}
            />
          </Sequence>
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};