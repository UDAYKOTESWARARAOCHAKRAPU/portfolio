import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../Css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) =>{


    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 3000);
      });
  };

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

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="contact-container glass-effect">
        <motion.h1 className="contact-title" variants={itemVariants}>
          <motion.span
            className="contact-icon"
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
          Let's Connect
        </motion.h1>

        <motion.div className="contact-content" variants={itemVariants}>
          <div className="contact-info">
            <motion.div
              className="contact-item glass-effect"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3>
                <span className="contact-item-icon">📧</span> Email
              </h3>
              <p>project.uday20@gmail.com</p>
            </motion.div>

            <motion.div
              className="contact-item glass-effect"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3>
                <span className="contact-item-icon">📞</span> Phone
              </h3>
              <p>+91 7729931224</p>
            </motion.div>

            <motion.div
              className="contact-item glass-effect"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3>
                <span className="contact-item-icon">📍</span> Location
              </h3>
              <p>Kondrupadu, Penuballi, Khammam, Telangana</p>
            </motion.div>
          </div>

          <motion.form
            className="contact-form glass-effect"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitSuccess && (
              <motion.div
                className="success-message glass-effect"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="success-icon">✅</span> Thank you for reaching out! I’ll be in touch soon.
              </motion.div>
            )}

            {submitError && (
              <motion.div
                className="error-message glass-effect"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="error-icon">❌</span> Failed to send message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;