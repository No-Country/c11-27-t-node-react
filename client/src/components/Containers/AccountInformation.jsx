import React, { useState } from "react";
import Input from "../Ui/Input";
import Button from "../Ui/Button";
import { deleteUser } from "../../redux/slices/userSlice";

const AccountInformation = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (newPassword !== newPassword2) {
      alert("Las contraseñas no coinciden");
    }

    dispatch(updateUserData({ name, email, password }))
      .then(() => {
        alert("actualización exitosa!");
      })
      .catch(error => {
        console.error("update failed:", error);
      });
  };

  const handleDelete = () => {
    dispatch(deleteUser({ email, password }))
      .then(() => {
        navigate("/landing");
      })
      .catch(error => {
        console.error("Operation failed:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Ajustes de la cuenta</div>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Nombre"
              leftIcon="user"
              // value={name}
            />
            <Input
              placeholder="Correo electrónico"
              type="email"
              leftIcon="envelope"
              // value={email}
            />
            <Input
              placeholder="Contraseña antigua"
              type="password"
              leftIcon="key"
              rightIcon="eye"
              value={password}
              setValue={setPassword}
            />
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
              value={newPassword}
              setValue={setNewPassword2}
            />
          </div>
          <Button label="Guardar" fullWidth onClick={handleSubmit} />
          <div className="flex items-center justify-center text-sm font-semibold">
            <Button
              label="Eliminar cuenta"
              variant="text"
              iconPosition="left"
              iconName="trashCan"
              color="red"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
