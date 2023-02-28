/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMenuFold } from 'react-icons/ai';

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Books',
    },
    {
      id: 2,
      path: 'categories',
      name: 'Categories',
    },
  ];
  return (
    <div className="w-full shadow-md bg-white">
      <div className="flex justify-between items-center px-4 md:px-24 py-7">
        <div className="flex gap-8 items-center">
          <h1 className="text-3xl text-[#0290ff] font-bold">
            <Link to="/"> Bookstore cms </Link>
          </h1>
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <li
                key={link.id}
                className={`list-none text-sm transition-all ease-in-out duration-400 ${
                  activeLink === link.id
                    ? 'text-black text-lg'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveLink(link.id)}
                aria-hidden="true"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </nav>
        </div>
        <span className="hidden md:flex rounded-full border border-solid p-3 text-lg">
          <BsFillPersonFill style={{ color: '#0290ff' }} />
        </span>
        <span className="md:hidden flex p-3 text-2xl">
          <AiOutlineMenuFold style={{ fontSize: '2rem' }} />
        </span>
      </div>
    </div>
  );
};

export default Header;