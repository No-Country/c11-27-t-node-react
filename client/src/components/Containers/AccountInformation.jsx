import React, { useState, useEffect } from "react";
import Input from "../Ui/Input";
import Button from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  updateUserData,
  deleteUser,
} from "../../redux/slices/userSlice";

const AccountInformation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const user = useSelector(state => state.user.user);
  const name = user ? user.name : "";
  const email = user ? user.email : "";

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleUpdateUserData = () => {
    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    dispatch(updateUserData({ name, email, password, newPassword }))
      .unwrap()
      .then(() => {
        alert("Datos actualizados correctamente");
      })
      .catch(error => {
        if (error.message) {
          alert(error.message);
        }
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
      <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 lg:shadow-md">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">Ajustes de la cuenta</div>
          </div>
          <div className="flex flex-col gap-2">
            <Input placeholder="Nombre" leftIcon="user" value={name} disabled />
            <Input
              placeholder="Correo electrónico"
              type="email"
              leftIcon="envelope"
              value={email}
              disabled
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
              value={confirmNewPassword}
              setValue={setConfirmNewPassword}
            />
          </div>
          <Button label="Guardar" fullWidth onClick={handleUpdateUserData} />
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
