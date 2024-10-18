# Quiz Time

Quiz Time is an interactive video-based quiz application that tests users' knowledge on various geography topics. It's built using Remotion, a powerful library for creating programmatic videos with React.

## Project Description

Quiz Time generates a dynamic video quiz featuring multiple-choice questions about geography. The application includes:

- 10 geography-related questions
- Animated countdown timer for each question
- Visually appealing background and layout
- Automatic question transitions
- Correct answer reveal after each question

This project demonstrates the power of combining React and Remotion to create engaging, interactive video content.

## Generated Video Example 

Check out the generated Quiz Time example video:

https://github.com/user-attachments/assets/e8f2a6f5-85f5-480b-82ee-1ae257173382


## Technologies Used

- React
- Remotion
- TypeScript
- bolt.new 

## Installation

To set up Quiz Time locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/vaderyang/quiz-time.git
   ```

2. Navigate to the project directory:
   ```
   cd quiz-time
   ```

3. Install dependencies:
   ```
   npm install
   ```

## How to Start

To run Quiz Time on your local machine:

1. Start Remotion to preview and edit the video:
   ```
   npm start
   ```

2. Open your browser and visit `http://localhost:3000` to view the application.


## Video Generation

To generate the quiz video:

1. In the browser, render the video by clicking the menu File -> Render.
   Options can be specified in the Render Settings.

2. In the command line, run the following command to render the video:
   ```
   npm run build
   ```
The rendered video will be saved as `out/video.mp4` in your project directory.
You can customize the output format, resolution, and other parameters by modifying the `build` script in `package.json` or by using additional Remotion CLI options.

For more advanced rendering options and configurations, please refer to the [Remotion documentation](https://www.remotion.dev/docs/).


## License

This project is licensed under the Apache License, Version 2.0 (Apache-2.0). You can freely use, modify, distribute, and sell this software and its documentation. The Apache License 2.0 is a permissive license that also provides an express grant of patent rights from contributors to users. For more details, see the [LICENSE](LICENSE) file in the project repository or visit [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0).
