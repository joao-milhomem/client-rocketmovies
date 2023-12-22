import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const SeshContext = createContext();

function SeshProvider({ children }) {
  const [context, setContext] = useState({});

  async function signIn({ email, password }) {
    try {
      const { data } = await api.post("/session", { email, password });

      setContext({
        user: data.user,
        token: data.token,
      });

      localStorage.setItem("@rocketmovies:user", JSON.stringify(data.user));
      localStorage.setItem("@rocketmovies:token", data.token);

      api.defaults.headers.common["Authorization"] = "Bearer " + data.token;
    } catch (error) {
      const response = error.response.data.error;
      if (response) {
        return alert(response);
      } else return alert("Houve um erro inesperado");
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
    setContext({});
  }

  async function updateProfile({ updatedUser, avatarFile }) {
    try {
      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);
        const { data } = await api.patch("/users/avatar", formData);
        updatedUser.avatar = data.avatar;
      }
      const { data } = await api.put("/users", updatedUser);
      setContext({ user: updatedUser, token: context.token });
      localStorage.setItem("@rocketmovies:user", JSON.stringify(updatedUser));
      alert(data);
      return 1;
    } catch (error) {
      const message = error.response.data.error;
      if (message) {
        alert(message);
      } else alert("Houve um erro inesperado");

      return 0;
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = localStorage.getItem("@rocketmovies:token");

    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    setContext({ user, token });
  }, []);

  return (
    <SeshContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: context.user,
        token: context.token,
      }}
    >
      {children}
    </SeshContext.Provider>
  );
}

function useSeshContext() {
  const data = useContext(SeshContext);
  return data;
}

export { SeshContext, SeshProvider, useSeshContext };
