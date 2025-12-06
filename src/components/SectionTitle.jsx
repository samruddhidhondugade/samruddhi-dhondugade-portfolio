import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      {subtitle && (
        <p className="text-brand-leafGreen dark:text-brand-mustard font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-black dark:text-white">
          {title}
        </h2>
      )}
    </motion.div>
  );
};

export default SectionTitle;

