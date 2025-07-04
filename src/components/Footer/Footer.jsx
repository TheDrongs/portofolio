import { footerIcons, navElements } from "../../assets/assets.js";

const Footer = ({ activeElem, setActiveElem }) => {
  return (
    <div className="bg-mainColor flex bedar-sm:items-center justify-between flex-col-reverse bedar-sm:flex-row gap-1 bedar-sm:gap-0 px-5 bedar-sc1:px-20 py-5 mt-10">
      <div>
         <a
          href={`#${navElements[0]}`}
          onClick={() => setActiveElem(navElements[0])}
          className="text-white select-none text-[24px] bedar-sm:text-2xl font-semibold"
        >
          {textLogo}
        </a>

        <p className="text-sm text-white text-center mt-2">
          © {new Date().getFullYear()} Andri Pramuji / TheDrongs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
