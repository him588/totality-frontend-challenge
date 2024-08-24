import { user } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error("name is not less than 3", {
        position: "top-center",
      });
      return;
    }
    if (!emailRegex.test(formDetails.email)) {
      toast.error("Email contains @", { position: "top-center" });
      return;
    }
    if (formDetails.password.length < 6) {
      toast.error("password atleast 6 char", { position: "top-center" });
      return;
    }
    const isUserExists = users.filter(
      (user) => user.email === formDetails.email
    );

    if (isUserExists.length === 0) {
      setUsers((prev) => {
        const allNewUsers = [...prev, formDetails];
        localStorage.setItem("users", JSON.stringify(allNewUsers));
        localStorage.setItem("currentUser", JSON.stringify(formDetails));
        setCurrentUser && setCurrentUser(formDetails);
        return allNewUsers;
      });
      toast.success("User registered Successfully", { position: "top-center" });
    } else {
      toast.error("Email already exists", { position: "top-center" });
      return;
    }
  }
  function login() {
    if (!emailRegex.test(formDetails.email)) {
      toast.error("Email contains @", { position: "top-center" });

      return;
    }
    if (formDetails.password.length < 6) {
      toast.error("password atleast 6 char", { position: "top-center" });

      return;
    }
    const isUserExists = users.filter(
      (user) =>
        user.email === formDetails.email &&
        user.password === formDetails.password
    );
    if (isUserExists.length === 0) {
      toast.error("Email or Password is incorrect", { position: "top-center" });
    } else {
      setCurrentUser && setCurrentUser(isUserExists[0]);
      toast.success("login successfull", { position: "top-center" });
    }
  }
  function logout() {}

  return { sighup, login, logout };
}
export default useAuth;
