import React from "react";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";
import ResetPassword from "../../../assets/reset-password.svg";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
        <img
          src={ResetPassword}
          alt="Reset Password Image"
          className="h-24 lg:h-96"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Reiniciar contraseña</div>
          </div>
          <div className="flex flex-col gap-2">
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
          <Button label="Reiniciar contraseña" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Register;
