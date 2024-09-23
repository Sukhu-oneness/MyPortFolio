// pages/blog.tsx
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <div className="w-full max-w-6xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-white">Blog</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="flex flex-col bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition duration-200">
            <img 
              src="/imagecopy1.png" 
              alt="Blog Post 1" 
              className="h-64 w-full object-cover" // Increased height to h-64
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">Blog Post Title 1</h2>
              <p className="mt-2 text-gray-400">Posted on January 1, 2023</p>
              <p className="mt-2 text-gray-300">
                This is a short summary of the blog post. It gives readers an idea of what to expect.
              </p>
              <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">Read More</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition duration-200">
            <img 
              src="/imagecopy 3.png" 
              alt="Blog Post 2" 
              className="h-64 w-full object-cover" // Increased height to h-64
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">Blog Post Title 2</h2>
              <p className="mt-2 text-gray-400">Posted on February 1, 2023</p>
              <p className="mt-2 text-gray-300">
                This is another summary of a different blog post. It should be engaging to draw in readers.
              </p>
              <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">Read More</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="flex flex-col bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition duration-200">
            <img 
              src="/imagecopy 2.png" 
              alt="Blog Post 3" 
              className="h-64 w-full object-cover" // Increased height to h-64
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">Blog Post Title 3</h2>
              <p className="mt-2 text-gray-400">Posted on March 1, 2023</p>
              <p className="mt-2 text-gray-300">
                This is a summary for the third blog post. It's informative and encourages readers to click.
              </p>
              <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
