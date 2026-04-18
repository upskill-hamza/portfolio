import "./styles/index.css";

import Cursor     from "./components/Cursor";
import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import Marquee    from "./components/Marquee";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import MusicToggle from "./components/MusicToggle";
import { SpeedInsights } from "@vercel/speed-insights/react";


export default function App() {
  return (
    <>
      <MusicToggle/>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
}
