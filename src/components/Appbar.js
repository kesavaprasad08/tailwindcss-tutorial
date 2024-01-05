import React, { useState } from "react";

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open)
  };

  return (
    <nav className="p-3 bg-black">
      <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto text-white">
        <div className="flex justify-between">
          <div className="pt-3">
            <span>KESAVA </span>
            <span>PRASAD</span>
          </div>
          <div className="md:hidden">
            <button onClick={menuClicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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
        <div className={`flex md:block justify-center text-center  ${open ? 'block pt-5 ' : 'hidden'} `}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0 p-0 ">
            <li>
              <a href="#" className="hover:text-slate-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-400">Skills</a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-400">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
