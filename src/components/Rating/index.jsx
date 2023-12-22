import { Component } from "./styled";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Rating({ rating }) {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    index < rating ? stars.push(AiFillStar) : stars.push(AiOutlineStar);
  }
  return (
    <Component>
      {stars && stars.map((Star, index) => <Star size={20} key={index} />)}
    </Component>
  );
}
