import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Css/Project.css";

import av from '../Images/av.png';
import clip from '../Images/clip.png';
import ttt from '../Images/ttt.png';
import medi from '../Images/medi.png';
import verse from '../Images/versetales.png';
import tech from '../Images/techgeeks.png';

const projects = [
  {
    title: "Exams: A GenAI Exam Platform",
    description:
      "Students take exams and check results online. Teachers conduct exams using a GenAI model.",
    tech: ["React", "CSS", "Python", "Grok Model"],
    link: "https://avschool.in/login",
    image: av,
  },
  {
    title: "Clip-Nest",
    description:
      "Download images, videos, reels, and shorts from YouTube, Facebook, and Instagram.",
    tech: ["React", "Python", "Framer Motion"],
    link: "https://clip-nest-uday-koteswara-rao-chakrapus-projects.vercel.app/",
    image: clip,
  },
  {
    title: "Medi Report",
    description:
      "Users track health data, calculate BMI, and manage encrypted health reports with consent.",
    tech: ["React", "Framer Motion", "Styled Components"],
    link: "https://healthanalysis-eoel.vercel.app/",
    image: medi,
  },
  {
    title: "Versetales",
    description:
      "A storytelling app for children to learn about history and morals to lead their future with humanity.",
    tech: ["React", "Framer Motion", "Styled Components"],
    link: "https://versetales-git-main-uday-koteswara-rao-chakrapus-projects.vercel.app/",
    image: verse,
  },
  {
    title: "TechGeeks",
    description: "A web application for the college technical club.",
    tech: ["HTML5", "CSS3", "Styled Components"],
    link: "https://techgeeks.club/login",
    image: tech,
  },
  {
    title: "Tic-Tac-Toe",
    description: "An app for playing tic-tac-toe for fun.",
    tech: ["React", "Framer Motion", "Styled Components"],
    link: "https://tic-tac-toe-uday-koteswara-rao-chakrapus-projects.vercel.app/",
    image: ttt,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: -10,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 16,
      mass: 0.8,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.08,
    rotate: 1.5,
    boxShadow: "0 16px 45px rgba(59, 130, 246, 0.3)",
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      mass: 0.9,
    },
  },
};

const h1Variants = {
  hidden: { opacity: 0, y: -80, scale: 0.7, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      mass: 1.2,
      duration: 1.4,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-container">
        <motion.h1
          className="project-title"
          variants={h1Variants}
          initial="hidden"
          animate="show"
        >
          <motion.span
            className="project-icon"
            initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
            animate={{ scale: 1.3, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              mass: 0.8,
              delay: 0.3,
            }}
          >
            🚀
          </motion.span>
          My Projects
        </motion.h1>

        <motion.div
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                className="project-card glass-effect"
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                exit={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  filter: "blur(8px)",
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }}
                layout
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                    delay: 0.2 + index * 0.08,
                  }}
                />
                <motion.h2
                  className="project-heading"
                  initial={{ opacity: 0, x: -40, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    mass: 0.8,
                    delay: 0.25 + index * 0.08,
                  }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="tech-stack"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.45 + index * 0.08,
                      },
                    },
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-badge"
                      initial={{
                        opacity: 0,
                        y: 15,
                        scale: 0.7,
                        filter: "blur(3px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 10,
                        mass: 0.7,
                        delay: 0.55 + i * 0.05 + index * 0.04,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                  initial={{ opacity: 0, y: 25, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 4px 24px rgba(59, 130, 246, 0.4)",
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 12,
                    mass: 0.8,
                    delay: 0.75 + index * 0.08,
                  }}
                >
                  <motion.span
                    className="link-icon"
                    initial={{ x: -15, opacity: 0, rotate: -20 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                      delay: 0.85 + index * 0.08,
                    }}
                  >
                    🔗
                  </motion.span>
                  View Project
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Project;