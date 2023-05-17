import React from "react";
import Logo from "./icons/Logo";
import CheckEmail from "./icons/CkeckEmail";

const Email = () => {
  return (
    <div className="align-center sw-full border-color:#a0aec0 mx-auto flex min-h-full max-w-sm  flex-col content-center items-center  justify-center  p-5">
      <div className="h-15 flex w-80 flex-row justify-start gap-2">
        <Logo />
        <h1 className="mt-2 font-sans text-2xl font-bold">Tourist Route</h1>
      </div>
      <main className="align-center flex flex-col content-center items-center justify-center self-center">
        <CheckEmail />
        <div className="align-center flex flex-col content-center items-center justify-center self-center">
          <h2 className="text-center font-sans text-base font-bold">
            Revisa tu correo electronico
          </h2>
          <p className="my-3 text-center font-sans text-xs font-medium">
            Te hemos enviado las instrucciones para recuperar la contraseña a tu
            correo electronico
          </p>
        </div>
        <div className="mt-5 text-center font-sans text-xs font-medium">
          <p>¿No haz recibido el correo electrónico?</p>
          <p>
            Comprueba tu buzón de correo no deseado o <br />
            <em className="not-italic text-[#4ADE80]">
              prueba con otra dirección de correo electrónico
            </em>{" "}
          </p>
          <h3></h3>
        </div>
      </main>

      {/* <footer>
        <span className=" bg-[#404040]">&#169; All rigths reserved</span>
      </footer> */}
    </div>
  );
};

export default Email;
