export default function Home() {
  const imageUrl = "/imagecopy.png"; 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="flex flex-wrap items-center">

          {/* Home Photo with Enhanced Styles */}
          <div className="w-full md:w-5/12 lg:w-5/12 mb-6">
            <div className="relative w-full rounded-full overflow-hidden bg-red-600 shadow-lg animate-bounce hover:scale-110">
              <div
                className="absolute inset-0 bg-cover bg-center bg-[url(/imagecopy.png)] transition duration-500 ease-in-out"
                
              ></div>
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
              </div>
              </div>

          {/* Home Text */}
          <div className="w-full md:w-7/12 lg:w-7/12">
            <div className="hp-left">
              <div className="text-rotation mb-4 animate-fadeIn">
                <div className="text-2xl font-bold">Frontend Developer</div>
                <div className="text-2xl font-bold">Web Designer</div>
              </div>

              <h1 className="text-4xl font-semibold">Alex Smith</h1>
              <p className="mt-4 text-gray-700">
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>

              <div className="mt-6 flex space-x-4">
                <a href="#" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 animate-bounce">
                  Download CV
                </a>
                <a href="#" target="_self" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 animate-bounce">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
