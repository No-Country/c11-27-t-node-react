import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";
import ResetPasswordImage from "../assets/reset-password.svg";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import { useDispatch } from "react-redux";
import { resetUserPassword } from "../redux/slices/userSlice";

const ResetPassword = () => {
  const { accessToken } = useParams();
  const { userId } = useParams();

  localStorage.setItem("authToken", accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleResetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    dispatch(resetUserPassword({ userId, newPassword }))
      .unwrap()
      .then(() => {
        localStorage.removeItem("authToken");
        alert("Contraseña restablecida");
        navigate("/auth");
      })
      .catch(error => {
        if (error.message) {
          alert(error.message);
        }
      });
  };

  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
          <img
            src={ResetPasswordImage}
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
                value={newPassword}
                setValue={setNewPassword}
              />
              <Input
                placeholder="Confirmar nueva contraseña"
                type="password"
                leftIcon="key"
                rightIcon="eye"
                value={confirmNewPassword}
                setValue={setConfirmNewPassword}
              />
            </div>
            <Button
              label="Reiniciar contraseña"
              fullWidth
              onClick={handleResetPassword}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
