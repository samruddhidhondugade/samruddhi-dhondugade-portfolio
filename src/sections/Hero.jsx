import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../components/Button';
import { portfolioConfig } from '../config/portfolio';

const Hero = () => {
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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-lightGray dark:bg-gray-900 pt-20"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-mustard/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-leafGreen/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Hello Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-brand-mustard/20 text-black rounded-full text-sm font-semibold">
                Hello There 👋
              </span>
            </motion.div>

            {/* Name with Yellow Highlight */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-poppins text-black dark:text-white leading-tight"
            >
              I'm{' '}
              <span className="text-brand-mustard">
                {portfolioConfig.personal.name.split(' ')[0]}
              </span>
              <br />
              {portfolioConfig.personal.name.split(' ').slice(1).join(' ')}
            </motion.h1>

            {/* Role Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-brand-deepGreen text-white rounded-full text-sm font-medium">
                {portfolioConfig.personal.role}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-black/70 dark:text-gray-300 leading-relaxed"
            >
              {portfolioConfig.personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                href="#projects"
                variant="primary"
                icon={HiArrowRight}
                className="text-lg px-8 py-4"
              >
                View My Portfolio
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className="text-lg px-8 py-4"
              >
                Hire Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Rounded Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-mustard/30 to-brand-leafGreen/30 rounded-[3rem] transform rotate-6"></div>
              
              {/* Image Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-4 sm:p-8 shadow-2xl">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">

  <img
    src="/Images/samruddhipic.jpg" // <-- Update this path to your actual picture location
    alt="Profile"
    className="w-full h-full object-cover"
    loading="eager"
  />
</div>
              </div>

              {/* Floating Badge */}
              {/* <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -bottom-4 -right-4 bg-brand-mustard text-black px-6 py-3 rounded-full shadow-lg font-semibold"
              >
                Software Engineer
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
