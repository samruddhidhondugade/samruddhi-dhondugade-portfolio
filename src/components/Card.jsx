import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseStyles = 'rounded-3xl p-4 sm:p-6 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md';
  
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { y: -8, scale: 1.02 } : {},
  };

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover={hover ? "hover" : {}}
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
