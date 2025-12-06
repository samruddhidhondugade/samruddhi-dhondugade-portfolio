import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  icon: Icon,
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base';
  
  const variants = {
    primary: 'bg-brand-mustard text-black hover:bg-opacity-90 shadow-lg hover:shadow-xl focus:ring-brand-mustard',
    secondary: 'bg-brand-deepGreen text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl focus:ring-brand-deepGreen',
    outline: 'border-2 border-brand-mustard text-black hover:bg-brand-mustard hover:text-black focus:ring-brand-mustard',
    ghost: 'text-black hover:bg-brand-lightGray',
  };

  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;
  const buttonContent = (
    <>
      {Icon && <Icon size={20} />}
      {children}
    </>
  );

  if (href) {
    if (href.startsWith('#')) {
      return (
        <motion.a
          href={href}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={buttonClasses}
          {...props}
        >
          {buttonContent}
        </motion.a>
      );
    }
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
