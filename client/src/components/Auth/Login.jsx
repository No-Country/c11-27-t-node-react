import React from "react";
import mainImg from "../imgs/log-in-Image.svg";
import logo from "../imgs/Logo.svg";
import { Link } from "react-router-dom";
import Input from "../components/input";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="screen-container bg-[#FAFAFA] px-[16px] font-sans md:h-[95vh] md:scroll-m-0 ">
        <header className="mb-[15px] flex gap-x-2 py-[9.5px] text-2xl font-bold">
          <img src={logo} alt="app-logo" />
          <h1>Tourist Route</h1>
        </header>
        <div className="md:mt-[145.5px] md:flex md:content-center md:justify-center">
          <div className="mb-[32px] flex justify-center">
            <img
              src={mainImg}
              alt="main Image"
              className="md:h-[240px] md:w-[400px]"
            />
          </div>
          <section>
            <h2 className="p-{10px} mb-[8px] text-xl font-bold">
              Bienvenido de vuelta
            </h2>
            <p className="mb-[32px] text-xs font-semibold">
              ¡Planifiquemos tu proximo viaje!
            </p>
            <form className="mb-[32px] flex flex-col gap-1">
              <Input
                type="email"
                placeholder="Correo electrónico"
                leftIcon="envelope"
                value={email}
                setValue={setEmail}
              />
              <Input
                type="password"
                placeholder="Contraseña"
                leftIcon="key"
                rightIcon="eye"
                value={password}
                setValue={setPassword}
              />
              <div className="mb-[32px] flex justify-end">
                <Link className="text-xs font-bold text-green-400 hover:text-[#16A34A] focus:text-[#22C55E]">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <button className="rounded bg-[#4ADE80] py-2 text-base font-semibold text-white hover:bg-[#16A34A] focus:bg-[#22C55E]">
                Iniciar sesión
              </button>
            </form>
            <div className="mb-[18px] flex justify-center gap-1">
              <p className="text-xs font-semibold">¿No tienes una cuenta?</p>
              <Link className="text-xs font-semibold text-green-400 hover:text-[#16A34A] focus:text-[#22C55E]">
                Registrate ahora
              </Link>
            </div>
          </section>
        </div>
      </div>
      <footer className="flex justify-center bg-[#E5E5E5] px-[42px] py-[8px] font-sans md:h-[5vh]">
        <p className="text-xs font-normal">
          © 2023 Tourist Route. All rights reserved.
        </p>
      </footer>
    </>
  );
};
