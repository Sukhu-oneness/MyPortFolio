import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-10 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
          <img
            src="/imagecopy1.png"
            alt="Your Name"
            className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 mb-4"
          />
          <p className="text-lg text-gray-700 text-center mb-4">
            Hello! I'm <span className="font-semibold">[Your Name]</span>, a <span className="font-semibold">[Your Profession]</span> based in <span className="font-semibold">[Your Location]</span>. 
            I have a passion for <span className="font-semibold">[Your Interests/Skills]</span>. My journey in this field began <span className="font-semibold">[Brief Background/Experience]</span>.
          </p>
          <p className="text-lg text-gray-700 text-center mb-4">
            I love creating <span className="font-semibold">[Types of Projects you enjoy]</span>, and I'm constantly exploring new technologies and methods to improve my skills. 
            In my free time, I enjoy <span className="font-semibold">[Your Hobbies/Interests]</span>.
          </p>
          <p className="text-lg text-gray-700 text-center mb-4">
            I come from a loving family that has always supported my ambitions. We share many memorable moments together, whether it’s family dinners, game nights, or simply enjoying each other’s company. 
            Their encouragement fuels my passion for success.
          </p>
          <p className="text-lg text-gray-700 text-center mb-4">
            I'm excited to connect with like-minded individuals and collaborate on inspiring projects. Feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
