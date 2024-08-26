import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-80 sm:pt-[20%]  pl-0 sm:pl-24 pr-0 sm:pr-6 text-white bg-transparent sm:bg-gradient-to-r from-black">
      <div className="h-1/2 mt-3 sm:mt-0">
        <h1 className="text-3xl font-bold bg-black sm:bg-transparent pl-4 sm:pl-0 pr-4 sm:pr-0">
          {title}
        </h1>
        <p className="py-4 text-lg w-full sm:w-2/5 text-start bg-black sm:bg-transparent pl-4 sm:pl-0 pr-4 sm:pr-0">
          {overview}
        </p>
        <div className="bg-black sm:bg-transparent pl-4 sm:pl-0 pb-6 sm:pb-0">
          <button className=" bg-white px-10 rounded-xl text-black p-4 text-xl hover:bg-opacity-80">
            Play
          </button>
          <button className="bg-opacity-50 bg-gray-500 hover:bg-gray-600 px-10 rounded-xl ml-2 text-white p-4 text-xl">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
