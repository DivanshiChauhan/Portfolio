import { motion } from "framer-motion";
import avatarImg from "../../assets/AvatarFinal.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-between w-full px-6 py-10 md:px-20 md:py-20 bg-black">
     
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-e-full object-cover"
          src={avatarImg}
          alt="Profile"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F49390]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <TextChange />
        </motion.h1>

        <motion.p
          className="mt-4 text-md sm:text-lg md:text-xl lg:text-2xl tracking-tight text-[#A2666F]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          I’m a student passionate about building user-friendly and functional projects. 
          I enjoy learning new technologies and turning ideas into working solutions.
        </motion.p>
      </motion.div>

    </div>
  );
};

export default Home;
