import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/tourist-route.svg";
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
      <header className="sticky top-0 z-50 flex items-center justify-start bg-neutral-50 p-4">
        <img
          src={Logo}
          alt="Tourist Route Logo"
          className="h-8 w-auto sm:h-10"
        />
        <h1 className="text-2xl font-bold text-neutral-900">Tourist Route</h1>
      </header>
    );
  } else if (pageType === "loggedin") {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between bg-neutral-50 p-4">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Tourist Route Logo"
            className="h-8 w-auto sm:h-10"
          />
          <h1 className="text-2xl font-bold text-neutral-900">Tourist Route</h1>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="text-lg font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-lg font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Historial
              </a>
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
      <header className="sticky top-0 z-50 flex items-center justify-between bg-neutral-50 p-4">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Tourist Route Logo"
            className="h-8 w-auto sm:h-10"
          />
          <h1 className="text-2xl font-bold text-neutral-900">Tourist Route</h1>
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
                href="#"
              >
                ¿Cómo funciona?
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Contacto
              </a>
            </li>
            <li>
              <Button label="Comenzar" />
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
                href="#"
              >
                ¿Cómo funciona?
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-neutral-900 hover:text-green-400 focus:text-green-600"
                href="#"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Button label="Comenzar" />
        </div>
      </header>
    );
  }
};

export default Header;
