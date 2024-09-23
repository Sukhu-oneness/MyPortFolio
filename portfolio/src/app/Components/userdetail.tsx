// components/UserDetail.tsx
import React from 'react';

const UserDetail: React.FC = () => {
  const imageUrl = "/imagecopy.png"; 
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap items-center justify-center">

          {/* Combined Home Section with a col-8 container */}
          <div className="w-full md:w-8/12 lg:w-8/12 mb-8 flex flex-col md:flex-row items-center text-center md:text-left text-white">

            {/* Home Text */}
            <div className="hp-left w-full md:w-1/2 px-4">
              <div className="text-rotation mb-4 animate-fadeIn">
                <div className="text-lg font-bold">Frontend Developer</div>
                <div className="text-lg font-bold">Web Designer</div>
              </div>

              <h1 className="text-4xl font-semibold">Alex Smith</h1>
              <p className="mt-4">
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>

              <div className="mt-6 flex justify-center md:justify-start space-x-4">
  <a 
    href="#" 
    target="_blank" 
    className="bg-blue-600 text-white border-2 border-white-600 px-4 py-2 rounded-full hover:bg-blue-700 hover:border-blue-700 transition duration-200 ease-in-out"
  >
    Download CV
  </a>
  <a 
    href="#" 
    target="_self" 
    className="bg-gray-600 text-white border-2 border-white-600 px-4 py-2 rounded-full hover:bg-gray-700 hover:border-gray-700 transition duration-200 ease-in-out"
  >
    Contact
  </a>
</div>

            </div>

            {/* Home Photo wrapped in a parent div with red background */}
            <div className="relative w-full md:w-1/2 h-auto bg-blue-500 rounded-full flex justify-center items-center p-4"> {/* Added padding */}
  <div 
    className="home-photo relative w-11/12 rounded-full shadow-lg border-8 border-white" 
    style={{ paddingBottom: "100%" }} // Maintains square aspect ratio
  >
    <div
      className="hp-inner absolute inset-0 bg-cover bg-center w-full rounded-full"
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        height: '100%',
        width: '100%',
      }}
    ></div>
  </div>
</div>


          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
