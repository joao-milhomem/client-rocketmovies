import { Rating } from "../Rating";
import { Tags } from "../Tags";
import { Component } from "./style";

export function NoteItem({ data, ...rest }) {
  return (
    <Component {...rest} to={`/note/${data.id}`}>
      <h2>{data.title}</h2>

      <div className="rating">
        <Rating rating={data.rating} />
      </div>

      <p>{data.description}</p>

      {data.tags && <Tags data={data.tags} />}
    </Component>
  );
}
