import React, {useEffect} from "react";
import { motion, } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import "../Css/Home.css";
import pro2 from "../Images/1.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <motion.div
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="home-card glass-effect" variants={itemVariants}>
          <motion.img
            src={pro2}
            alt="Uday Koteswara Rao Chakrapu"
            className="profile-photo"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          />
          <motion.h1 className="home-title" variants={itemVariants}>
            Uday Koteswara Rao Chakrapu
          </motion.h1>
          <motion.h2 className="home-subtitle" variants={itemVariants}>
            Frontend Developer
          </motion.h2>
          <motion.p className="home-description" variants={itemVariants}>
            I'm a passionate Frontend Developer, currently pursuing a B.Tech in CSE (AI & ML) at Sai Spurthi Institute of Technology (2021–2025). Specializing in React.js, Tailwind CSS, and responsive design, I craft intuitive and visually appealing web applications. My goal is to build innovative solutions and contribute to dynamic tech teams.
          </motion.p>
          <motion.div className="social-links" variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/uday-koteswara-rao-chakrapu" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="https://github.com/UDAYKOTESWARARAOCHAKRAPU" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                alt="GitHub"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="https://gitlab.com/UDAYKOTESWARARAOCHAKRAPU" // Replace with your GitLab URL
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gitlab.svg"
                alt="GitLab"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="mailto:project.uday20@gmail.com" // Replace with your email
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg"
                alt="Email"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="tel:+91-7729931224" // Replace with your phone number
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <PhoneIcon  color="primary" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;