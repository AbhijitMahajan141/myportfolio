import { motion } from "framer-motion";
import { styles } from "../style";
import { github, resume, linkedin } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Abhijit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop beautiful and interactive web Applications and Mobile
            Applications.
          </p>
        </div>
      </div>
      <div className="z-[1] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 h-[50%] w-[50%] mt-[200px] sm:w-[90%] sm:h-[80%] md:w-[50%] md:h-[50%]">
        <motion.div
          className="bg-green-200 p-4 rounded-full cursor-pointer shadow-2xl shadow-indigo-500/50 sm:p-6"
          // whileHover={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1SMMTo-qTCzuU8wTHnKiiiyEZhYcAjcSY"
            download
          >
            <img
              src={resume}
              alt="resume"
              width={40}
              height={40}
              className="sm:w-[100px]"
            />
          </a>
        </motion.div>
        <motion.div
          className="bg-black p-4 rounded-full cursor-pointer shadow-2xl shadow-indigo-500/50 sm:p-6"
          // whileHover={{ scale: 1.1 }}
          animate={{
            scale: [1, 1.1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <a href="https://github.com/AbhijitMahajan141/" target="_blank">
            <img
              src={github}
              alt="github"
              width={40}
              height={40}
              className="sm:w-[100px]"
            />
          </a>
        </motion.div>
        <motion.div
          className="bg-blue-300 p-4 rounded-full cursor-pointer shadow-2xl shadow-indigo-500/50 sm:p-6"
          // whileHover={{ scale: 1.1 }}
          animate={{
            scale: [1, 1.1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <a
            href="https://www.linkedin.com/in/abhijit-mahajan-348a281bb/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin"
              width={40}
              height={40}
              className="sm:w-[100px]"
            />
          </a>
        </motion.div>
      </div>
      <div className=" xs:bottom-10 w-full h-0 flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[54px] rounded-2xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
