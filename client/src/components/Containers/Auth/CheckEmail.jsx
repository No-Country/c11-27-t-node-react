import React, { useState } from "react";
import Button from "../../Ui/Button";
import CheckMail from "../../../assets/check-mail.svg";

const CheckEmail = ({ setAuthState }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 lg:shadow-md">
        <img src={CheckMail} alt="Check Email Image" className="h-24 lg:h-96" />
        <div className="flex flex-col justify-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">
              Revisa tu correo electrónico
            </div>
            <div className="text-sm font-semibold text-neutral-800">
              Te hemos enviado las instrucciones para recuperar la contraseña a
              tu correo electrónico.
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
              onClick={() => setAuthState("recover-password")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
