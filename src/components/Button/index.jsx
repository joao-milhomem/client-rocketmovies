import { Component } from "./styled";

export function Button({ title, ...rest }) {
  return (
    <Component type="button" {...rest}>
      {title}
    </Component>
  );
}
