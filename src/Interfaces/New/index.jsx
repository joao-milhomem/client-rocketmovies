import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Form, Interface, Bookmarks } from "./style";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Bookmark } from "../../components/Bookmark";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function New() {
  const [note, setNote] = useState({});

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTags() {
    if (!newTag) {
      return alert("Marcador vazio!");
    }

    setTags((prev) => [...prev, newTag]);
    setNewTag("");
  }

  function handleRemoveTags(target) {
    setTags(tags.filter((tag) => tag != target));
  }

  function submitNote() {
    if (!title || !description || !rating) {
      return alert("Preencha os campos necessários");
    }

    if (rating < 0 || rating > 5) {
      return alert('Nota entre 0 a 5 somente.')
    }

    if (newTag) {
      return alert("Submeta os marcadores ou apague-os.");
    }

    const newNote = {
      title,
      description,
      rating: Number(rating),
      tags,
    };

    if (note.id) {
      try {
        api.put(`/notes/${note.id}`, newNote);
        alert("Nota atualizada com sucesso!");
        return navigate("/");
      } catch (error) {
        return console.error(error);
      }
    } else {
      try {
        api.post("/notes", newNote);
        alert("Nota criada com sucesso");
        return navigate("/");
      } catch (error) {
        return console.error(error);
      }
    }
  }

  function handleCleanNote() {
    setTitle("");
    setRating("");
    setDescription("");
    setTags([]);
  }

  function handleBack() {
    if (confirm("As informações serão perdidas.")) {
      return navigate(-1);
    }
  }

  useEffect(() => {
    const [, id] = window.location.search.split("=");

    if (id) {
      (async function fetchNote() {
        const { data } = await api.get(`/notes/${id}`);

        setNote(data);

        setTitle(data.title);
        setRating(data.rating);
        setDescription(data.description);
        setTags(data.tags.map((tag) => tag.name));
      })();
    }
  }, []);

  return (
    <Interface>
      <Header />

      <Form action="" id="note-form">
        <Link onClick={handleBack}>
          <AiOutlineArrowLeft /> Voltar
        </Link>

        <fieldset>
          <legend>Novo filme</legend>

          <div className="flex">
            <Input
              type="text"
              placeholder="Título do filme"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <Input
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </div>

          <textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <Bookmarks>
            <label>Marcadores</label>

            <div className="container">
              <Bookmark
                $isNew
                placeholder="Novo Marcador"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTags}
                value={newTag}
              />

              {tags &&
                tags.map((tag, i) => (
                  <Bookmark
                    key={i}
                    value={tag}
                    onClick={() => handleRemoveTags(tag)}
                  />
                ))}
            </div>
          </Bookmarks>

          <div className="flex-btn">
            <Button title={"Limpar nota"} onClick={handleCleanNote} />
            <Button title={"Salvar"} onClick={submitNote} />
          </div>
        </fieldset>
      </Form>
    </Interface>
  );
}
