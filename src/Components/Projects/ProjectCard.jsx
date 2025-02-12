import { motion } from "framer-motion";

const ProjectCard = ({ title, main, img, githubLink }) => {
  return (
    <motion.div
      className="p-3 md:p-6 flex flex-col w-60 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{
        scale: 1.05, 
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", 
        border: "2px solid #F49390", 
        transition: { duration: 0.3 },
      }}
    >
      <img
        className="p-4 rounded-full group-hover:border-2 group-hover:border-[#F49390] transition-all duration-300"
        src={img}
        alt=""
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal group-hover:text-[#F49390] transition-all duration-300">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 group-hover:text-[#F49390] transition-all duration-300">
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#F49390]">
            Source Code
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
