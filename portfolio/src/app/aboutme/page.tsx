import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-10 text-gray-800 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8">About Me</h2>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
          <img
            src="/imagecopy1.png"
            alt="Sukhjeet Singh"
            className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 mb-4"
          />
          <p className="text-lg text-gray-700 text-center mb-4">
            Hello! I'm <span className="font-semibold">Sukhjeet Singh</span>, a <span className="font-semibold">Full Stack Developer</span> based in <span className="font-semibold">Haryana, India</span>. 
            I have a passion for <span className="font-semibold">software application and website development</span>. My journey in this field began <span className="font-semibold">when I developed my first website application during college, which ignited my interest in technology.</span>
          </p>
          <p className="text-lg text-gray-700 text-center mb-4">
            I love creating <span className="font-semibold">web applications and cloud-based services</span>, and I'm constantly exploring new technologies and methods to improve my skills. 
            In my free time, I enjoy <span className="font-semibold">playing cricket, watching movies, and traveling to new places</span>.
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
