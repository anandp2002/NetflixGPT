import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen pt-[18%] aspect-video pl-24 pr-6 text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" bg-white px-10 rounded-xl text-black p-4 text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-opacity-50 bg-gray-500 px-10 rounded-xl ml-2 text-white p-4 text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
