import React, { useEffect, useState } from "react";
import { postCategories } from "../APIRequest/APIRequst";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  const [cataegories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await postCategories();
      setCategories(res);
    })();
  }, []);

  return (
    <div>
      <div className="navbar fixed z-50 top-0 left-0 w-full bg-base-100 shadow-lg px-4">
        <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
          {/* Left: Logo */}
          <span className="font-bold text-2xl text-primary tracking-wide select-none">NHD</span>
          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold underline"
                      : "hover:text-primary transition"
                  }
                >
                  Home
                </NavLink>
              </li>
              {cataegories.map((item, index) => (
                <li key={index.toString()}>
                  <NavLink
                    to={"/byCategory/" + item["id"]}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold underline"
                        : "hover:text-primary transition"
                    }
                  >
                    {item["name"]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Mobile Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold underline"
                      : "hover:text-primary transition"
                  }
                >
                  Home
                </NavLink>
              </li>
              {cataegories.map((item, index) => (
                <li key={index.toString()}>
                  <NavLink
                    to={"/byCategory/" + item["id"]}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold underline"
                        : "hover:text-primary transition"
                    }
                  >
                    {item["name"]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-20">{props.children}</div>
    </div>
  );
};

export default Layout;
