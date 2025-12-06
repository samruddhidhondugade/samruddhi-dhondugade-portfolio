import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { portfolioConfig } from '../config/portfolio';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-16 bg-brand-lightGray dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Journey"
          title="Experience"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-brand-mustard/30 transform md:-translate-x-1/2"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {portfolioConfig.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-brand-mustard rounded-full border-4 border-white transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{exp.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold font-poppins text-black dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-brand-deepGreen dark:text-brand-leafGreen font-semibold mb-2">
                          {exp.company}
                        </p>
                        <p className="text-black/60 dark:text-gray-400 text-sm mb-4">
                          {exp.location} • {exp.period}
                        </p>
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-black/70 dark:text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-brand-mustard mt-1">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
