import { FaCss3, FaHtml5, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiSolidity, SiCplusplus, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="Experience" className="pt-10 pb-0 px-10 md:pt-24 md:px-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <FaHtml5 color="#E34F26" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <FaCss3 color="#1572B6" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <FaReact color="#61DAFB" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <FaJs color="#F7DF1E" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <SiSolidity color="white" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <SiCplusplus color="#00599C" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <SiTailwindcss color="#38B2AC" size={50} />
          </motion.span>
          <motion.span
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            whileHover={{ scale: 1.2, borderColor: "#F49390", boxShadow: "0 0 10px rgba(244, 147, 144, 0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <FaJava color="#F89820" size={50} />
          </motion.span>
        </div>

        <motion.div
          className="flex gap-10 bg-[#A2666F] bg-opacity-45 mt-4 rounded-lg p-4 items-center"
          whileHover={{ scale: 1.05, borderColor: "#F49390", boxShadow: "0 0 15px rgba(244, 147, 144, 0.8)" }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white">
            <h2 className="leading-tight">Metacrafters Summer Program</h2>
            <p className="text-sm leading-tight font-thin">
              June 2024 - August 2024
            </p>
            <ul className="text-sm p-2">
              <li>- Learned JavaScript, Solidity, and blockchain technology.</li>
              <li>- Worked on smart contract development and deployment.</li>
              <li>- Built decentralized applications using Remix and MetaMask.</li>
            </ul>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
