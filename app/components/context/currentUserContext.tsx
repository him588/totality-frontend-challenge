"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { user } from "@/types";
type state = {
  currentUser?: user | null;
  setcurrentUser?: React.Dispatch<React.SetStateAction<user | null>>;
};
const CurrentUserContext = createContext<state | null>(null);

function CurrentUserContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setcurrentUser] = useState<user | null>(null);
  const [loding, setloding] = useState(true);

  useEffect(() => {
    const currentUserString = localStorage.getItem("currentUser");

    const currentUserParse: user | null = currentUserString
      ? JSON.parse(currentUserString)
      : null;

    if (currentUserParse) {
      setcurrentUser(currentUserParse);
    }
    setloding(false);
  }, []);

  if (loding) {
    return <>loding</>;
  }
  // console.log(currentUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setcurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
export { CurrentUserContext, CurrentUserContextProvider };
