import { Route, Routes } from "react-router-dom";
import { Home } from "../Interfaces/Home";
import { Note } from "../Interfaces/Note";
import { Profile } from "../Interfaces/Profile";
import { New } from "../Interfaces/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/note/:id" element={<Note />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
