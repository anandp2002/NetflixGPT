import React from 'react';
import Netflix_Logo_PMS from '../images/Netflix_Logo_PMS.png';

const Header = () => {
  return (
    <div className="z-10 absolute w-48 px-8 py-2">
      <img alt="netflix logo" src={Netflix_Logo_PMS} />
    </div>
  );
};

export default Header;
