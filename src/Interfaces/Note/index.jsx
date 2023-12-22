import { AiFillClockCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Component, Content, Actions } from "./style";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { useSeshContext } from "../../hooks/session";

export function Note() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSeshContext();
  const [note, setNote] = useState("");

  async function handleDeleteNote() {
    if (!confirm("Confirmar exclusão de nota:")) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      alert("Nota deletada com successo!");
      navigate("/");
    } catch (error) {
      console.error(console.error());
    }
  }

  function handleEditNote() {
    navigate(`/new?id=${id}`);
  }

  const avatarPreview = `${api.defaults.baseURL}/files/${user.avatar}`;

  useEffect(() => {
    (async function fetchNote() {
      await api
        .get(`notes/${id}`)
        .then(({ data }) => setNote(data))
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <Component>
      <Header />

      <Content>
        <Link to={"/"}>
          <AiOutlineArrowLeft />
          Voltar
        </Link>

        <div className="title-wrapper">
          <h1>{note.title}</h1>

          <div className="tags">
            <Rating rating={note.rating} />
          </div>
        </div>

        <div className="details">
          <div className="profile-pic">
            {user.avatar ? (
              <img src={avatarPreview} alt="Foto de perfil" />
            ) : (
              <AiOutlineUser size={64} />
            )}

            <span>Por {user.name}</span>
          </div>

          <div className="date">
            <AiFillClockCircle />
            <span>{note.created_at}</span>
          </div>
        </div>

        {note.tags && <Tags data={note.tags} />}

        <p>{note.description}</p>
      </Content>

      <Actions>
        <Button title={"Excluir"} onClick={handleDeleteNote} />
        <Button title={"Editar"} onClick={handleEditNote} />
      </Actions>
    </Component>
  );
}
