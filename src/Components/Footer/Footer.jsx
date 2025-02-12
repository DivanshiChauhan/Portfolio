import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#A2666F] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:divanshichauhan.15@gmail.com" className="hover:underline hover:text-[#F49390]">
            divanshichauhan.15@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/divanshi-chauhan-56633824a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#F49390]"
          >
            https://www.linkedin.com/in/divanshi-chauhan-56633824a
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/DivanshiChauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#F49390]"
          >
            https://github.com/DivanshiChauhan
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
