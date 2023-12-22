import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useSeshContext } from "../hooks/session";

export function Routes() {
  const { user } = useSeshContext();
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
