import { Interface, Form } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineCamera,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";

import { useSeshContext } from "../../hooks/session";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useSeshContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [newPassword, setNewPassword] = useState();
  const [currentPassword, setCurrentPassword] = useState();

  const avatarPreview = `${api.defaults.baseURL}/files/${user.avatar}`;
  const [avatar, setAvatar] = useState(user.avatar ? avatarPreview : "");
  const [avatarFile, setAvatarFile] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    const updatedUser = {
      ...user,
      name,
      email,
      newPassword,
      currentPassword,
    };

    updateProfile({ updatedUser, avatarFile })
      .then((success) => (success ? navigate("/") : ""))
      .catch();
  }

  function handleAvatar(e) {
    const file = e.target.files[0];

    setAvatarFile(file);
    setAvatar(URL.createObjectURL(file));
  }

  return (
    <Interface>
      <header>
        <Link to={"/"}>
          <AiOutlineArrowLeft size={20} />
          Voltar
        </Link>
      </header>

      <Form action="" id="profile-form">
        <div className="profile-pic">
          {avatar ? (
            <img src={avatar} alt="Foto de perfil" />
          ) : (
            <AiOutlineUser size={150} />
          )}

          <label htmlFor="pic">
            <AiOutlineCamera size={20} />
          </label>
          <input type="file" id="pic" onChange={handleAvatar} />
        </div>

        <Input
          icon={AiOutlineUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          icon={AiOutlineMail}
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-wrapper">
          <Input
            icon={AiOutlineLock}
            type="password"
            placeholder="Sua senha"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <Input
            icon={AiOutlineLock}
            type="password"
            placeholder="Nova senha"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <Button title={"Salvar"} onClick={handleSubmit} />
      </Form>
    </Interface>
  );
}
