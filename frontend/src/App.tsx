import { useCallback, useEffect, useState } from "react";
// import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import authContext from "./Components/Context/AuthContext";
import { tokenType, userInfosType } from "./Components/types/all.types";
import axios from "axios";
function App() {
  const router = useRoutes(routes);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<tokenType>(null);
  const [userInfos, setUserInfos] = useState<userInfosType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback(
    (userInfos: userInfosType | null, token: string) => {
      setToken(token);
      setUserInfos(userInfos);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify({ token }));
    },
    []
  );

  useEffect(() => {
    const localStorageData = localStorage.getItem("user");
    if (localStorageData) {
      const { token } = JSON.parse(localStorageData);
      setIsLoading(true);
      axios
        .get("http://localhost:4000/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserInfos(res.data);
          setIsLoggedIn(true);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("error fetching user infos: " + err);
          logOut();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const logOut = () => {
    setToken(null);
    setUserInfos(null);
    localStorage.removeItem("user");
  };
  return (
    <>
      <authContext.Provider
        value={{
          isLoggedIn,
          token,
          userInfos,
          login,
          logOut,
          isLoading,
        }}
      >
        <svg className="hidden">
          <symbol
            id="moon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </symbol>
          <symbol
            id="bag"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </symbol>
          <symbol
            id="user"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </symbol>
          <symbol
            id="search"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </symbol>
          <symbol
            id="hamburger"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </symbol>
          <symbol
            id="chevron-left"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </symbol>
          <symbol
            id="sun"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </symbol>
        </svg>
        {router}
      </authContext.Provider>
    </>
  );
}

export default App;
