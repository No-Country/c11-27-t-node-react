import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import Button from "../Button";
import SignUp from "../../assets/sign-up.svg";

const Register = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
          <img src={SignUp} alt="Sign Up" className="h-24 lg:h-96" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Crea tu cuenta ahora</div>
              <div className="text-sm font-semibold text-neutral-800">
                ¡Regístrate para comenzar a planificar tus viajes!
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Input placeholder="Nombre" leftIcon="user" />
              <Input
                placeholder="Correo electrónico"
                type="email"
                leftIcon="envelope"
              />
              <Input
                placeholder="Contraseña"
                type="password"
                leftIcon="key"
                rightIcon="eye"
              />
              <Input
                placeholder="Confirmar contraseña"
                type="password"
                leftIcon="key"
                rightIcon="eye"
              />
            </div>
            <Button label="Continuar" fullWidth />
            <div className="flex items-center justify-center text-sm font-semibold">
              <div>¿Ya tienes una cuenta?</div>
              <Button label="Inicia sesión" variant="text" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
