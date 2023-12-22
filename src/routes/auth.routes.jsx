import { Route, Routes } from "react-router-dom";
import { SignUp } from "../Interfaces/SignUp";
import { SignIn } from "../Interfaces/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
