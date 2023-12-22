import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { Component, Profile } from "./style";
import { Input } from "../Input";

import { useSeshContext } from "../../hooks/session";
import { api } from "../../services/api";

export function Header({ onchange }) {
  const navigate = useNavigate();
  const { signOut, user } = useSeshContext();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Component>
      <div className="container">
        <Link to={"/"}>RocketMovies</Link>

        <Input
          icon={AiOutlineSearch}
          placeholder="Pesquisar pelo título"
          onChange={onchange}
        />

        <Profile>
          <div className="text-wrapper">
            <strong>{user.name}</strong>

            <Link to={"/"} onClick={handleSignOut}>
              Sair
            </Link>
          </div>

          <Link to={"/profile"}>
            {user.avatar ? (
              <img
                src={api.defaults.baseURL + "/files/" + user.avatar}
                alt="Foto de perfil"
              />
            ) : (
              <AiOutlineUser size={64} />
            )}
          </Link>
        </Profile>
      </div>
    </Component>
  );
}
