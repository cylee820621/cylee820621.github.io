import React, { useEffect } from "react";

function About() {
  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-blue-200 p-10">
      <div className="flex flex-wrap">
        <div className="flex-shrink bg-black text-white h-96 w-80">image</div>
        <div className="flex-1 ml-10">
          <h1 className="text-2xl max-w-md">Hello! I'm Chih Yu Lee, A Full Stack Developer From Jersey city, NJ.</h1>
          <div className=" mt-10">After graduating with a bachelor’s in biology, I found myself in a stable career as a microbiologist for a major brewery. While the idea of working at a brewery was definitely a great conversation starter, I realized that although I still had a love for science, the industry I was in was lacking in creativity and problem solving. After dabbling with some introductory JavaScript courses on the internet and exploring programming through self-teaching, I decided to take a leap of faith and made a switch in careers into tech. Through LearningFuze, I have developed a strong understanding of JavaScript (ES5 & ES6), React, Node.js, Express, PostgreSQL, HTML5, and CSS3. As a developer, I find a lot of joy and excitement utilizing my skills to help troubleshoot bugs and pushing projects forward. I enjoy learning new technologies and growing in a field that is constantly being pushed to new boundaries. Feel free to connect with me! Let's talk about web dev, tech, sports, photography, video games, cooking, or how I can be of help to your team or business! I'd love to get to know more developers and expand my network. I also know a thing or two about beer. Let’s build something cool. Mail: johnnyung91@gmail.com Phone: (626) 586-8079 LinkedIn: https://www.linkedin.com/in/johnny-ung/ GitHub: https://github.com/johnnyung91</div>
        </div>
      </div>
    </div>
  );
}

export default About;
