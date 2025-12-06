import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { portfolioConfig } from '../config/portfolio';

const About = () => {
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
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Get to know me"
          title="About Me"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Photo Card */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="relative">
              {/* Rounded Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-mustard/30 to-brand-leafGreen/30 rounded-[3rem] transform rotate-6"></div>
              
              {/* Image Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-brand-deepGreen to-brand-leafGreen rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">
                    {portfolioConfig.personal.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-mustard/30 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-leafGreen/30 rounded-full blur-2xl opacity-50"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <Card>
              <h3 className="text-2xl sm:text-3xl font-bold font-poppins mb-4 text-black dark:text-white">
                {portfolioConfig.personal.name}
              </h3>
              {/* <p className="text-base sm:text-lg text-brand-deepGreen dark:text-brand-leafGreen font-semibold mb-6">
                {portfolioConfig.personal.role}
              </p> */}
              <p className="text-black/70 dark:text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                {portfolioConfig.personal.bio}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-brand-lightGray dark:bg-gray-700 text-black dark:text-white rounded-full text-xs sm:text-sm font-medium">
                  <FaMapMarkerAlt className="text-brand-mustard" />
                  {portfolioConfig.personal.location}
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-brand-lightGray dark:bg-gray-700 text-black dark:text-white rounded-full text-xs sm:text-sm font-medium">
                  <FaEnvelope className="text-brand-mustard" />
                  <span className="hidden sm:inline">{portfolioConfig.personal.email}</span>
                  <span className="sm:hidden">Email</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
