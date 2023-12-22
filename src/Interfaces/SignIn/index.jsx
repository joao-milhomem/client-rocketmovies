import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Interface, Form } from "./style";
import art from "../../assets/cover_signIn.jpg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useSeshContext } from "../../hooks/session";

export function SignIn() {
  const { signIn } = useSeshContext();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Interface>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <fieldset>
          <legend>Faça login:</legend>

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

          <Button title={"Entrar"} onClick={handleSignIn} />

          <Link to={"/register"}>Criar conta</Link>
        </fieldset>
      </Form>

      <div className="wallpaper">
        <img src={art} alt="Foto de uma sala de teatro" />
      </div>
    </Interface>
  );
}
