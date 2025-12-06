import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-black dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-black/70 dark:text-gray-300 text-base sm:text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 animate-scroll"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...skills, ...skills].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={`${skill.id}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0"
                >
                  <div className="bg-brand-lightGray dark:bg-gray-700 rounded-2xl p-4 sm:p-6 w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center gap-2 sm:gap-3 shadow-md hover:shadow-xl transition-all">
                    <IconComponent size={32} className="sm:w-10 sm:h-10 text-brand-deepGreen dark:text-brand-leafGreen" />
                    <span className="text-xs sm:text-sm font-semibold text-black dark:text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
