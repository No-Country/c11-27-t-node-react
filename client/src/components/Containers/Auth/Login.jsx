import React, { useState } from "react";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";
import LogIn from "../../../assets/log-in.svg";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
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
        <img src={LogIn} alt="Log In Image" className="h-24 lg:h-96" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Bienvenido de vuelta</div>
            <div className="text-sm font-semibold text-neutral-800">
              ¡Planifiquemos tu proximo viaje!
            </div>
          </div>
          <div className="flex flex-col gap-2">
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
            <div className="flex items-center justify-end">
              <Button
                label="¿Olvidaste tu contraseña?"
                variant="text"
                onClick={() => setAuthState("recover-password")}
              />
            </div>
          </div>
          <Button label="Iniciar sesión" fullWidth onClick={handleLogin} />
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <div>¿No tienes una cuenta?</div>
            <Button
              label="Regístrate ahora"
              variant="text"
              onClick={() => setAuthState("register")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
