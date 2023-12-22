import { Component } from "./style";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export function Bookmark({ $isNew, onClick, ...rest }) {
  return (
    <Component $isNew={$isNew}>
      <input type="text" {...rest} disabled={!$isNew} />

      <button type="button" onClick={onClick}>
        {$isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
      </button>
    </Component>
  );
}
