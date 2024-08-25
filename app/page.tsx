import { SectionOne, SectionThree, SectionTwo } from "./components/pages/slash";
import Footer from "./components/core/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className=" w-full bg-white">
      <ToastContainer />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className=" w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] px-7 py-5 ">
        <Footer />
      </div>
    </div>
  );
}
