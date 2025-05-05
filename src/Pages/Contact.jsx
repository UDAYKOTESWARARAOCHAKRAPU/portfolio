import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const styles = {
    // container: {
    //   maxWidth: '1200px',
    //   margin: '0 auto',
    //   padding: '2rem',
    // },
    contactTitle: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#333',
    },
    contactContent: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    contactInfo: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '350px',
    },
    contactItem: {
      marginBottom: '1.5rem',
      padding: '1.5rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    contactForm: {
      flex: '2',
      minWidth: '300px',
      maxWidth: '700px',
      width: '100%',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      resize: 'vertical',
    },
    submitBtn: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    successMessage: {
      marginTop: '1rem',
      padding: '0.75rem',
      backgroundColor: '#d4edda',
      color: '#155724',
      borderRadius: '4px',
      textAlign: 'center',
    }
  };

  return (
    <>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="contact-title"
          style={styles.contactTitle}
        >
          Get In Touch
        </motion.h1>

        <motion.div
          className="contact-content"
          variants={itemVariants}
          style={styles.contactContent}
        >
          <div className="contact-info" style={styles.contactInfo}>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.contactItem}
            >
              <h3>Email</h3>
              <p>project.uday20@gmail.com</p>
            </motion.div>

            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.contactItem}
            >
              <h3>Phone</h3>
              <p>+91 7729931224</p>
            </motion.div>

            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.contactItem}
            >
              <h3>Location</h3>
              <p>New York, NY</p>
            </motion.div>
          </div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
            style={styles.contactForm}
          >
            <motion.div className="form-group" variants={itemVariants} style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants} style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants} style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              style={styles.submitBtn}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={styles.successMessage}
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Contact;