import { Component } from "./style";

export function Tags({ data = [] }) {
  return (
    <Component>
      {data && data.map((tag) => <span key={tag.id}>{tag.name}</span>)}
    </Component>
  );
}
