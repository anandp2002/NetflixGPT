import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 pl-10 pr-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div>
        <button className="bg-opacity-50 bg-gray-500 px-10 rounded-xl text-black p-4 text-xl">
          ▶️ Play
        </button>
        <button className="bg-opacity-50 bg-red-200 px-10 rounded-xl ml-2 text-black p-4 text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
