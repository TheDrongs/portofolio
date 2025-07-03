import { useState } from "react";
import { Navbar, Footer } from "./components/components.js";
import {
  About,
  Education,
  Skills,
  Services,
  Projects,
  Contact,
  Certificates,
} from "./pages/pages.js";
import { navElements } from "./assets/assets.js";

const App = () => {
  const [activeElem, setActiveElem] = useState(navElements[0]);

  return (
    <div className="relative selection:bg-[#fedf89] selection:text-textColor">
     <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white to-[#e0f2ff]" />
      <Navbar activeElem={activeElem} setActiveElem={setActiveElem} />
      <div className="relative max-w-[1800px] mt-[7rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        {/* <Services /> */}
        <Contact />
      </div>
      <Footer activeElem={activeElem} setActiveElem={setActiveElem} />
    </div>
  );
};

export default App;
