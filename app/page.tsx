import { SectionOne, SectionThree, SectionTwo } from "./components/pages/slash";
import Footer from "./components/pages/slash/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className=" w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] px-7 py-5 ">
        <Footer />
      </div>
    </div>
  );
}
