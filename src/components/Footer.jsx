import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioConfig } from '../config/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FaGithub, href: portfolioConfig.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: portfolioConfig.social.linkedin, label: 'LinkedIn' },
    // { icon: FaTwitter, href: portfolioConfig.social.twitter, label: 'Twitter' },
    { icon: FaEnvelope, href: `mailto:${portfolioConfig.social.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-brand-deepGreen dark:bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 text-sm"
          >
            © {currentYear} {portfolioConfig.personal.name}. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-mustard hover:text-black transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
