import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../redux/slices/authSlice";
import {
  faUserCircle,
  faCog,
  faSignOutAlt,
  faHouse,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  userCircle: faUserCircle,
  cog: faCog,
  signOutAlt: faSignOutAlt,
  house: faHouse,
  map: faMap,
};

const UserDropdown = ({ version }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleOpen = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleHome = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    navigate("/home");
  };

  const handleHistory = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    navigate("/history");
  };

  const handleSettings = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    navigate("/settings");
  };

  const handleLogout = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="rounded-full focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleOpen}
        >
          <FontAwesomeIcon
            icon={icons.userCircle}
            className="h-9 w-9 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-1 w-56 origin-top-right scale-95 transform rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out"
        >
          <div
            className="flex flex-col gap-1 rounded bg-gray-200 p-2 font-semibold text-gray-800"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {version === "extended" && (
              <>
                <a
                  href="#"
                  className="group flex items-center gap-1 rounded p-2 hover:bg-neutral-300 hover:text-gray-900 focus:bg-neutral-300 focus:text-gray-900"
                  role="menuitem"
                  onClick={handleHome}
                >
                  <FontAwesomeIcon
                    icon={icons.house}
                    aria-hidden="true"
                    className="text-neutral-700 group-hover:text-neutral-800 group-focus:text-neutral-900"
                  />
                  Inicio
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-1 rounded p-2 hover:bg-neutral-300 hover:text-gray-900 focus:bg-neutral-300 focus:text-gray-900"
                  role="menuitem"
                  onClick={handleHistory}
                >
                  <FontAwesomeIcon
                    icon={icons.map}
                    aria-hidden="true"
                    className="text-neutral-700 group-hover:text-neutral-800 group-focus:text-neutral-900"
                  />
                  Historial
                </a>
              </>
            )}
            <a
              href="#"
              className="group flex items-center gap-1 rounded p-2 hover:bg-neutral-300 hover:text-gray-900 focus:bg-neutral-300 focus:text-gray-900"
              role="menuitem"
              onClick={handleSettings}
            >
              <FontAwesomeIcon
                icon={icons.cog}
                aria-hidden="true"
                className="text-neutral-700 group-hover:text-neutral-800 group-focus:text-neutral-900"
              />
              Ajustes
            </a>
            <a
              href="#"
              className="group flex items-center gap-1 rounded p-2 text-red-600 hover:bg-red-600 hover:text-neutral-200 focus:bg-red-700 focus:text-neutral-200"
              role="menuitem"
              onClick={handleLogout}
            >
              <FontAwesomeIcon
                icon={icons.signOutAlt}
                aria-hidden="true"
                className="text-red-600 group-hover:text-neutral-200 group-focus:text-neutral-200"
              />
              Cerrar sesión
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
