// pages/resume.tsx
import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-white">Alex Smith</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-300">Frontend Developer</h2>
        <p className="mt-2 text-center text-gray-400">Email: alex@example.com | Phone: (123) 456-7890</p>

        <div className="border-b border-gray-700 my-6"></div>

        <div className="border-b border-gray-700 my-6"></div>
{/* Skills Section */}
<section className="mt-6">
  <h3 className="text-3xl font-bold text-blue-500">Skills</h3>
  <ul className="mt-4 space-y-4">
    <li>
      <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
        <span className="text-gray-300">HTML, CSS, JavaScript</span>
        <span className="text-gray-300">90%</span>
      </div>
      <div className="h-2 bg-gray-600 rounded">
        <div className="h-full bg-blue-500 rounded" style={{ width: '90%' }}></div>
      </div>
    </li>
    <li>
      <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
        <span className="text-gray-300">React, Next.js, Tailwind CSS</span>
        <span className="text-gray-300">85%</span>
      </div>
      <div className="h-2 bg-gray-600 rounded">
        <div className="h-full bg-blue-500 rounded" style={{ width: '85%' }}></div>
      </div>
    </li>
    <li>
      <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
        <span className="text-gray-300">Responsive Design</span>
        <span className="text-gray-300">80%</span>
      </div>
      <div className="h-2 bg-gray-600 rounded">
        <div className="h-full bg-blue-500 rounded" style={{ width: '80%' }}></div>
      </div>
    </li>
    <li>
      <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
        <span className="text-gray-300">Version Control (Git)</span>
        <span className="text-gray-300">75%</span>
      </div>
      <div className="h-2 bg-gray-600 rounded">
        <div className="h-full bg-blue-500 rounded" style={{ width: '75%' }}></div>
      </div>
    </li>
  </ul>
</section>

<div className="border-b border-gray-700 my-6"></div>

        {/* Experience Section */}
        <section className="mt-6">
  <h3 className="text-3xl font-bold text-blue-500">Experience</h3>
  <div className="mt-4 space-y-4">
    <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200"> {/* Added hover effect */}
      <h4 className="text-xl font-semibold text-white">Company Name - Frontend Developer</h4>
      <p className="text-gray-400">Jan 2020 - Present</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Developed user-friendly web applications.</li>
        <li>Collaborated with designers and backend developers.</li>
        <li>Implemented responsive designs for various platforms.</li>
      </ul>
    </div>
    {/* Additional experience can be added here */}
  </div>
</section>

        <div className="border-b border-gray-700 my-6"></div>

        {/* Education Section */}
        <section className="mt-6">
  <h3 className="text-3xl font-bold text-blue-500">Education</h3>
  
  <div className="mt-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
    <h4 className="text-xl font-semibold text-white">Secondary Education</h4>
    <p className="text-gray-400">Government Model Sanskriti Senior Secondary School, 'Sirsa'</p>
  </div>
  
  <div className="mt-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
    <h4 className="text-xl font-semibold text-white">Senior Secondary Education</h4>
    <p className="text-gray-400">Government Model Sanskriti Senior Secondary School, 'Sirsa'</p>
  </div>
  
  <div className="mt-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200">
    <h4 className="text-xl font-semibold text-white">Bachelor of Computer Application</h4>
    <p className="text-gray-400">Shah Satnam Ji Boy's PG College, 'Sirsa'</p>
  </div>
</section>
<div className="border-b border-gray-700 my-6"></div>

{/* Certificates Section */}
<section className="mt-6">
  <h3 className="text-3xl font-bold text-blue-500">Projects</h3>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Responsive layout */}
    
    {/* Certificate 1 */}
    <div className="transform transition-transform duration-300 hover:scale-105 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-2xl">
      <img 
        src="/imagecopy.png" 
        alt="Certified Frontend Developer" 
        className="w-64 h-40 object-cover mb-4 rounded-md" // Fixed size with object-cover
      />
      <h4 className="text-xl font-semibold text-white">Certified Frontend Developer</h4>
      <p className="text-gray-400">Issuing Organization, Issued January 2021</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Completed a comprehensive program in frontend development.</li>
        <li>Learned technologies including React and Tailwind CSS.</li>
      </ul>
    </div>

    {/* Certificate 2 */}
    <div className="transform transition-transform duration-300 hover:scale-105 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-2xl">
      <img 
        src="/image.png" 
        alt="JavaScript Certification" 
        className="w-64 h-40 object-cover mb-4 rounded-md" // Fixed size with object-cover
      />
      <h4 className="text-xl font-semibold text-white">JavaScript Certification</h4>
      <p className="text-gray-400">Issuing Organization, Issued June 2020</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Mastered JavaScript fundamentals and advanced concepts.</li>
        <li>Applied knowledge to build dynamic web applications.</li>
      </ul>
    </div>

    {/* Certificate 3 */}
    <div className="transform transition-transform duration-300 hover:scale-105 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-2xl">
      <img 
        src="/imagecopy.png" 
        alt="Certified Frontend Developer" 
        className="w-64 h-40 object-cover mb-4 rounded-md" // Fixed size with object-cover
      />
      <h4 className="text-xl font-semibold text-white">Certified Frontend Developer</h4>
      <p className="text-gray-400">Issuing Organization, Issued January 2021</p>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>Completed a comprehensive program in frontend development.</li>
        <li>Learned technologies including React and Tailwind CSS.</li>
      </ul>
    </div>
  </div>
</section>
<div className="border-b border-gray-700 my-6"></div>

</div>
    </div>
  );
};

export default Resume;
