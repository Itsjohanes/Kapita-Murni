/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ home, about, programs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 fixed w-full bg-white">
      <nav className="text-cyan-800 p-6">
        <div
          className={`${
            isMenuOpen ? "flex flex-col items-center" : "flex"
          }   justify-center text-xs md:justify-center md:text-xl lg:justify-end lg:text-xl`}
        >
          <div className="md:hidden flex">
            {isMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          <div
            className={`${
              isMenuOpen ? "flex flex-col" : "hidden"
            } md:flex items-center space-x-4 uppercase my-4 md:my-0`}
          >
            <Link to="/" onClick={home} className="my-2">
              Home
            </Link>
            <Link onClick={programs} className="my-2">
              Programs
            </Link>

            <Link onClick={about} className="my-2">
              About Us
            </Link>
            <Link
              to="/dashboard/disclaimer"
              className="border-2 px-4 py-2 my-2 hover:bg-button"
            >
              Mulai Belajar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
