import NavBarPage from "../../components/navigation/navbarPage";
import Footer from "../../components/navigation/footer";
import Image from "next/image";
import landing from "../../public/img/Landing page.png";

export default function amafind() {
  return (
    <section>
      <div className="flex items-center flex-col relative mb-18">
        <h1 className="text-3xl py-5 font-gilroylight bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#007CF0] dark:to-[#6df8f3]">
          AmaFind
        </h1>
        <div className="rounded-xl py-32 md:py-24 w-full shadow-xl max-w-md md:max-w-2xl mx-auto"></div>
      </div>
    </section>
  );
}
