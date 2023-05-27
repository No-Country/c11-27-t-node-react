import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import Button from "../Button";

const ResetPassword = () => {
  return (
    <div>
      <Header />
      <div className="flex h-[82.7vh] items-center justify-center  gap-2 bg-[#FAFAFA] text-[#1E1E1E]">
        <div className="items-center justify-center rounded sm:flex sm:flex-row sm:gap-[32px] sm:p-[32px] lg:bg-[#ffff]">
          <div className="flex justify-center gap-2 sm:mt-[50px]">
            <img
              className="pl mb-[25px] h-[194px] w-[200px] sm:h-[287px] sm:w-[400px]"
              src="./src/assets/reset-password.svg"
              alt="resetpassword"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
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

            <Button label="Reiniciar contraseña" fullWidth />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
