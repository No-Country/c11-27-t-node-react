import React from "react";
import Button from "../Button";
import Input from "../Input";
import Header from "../Header";
import Footer from "../Footer";

const RecoverPassword = () => {
  return (
    <div>
      <Header />
      <div className="flex h-[82.7vh] items-center justify-center  gap-2 bg-[#FAFAFA] text-[#1E1E1E]">
        <div className="items-center justify-center rounded sm:flex sm:flex-row sm:gap-[32px] sm:p-[32px] lg:bg-[#ffff]">
          <div className="flex justify-center gap-2 sm:mt-[50px]">
            <img
              className="pl mb-[25px] h-[194px] w-[200px] sm:h-[287px] sm:w-[400px]"
              src="./src/assets/forgot-password.svg"
              alt="forgotPassword"
            />
          </div>
          <div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="mb-[10px] mt-[20px] font-sans text-xl font-bold leading-[24.2px]">
                ¿Olvidastes tu contraseña?
              </h1>
              <p className="mb-[35px] font-sans text-xs font-semibold leading-[14.52px]">
                ¡No te preocupes!, te enviaremos las instrucciones para
                restablecerla.
              </p>
            </div>

            <div className="mb-[8px]">
              <Input placeholder="Correo Electrónico" leftIcon="envelope" />
            </div>

            <Button label="Restablecer contraseña" fullWidth />
            <div className="mb-[35px] mt-[20px] flex flex-row items-center justify-center gap-2 space-x-4 font-sans text-xs font-semibold leading-[14.52px]">
              <Button iconOnly onClick="arrowLeft" />
              <h3>Volver al inicio de sesión</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecoverPassword;
