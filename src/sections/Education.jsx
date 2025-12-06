import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { portfolioConfig } from '../config/portfolio';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="education" className="py-16 bg-brand-lightGray dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Learning Journey"
          title="Education & Courses"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold font-poppins text-black dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {portfolioConfig.education.map((edu) => (
                <motion.div key={edu.id} variants={itemVariants}>
                  <Card className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-3 h-3 bg-brand-mustard rounded-full border-4 border-white dark:border-gray-900"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold font-poppins text-black dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-brand-deepGreen dark:text-brand-leafGreen font-semibold mb-2">
                          {edu.field}
                        </p>
                        <p className="text-black/70 dark:text-gray-300 text-sm mb-2">
                          {edu.institution} • {edu.location}
                        </p>
                        <p className="text-black/60 dark:text-gray-400 text-xs mb-3">
                          {edu.period}
                        </p>
                        <p className="text-black/70 dark:text-gray-300 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Courses Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold font-poppins text-black dark:text-white mb-6">
              Courses & Certifications
            </h3>
            <div className="space-y-4">
              {portfolioConfig.courses.map((course) => (
                <motion.div key={course.id} variants={itemVariants}>
                  <Card className="hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{course.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="text-lg font-bold font-poppins text-black dark:text-white">
                            {course.title}
                          </h4>
                          <span className="text-xs text-black/60 dark:text-gray-400 bg-brand-lightGray dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                            {course.period}
                          </span>
                        </div>
                        <p className="text-brand-deepGreen dark:text-brand-leafGreen text-sm font-medium mb-2">
                          {course.platform}
                        </p>
                        <p className="text-black/70 dark:text-gray-300 text-sm leading-relaxed mb-3">
                          {course.description}
                        </p>
                        {course.certificate && (
                          <a
                            href={course.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-brand-mustard hover:text-brand-deepGreen dark:hover:text-brand-leafGreen text-sm font-semibold transition-colors"
                          >
                            View Certificate →
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

