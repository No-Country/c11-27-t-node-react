import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/tourist-route.svg";
import UserDropdown from "./UserDropdown";
import Button from "./Button";

const Header = ({ pageType }) => {
  const location = useLocation();

  const isActive = path => {
    return location.pathname === path;
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  if (pageType === "auth") {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-start bg-neutral-50 p-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Tourist Route Logo"
            className="h-8 w-auto sm:h-10"
          />
          <h1 className="text-2xl font-bold text-neutral-900">Tourist Route</h1>
        </Link>
      </header>
    );
  } else if (pageType === "loggedin") {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between bg-neutral-50 p-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Tourist Route Logo"
              className="h-8 w-auto sm:h-10"
            />
            <h1 className="text-2xl font-bold text-neutral-900">
              Tourist Route
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="text-lg font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                to="/home"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                to="/history"
              >
                Historial
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <UserDropdown version="extended" />
        </div>
        <div className="hidden lg:block">
          <UserDropdown />
        </div>
      </header>
    );
  } else {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between bg-neutral-50 p-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Tourist Route Logo"
              className="h-8 w-auto sm:h-10"
            />
            <h1 className="text-2xl font-bold text-neutral-900">
              Tourist Route
            </h1>
          </Link>
        </div>
        <div className={`lg:hidden ${isOpen ? "hidden" : "block"}`}>
          <Button iconOnly iconName="bars" onClick={handleMenuToggle} />
        </div>
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <Button iconOnly iconName="xmark" onClick={handleMenuToggle} />
        </div>
        <div
          className={`absolute left-0 top-full w-full overflow-auto bg-neutral-50 ${
            isOpen ? "block" : "hidden"
          } z-40 lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-2 bg-neutral-50 py-4">
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#features"
              >
                Características
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#testimonials"
              >
                Testimonios
              </a>
            </li>
            <li>
              <Link to="/home">
                <Button label="Comenzar" />
              </Link>
            </li>
          </ul>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#features"
              >
                Características
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#testimonials"
              >
                Testimonios
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Link to="/home">
            <Button label="Comenzar" />
          </Link>
        </div>
      </header>
    );
  }
};

export default Header;
