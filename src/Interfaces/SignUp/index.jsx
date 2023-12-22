import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import { Interface, Form } from "./style";
import art from "../../assets/cover_signIn.jpg";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      const response = error.response.data.error;

      if (response) {
        return alert(response);
      }

      return alert("Houve um erro inesperado.");
    }
  };

  return (
    <Interface>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <fieldset>
          <legend>Faça seu cadastro:</legend>

          <Input
            icon={AiOutlineUser}
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Seu email"
            icon={AiOutlineMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Sua senha"
            icon={AiOutlineLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title={"Cadastrar"} onClick={handleSignUp} />

          <Link to={"/"}>Já tenho uma conta</Link>
        </fieldset>
      </Form>

      <div className="wallpaper">
        <img src={art} alt="Foto de uma sala de teatro" />
      </div>
    </Interface>
  );
}
