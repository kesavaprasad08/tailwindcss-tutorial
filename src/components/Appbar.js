import React, { useState } from "react";

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open)
  };

  return (
    <nav className="p-5 ">
      <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto ">
        <div className="flex justify-between">
          <div>
            <span className="text">KESAVA </span>
            <span className="text">PRASAD</span>
          </div>
          <div className="md:hidden">
            <button onClick={menuClicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`flex md:block justify-end ${open ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0 p-5">
            <li>
              <a href="#" className="">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
