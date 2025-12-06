import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { portfolioConfig } from '../config/portfolio';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        portfolioConfig.emailjs.serviceId,
        portfolioConfig.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        portfolioConfig.emailjs.publicKey
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: portfolioConfig.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: portfolioConfig.social.linkedin, label: 'LinkedIn' },
    // { icon: FaTwitter, href: portfolioConfig.social.twitter, label: 'Twitter' },
    { icon: FaEnvelope, href: `mailto:${portfolioConfig.social.email}`, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-6 text-black dark:text-white">
                Let's Work Together
              </h3>
              <p className="text-black/70 dark:text-gray-300 mb-8 leading-relaxed">
                I’d love to hear from you! Whether you need a developer, have a question, or just want to connect, feel free to reach out.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-brand-lightGray rounded-full flex items-center justify-center hover:bg-brand-mustard hover:text-black transition-all duration-300">
                    <FaEnvelope className="text-brand-deepGreen" size={20} />
                  </div>

                  <div>
                    {/* <p className="text-sm text-black/60">Email</p> */}
                    <a
                      href={`mailto:${portfolioConfig.personal.email}`}
                      className="text-black font-semibold hover:text-brand-mustard transition-colors"
                    >
                      {portfolioConfig.personal.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-brand-lightGray rounded-full flex items-center justify-center text-brand-deepGreen hover:bg-brand-mustard hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-lightGray dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-brand-mustard focus:border-brand-mustard transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-lightGray dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-brand-mustard focus:border-brand-mustard transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-lightGray bg-white text-black focus:ring-2 focus:ring-brand-mustard focus:border-brand-mustard transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-brand-leafGreen/20 text-brand-deepGreen rounded-xl"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 text-red-700 rounded-xl"
                  >
                    Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full text-lg py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
