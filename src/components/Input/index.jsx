import { Component } from "./style";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Component>
      {Icon && <Icon size={20} />}

      <input type="text" {...rest} />
    </Component>
  );
}
