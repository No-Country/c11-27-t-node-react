import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";
import CheckMail from "../../assets/check-mail.svg";

const CheckEmail = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
          <img src={CheckMail} alt="Sign Up" className="h-24 lg:h-96" />
          <div className="flex flex-col justify-center gap-8 text-center">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">
                Revisa tu correo electrónico
              </div>
              <div className="text-sm font-semibold text-neutral-800">
                Te hemos enviado las instrucciones para recuperar la contraseña
                a tu correo electrónico.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-semibold">
                ¿No has recibido el correo electrónico? Comprueba tu buzón de
                correo no deseado o
              </div>
              <Button
                label="prueba con otra dirección de correo
              electrónico"
                variant="text"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckEmail;
