import { FaCode, FaHardHat, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex items-center justify-center bg-[#2C2F3B] mx-0 md:mx-20 rounded-lg p-8 md:p-12 w-full max-w-screen-xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        className="text-center w-full"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-center gap-6">
          <ul className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0.7, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center w-72"
            >
              <FaCode size={40} className="text-[#F49390] mt-1" />
              <span>
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-white">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-white">
                  I have worked with React.js, HTML, CSS, Tailwind CSS, and JavaScript, building responsive and user-friendly applications.
                </p>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.7, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center w-72"
            >
              <FaHardHat size={40} className="text-[#F45866] mt-1" />
              <span>
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-white">
                  Blockchain Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-white">
                  I have experience working with Solidity to develop smart contracts and deploy them using Remix and MetaMask.
                </p>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.7, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center w-72"
            >
              <FaTools size={40} className="text-[#A2666F] mt-1" />
              <span>
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-white">
                  Programming Skills
                </h1>
                <p className="text-sm md:text-md leading-tight text-white">
                  I am proficient in C, C++, Java, Python, and JavaScript and continuously improve my coding skills by working on projects and exploring new technologies.
                </p>
              </span>
            </motion.div>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
