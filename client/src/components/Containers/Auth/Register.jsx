import React, { useState } from "react";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";
import SignUp from "../../../assets/sign-up.svg";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/slices/userSlice";

const Register = ({ setAuthState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    dispatch(registerUser({ name, email, password }))
      .unwrap()
      .then(() => {
        alert("Registrado correctamente");
        setAuthState("login");
      })
      .catch(error => {
        if (error.message) {
          alert(error.message);
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 lg:shadow-md">
        <img src={SignUp} alt="Sign Up Image" className="h-24 lg:h-96" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Crea tu cuenta ahora</div>
            <div className="text-sm font-semibold text-neutral-800">
              ¡Regístrate para comenzar a planificar tus viajes!
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Nombre"
              leftIcon="user"
              value={name}
              setValue={setName}
            />
            <Input
              placeholder="Correo electrónico"
              type="email"
              leftIcon="envelope"
              value={email}
              setValue={setEmail}
            />
            <Input
              placeholder="Contraseña"
              type="password"
              leftIcon="key"
              rightIcon="eye"
              value={password}
              setValue={setPassword}
            />
            <Input
              placeholder="Confirmar contraseña"
              type="password"
              leftIcon="key"
              rightIcon="eye"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </div>
          <Button label="Continuar" fullWidth onClick={handleRegister} />
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <div>¿Ya tienes una cuenta?</div>
            <Button
              label="Inicia sesión"
              variant="text"
              onClick={() => setAuthState("login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
