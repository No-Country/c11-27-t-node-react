import React from "react";
import Button from "../Button";
import Input from "../Input";
import Header from "../Header";
import Footer from "../Footer";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="flex h-[82.7vh] items-center justify-center  gap-2 bg-[#FAFAFA] text-[#1E1E1E]">
        <div className="items-center justify-center rounded sm:flex sm:flex-row sm:gap-[32px] sm:p-[32px] lg:bg-[#ffff]">
          <div className="flex justify-center gap-2 sm:mt-[50px]">
            <img
              className="pl h-[77px] w-[100px] sm:h-[287px] sm:w-[400px]"
              src="./src/assets/sign-up.svg"
              alt="signup"
            />
          </div>
          <div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="mb-[10px] mt-[20px] font-sans text-xl font-bold leading-[24.2px]">
                Crea tu cuenta ahora{" "}
              </h1>
              <p className="mb-[35px] font-sans text-xs font-semibold leading-[14.52px]">
                ¡Registrate para crear tu itinerario de viaje!
              </p>
            </div>
            <div className="mb-[8px]">
              <Input placeholder="Nombre" leftIcon="user" />
            </div>
            <div className="mb-[8px]">
              <Input placeholder="Correo Electrónico" leftIcon="envelope" />
            </div>
            <div className="mb-[8px]">
              <Input placeholder="Contraseña" leftIcon="key" rightIcon="eye" />
            </div>
            <div className="mb-[8px]">
              <Input
                placeholder="Repetir contraseña"
                leftIcon="key"
                rightIcon="eye"
              />
            </div>

            <Button label="Continuar" fullWidth />
            <div className="mb-[35px] mt-[20px] flex flex-row items-center justify-center gap-2 space-x-4 font-sans text-xs font-semibold leading-[14.52px]">
              <h3>¿Ya tienes cuenta?</h3>
              <button className="rounded text-[#4ADE80]">Inicia sesión</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
