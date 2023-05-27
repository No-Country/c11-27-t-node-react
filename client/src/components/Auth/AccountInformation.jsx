import React from "react";
import Input from "../Input";
import Button from "../Button";
import UserDropdown from "../UserDropdown";
import InputTags from "../InputTags";

const AccountInformation = () => {
  return (
    <div className="flex min-h-[568px] min-w-[320px] items-center justify-center  gap-2 bg-[#FAFAFA] text-[#1E1E1E]">
      <div className="mt-[5px] items-center justify-center rounded sm:flex sm:flex-row sm:gap-[32px] sm:p-[32px] lg:bg-[#ffff]">
        <div>
          <div className="flex justify-center gap-2 sm:mt-[50px]">
            <h1 className="mb-[40px] mt-[50px] font-sans text-xl font-bold leading-[24.2px]">
              Ajustes de la cuenta
            </h1>
          </div>
          <div className="mb-[8px]">
            <Input placeholder="Nombre" leftIcon="user" />
          </div>
          <div className="mb-[8px]">
            <Input placeholder="Correo Electrónico" leftIcon="envelope" />
          </div>
          <div className="mb-[8px]">
            <Input
              placeholder="Contraseña antigua"
              leftIcon="key"
              rightIcon="eye"
            />
          </div>
          <div className="mb-[8px]">
            <Input
              placeholder="Nueva contraseña"
              leftIcon="key"
              rightIcon="eye"
            />
          </div>
          <div className="mb-[8px]">
            <Input
              placeholder="Confirmar nueva contraseña"
              leftIcon="key"
              rightIcon="eye"
            />
          </div>

          <Button label="Guardar" fullWidth />

          <div className="mb-[35px] mt-[40px] flex flex-row items-center justify-center gap-2 space-x-4 font-sans text-xs font-semibold leading-[14.52px]">
            <div className="flex space-x-2">
              <img className="h-4 w-5 " src="./trash-icon.svg" alt="trash" />
              <button className="mt-[2px] flex items-start justify-start rounded text-[#EF4444]">
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
