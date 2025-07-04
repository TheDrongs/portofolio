import { footerIcons } from "../../assets/assets.js";

const Footer = ({ activeElem, setActiveElem }) => {
  return (
    <div className="bg-mainColor flex bedar-sm:items-center justify-between flex-col-reverse bedar-sm:flex-row gap-1 bedar-sm:gap-0 px-5 bedar-sc1:px-20 py-5 mt-10">
     <div className="flex gap-[10px]">
        {footerIcons.map(({ name, component: IconComponent, link }) => (
          <a
            href={link}
            key={name}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <IconComponent className="w-6 bedar-sm:w-9 h-6 bedar-sm:h-9 rounded-lg fill-zinc-400 hover:fill-white transition-colors ease-linear" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
