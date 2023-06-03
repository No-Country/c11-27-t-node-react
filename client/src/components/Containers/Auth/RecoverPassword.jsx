import React from "react";
import Header from "../../Ui/Header";
import Footer from "../../Ui/Footer";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";
import ForgotPassword from "../../../assets/forgot-password.svg";

const Register = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
          <img
            src={ForgotPassword}
            alt="Recover Password Image"
            className="h-24 lg:h-96"
          />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">¿Olvidaste tu contraseña?</div>
              <div className="text-sm font-semibold text-neutral-800">
                No te preocupes, te enviaremos las instrucciones para
                restablecerla.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Correo electrónico"
                type="email"
                leftIcon="envelope"
              />
            </div>
            <Button label="Restablecer contraseña" fullWidth />
            <div className="flex items-center justify-center text-sm font-semibold">
              <Button
                label="Volver al inicio de sesión"
                variant="text"
                iconPosition="left"
                iconName="arrowLeft"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
