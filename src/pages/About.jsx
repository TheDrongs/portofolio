import { Link } from "react-router-dom";
import { AboutPage } from "../assets/assets";

const {
  authorDescription,
  getInTouchUrl,
  authorName,
} = AboutPage;

const About = () => {
  return (
    <div
      id="About"
      className="bg-mainColor text-white flex flex-col gap-6 mt-[.5rem] bedar-sc2:mt-2 rounded-2xl px-6 bedar-sc2:px-10 bedar-sc1:px-16 pt-8 pb-5 bedar-sc2:py-10 border border-zinc-200"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="text-3xl">
          Hi, I am <strong className="text-[#fedf89]">{authorName}</strong>
        </div>

        <div style={{ textAlign: "justify" }} className="leading-7 text-lg">
          {authorDescription}
        </div>
      </div>
    </div>
  );
};

export default About;
