import React, {useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Css/About.css";

function About() {
  // Even smoother, more elegant animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.96, opacity: 0, filter: "blur(10px)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 44,
        damping: 22,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.82, y: 36, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0 12px 40px rgba(59,130,246,0.22)",
      transition: { type: "spring", stiffness: 180, damping: 14 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.6 },
    },
  };

  const techSkills = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/c.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redux.svg",
    },
    {
      name: "React Hooks",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg",
    },
    {
      name: "Responsive Design",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/responsivewebdesign.svg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="about-container" variants={containerVariants}>
          <motion.div
            className="about-card glass-effect"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.h1 className="about-title" variants={itemVariants}>
              About Me
            </motion.h1>
            <motion.p className="about-description" variants={itemVariants}>
              I'm <strong>Uday Koteswara Rao Chakrapu</strong>, an enthusiastic
              Frontend Developer from Kondrupadu, Telangana. Currently pursuing
              a <strong>B.Tech in CSE (AI & ML)</strong> at Sai Spurthi
              Institute of Technology (2021–2025), I specialize in crafting
              intuitive, responsive, and visually appealing web applications
              using modern technologies. Passionate about innovation, I aim to
              contribute to cutting-edge projects in dynamic teams.
            </motion.p>

            <motion.h2 className="section-title" variants={itemVariants}>
              Education
            </motion.h2>
            <motion.div className="education-card" variants={itemVariants}>
              <ul className="about-list education-list">
                <motion.li className="education-item" variants={itemVariants}>
                  <span className="education-title">
                    B.Tech in CSE (AI & ML)
                  </span>
                  <p className="education-details">
                    Sai Spurthi Institute of Technology, Telangana (2021–2025)
                  </p>
                </motion.li>
                <motion.li className="education-item" variants={itemVariants}>
                  <span className="education-title">Intermediate (MPC)</span>
                  <p className="education-details">
                    Krishnaveni Junior College (2019–2021)
                  </p>
                </motion.li>
                <motion.li className="education-item" variants={itemVariants}>
                  <span className="education-title">SSC</span>
                  <p className="education-details">
                    Sri Vivekananda Vidyalayam (2019)
                  </p>
                </motion.li>
              </ul>
            </motion.div>

            <motion.h2 className="section-title" variants={itemVariants}>
              Work Experience
            </motion.h2>
            <motion.div className="experience-card" variants={itemVariants}>
              <motion.h3 className="experience-title" variants={itemVariants}>
                Frontend Developer Intern — Xtentics Pvt. Ltd.
              </motion.h3>
              <motion.p className="experience-duration" variants={itemVariants}>
                July 2024 – November 2024
              </motion.p>
              <motion.ul className="about-list" variants={itemVariants}>
                <motion.li variants={itemVariants}>
                  Developed interactive dashboards and optimized user interfaces
                  for data visualization using React.js, CSS, and JavaScript.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Enhanced user experience in data-driven projects through
                  responsive design and seamless frontend-backend integration.
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.h2 className="section-title" variants={itemVariants}>
              Technical Skills
            </motion.h2>
            <motion.div className="skill-grid" variants={itemVariants}>
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={skillCardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  />
                  <motion.span
                    className="skill-name"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            <motion.h2 className="section-title" variants={itemVariants}>
              Leadership
            </motion.h2>
            <motion.div className="leadership-card" variants={itemVariants}>
              <motion.h3 className="leadership-title" variants={itemVariants}>
                Treasurer — TechGeeks, College Technical Club
              </motion.h3>
              <motion.ul className="about-list" variants={itemVariants}>
                <motion.li variants={itemVariants}>
                  Managed budgeting, expense reports, and financial planning,
                  increasing club budget by 30% through fundraising and
                  sponsorships.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Ensured transparency in financial records and organized tech
                  events to foster community growth.
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
