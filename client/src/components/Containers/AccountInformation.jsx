import React from "react";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";

const AccountInformation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Ajustes de la cuenta</div>
          </div>
          <div className="flex flex-col gap-2">
            <Input placeholder="Nombre" leftIcon="user" />
            <Input
              placeholder="Correo electrónico"
              type="email"
              leftIcon="envelope"
            />
            <Input
              placeholder="Contraseña antigua"
              type="password"
              leftIcon="key"
              rightIcon="eye"
            />
            <Input
              placeholder="Nueva contraseña"
              type="password"
              leftIcon="key"
              rightIcon="eye"
            />
            <Input
              placeholder="Confirmar nueva contraseña"
              type="password"
              leftIcon="key"
              rightIcon="eye"
            />
          </div>
          <Button label="Guardar" fullWidth />
          <div className="flex items-center justify-center text-sm font-semibold">
            <Button
              label="Eliminar cuenta"
              variant="text"
              iconPosition="left"
              iconName="trashCan"
              color="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;