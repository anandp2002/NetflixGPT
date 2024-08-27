import React from 'react';

const GPTSearchbar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="grid grid-cols-12 w-3/4">
        <input
          className="p-4 col-span-10 rounded-lg"
          placeholder="Search something you want ..."
        />
        <button className=" bg-red-600 col-span-2 ml-6 rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
