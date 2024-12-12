import React from 'react'
import { Link } from 'react-router-dom';
const PitchCreation = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
   
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Pitch Creation</h2>
        <p className="mb-6">Complete all fields (6/6) to create your pitch.</p>
        <form className="grid gap-6 bg-gray-800 p-6 rounded shadow-lg">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="pitchTitle"
            >
              Pitch Title *
            </label>
            <input
              id="pitchTitle"
              type="text"
              placeholder="Enter pitch title"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="briefDescription"
            >
              Brief Description *
            </label>
            <textarea
              id="briefDescription"
              placeholder="Enter brief description"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            ></textarea>
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="flowImage"
            >
              Flow Image *
            </label>
            <input
              id="flowImage"
              type="file"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="uploadMedia"
            >
              Upload Media/Video *
            </label>
            <input
              id="uploadMedia"
              type="file"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="authorName"
            >
              Your Name *
            </label>
            <input
              id="authorName"
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-lg rounded hover:bg-green-500"
          >
            Publish Pitch
          </button>
        </form>
      </main>
    </div>
  );
}

export default PitchCreation