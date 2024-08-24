import { user } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../context";

function useAuth(formDetails: user) {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const usersString = localStorage.getItem("users");
  const setCurrentUser = useContext(CurrentUserContext)?.setcurrentUser;
  const [users, setUsers] = useState<user[]>(
    usersString ? JSON.parse(usersString) : []
  );
  const router = useRouter();
  function sighup() {
    if (formDetails.name.length < 3) {
      console.log("name is not less than 3");
      return;
    }
    if (!emailRegex.test(formDetails.email)) {
      console.log("Email contains @");
      return;
    }
    if (formDetails.password.length < 6) {
      console.log("password atleast 6 char");
      return;
    }
    const isUserExists = users.filter(
      (user) => user.email === formDetails.email
    );
    console.log(users);

    if (isUserExists.length === 0) {
      setUsers((prev) => {
        const allNewUsers = [...prev, formDetails];
        localStorage.setItem("users", JSON.stringify(allNewUsers));
        localStorage.setItem("currentUser", JSON.stringify(formDetails));
        setCurrentUser && setCurrentUser(formDetails);
        return allNewUsers;
      });
      router.push("/home");
    } else {
      console.log("Email already exists");
    }
  }
  function login() {
    if (!emailRegex.test(formDetails.email)) {
      console.log("Email contains @");
      return;
    }
    if (formDetails.password.length < 6) {
      console.log("password atleast 6 char");
      return;
    }
    const isUserExists = users.filter(
      (user) =>
        user.email === formDetails.email &&
        user.password === formDetails.password
    );
    if (isUserExists.length === 0) {
      console.log("Email or Password is incorrect");
    } else {
      setCurrentUser && setCurrentUser(isUserExists[0]);
      console.log("login successfull");
    }
  }
  function logout() {}

  return { sighup, login, logout };
}
export default useAuth;
