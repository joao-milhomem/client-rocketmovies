import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Interface, Notes, Section } from "./style";

import { Header } from "../../components/Header";
import { NoteItem } from "../../components/NoteItem";

import { api } from "../../services/api";


export function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    (async function fetchNotes() {
      await api
        .get(`/notes?title=${title}`)
        .then(({ data }) => setNotes(data))
        .catch((err) => console.error(err));
    })();
  }, [title]);

  return (
    <Interface>
      <Header onchange={(e) => setTitle(e.target.value)} />

      <Section>
        <div className="flex">
          <h1>Meus filmes</h1>

          <Link to={"/new"}>
            <AiOutlinePlus />
            Adicionar Filme
          </Link>
        </div>
      </Section>

      <Notes>
        {notes.map((note) => (
          <NoteItem key={note.id} data={note} />
        ))}
      </Notes>
    </Interface>
  );
}
