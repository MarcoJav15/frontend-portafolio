import Banner from "./components/Banner";
import Menu from "./components/Menu";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Social from "./components/Social";
import { parsedEnv } from "../../env";
import axios from "axios";
import Interests from "./components/Interests";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
      <Banner />
        <About/>
        <Menu/>
        <ProjectSection/>
        <Interests />
        <Social 
        twitter="https://x.com/marco_dl15" 
        github="https://github.com/MarcoJav15" 
        facebook="https://www.facebook.com/marco.deleon.5070/" 
        linkedin="https://www.linkedin.com/in/marco-de-le%C3%B3n-7a4a4030a/" 
        youtube="https://www.youtube.com/channel/UCmoO_xCQey0WXzpMXH3efwg" 
        instagram="https://www.instagram.com/marco.dl15/?hl=es-la"/>

      </div>
    </main>
  );
}
