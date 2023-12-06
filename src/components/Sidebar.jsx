/* eslint-disable react/prop-types */

import { FaTasks } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import {
  RiDashboardFill,
  RiBookOpenLine,
  RiSettings2Line,
  RiSmartphoneFill,
  RiMetaFill,
} from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } lg:block lg:w-64 bg-black text-white py-4`}
    >
      <div className="text-center text-2xl tracking-wide text-primary font-Bangers font-semibold">
        <Link to="/">Sistem Pernafasan</Link>
      </div>
      <nav className="mt-8">
        <ul className="pr-4">
          <li className="mb-4">
            <NavLink
              to="/dashboard/overview"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <RiDashboardFill className="w-6 h-6 mr-2" />
              Beranda Materi
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/ar"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <RiSmartphoneFill className="w-6 h-6 mr-2" />
              Augmented Reality
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="https://hubs.mozilla.com/fUgwAzP/numb-active-world"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <RiMetaFill className="w-6 h-6 mr-2" />
              Virtual Reality
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/quiz"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <MdOutlineQuiz className="w-6 h-6 mr-2" />
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
