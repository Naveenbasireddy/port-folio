import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, education, internships } from '../data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            Experience & Education
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div 
                    key={exp.id}
                    className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 mb-2">{exp.company}, {exp.location}</p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {exp.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}

                <h3 className="text-xl font-bold mb-4 mt-12 gradient-text">Internships</h3>
                
                {internships.map((internship) => (
                  <motion.div 
                    key={internship.id}
                    className="relative pl-8 border-l-2 border-secondary-200 dark:border-secondary-800"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{internship.title}</h4>
                      <p className="text-secondary-600 dark:text-secondary-400 mb-2">{internship.company}, {internship.location}</p>
                      <p className="text-gray-600 dark:text-gray-400">{internship.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu) => (
                  <motion.div 
                    key={edu.id}
                    className="relative pl-8 border-l-2 border-secondary-200 dark:border-secondary-800"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      <p className="text-secondary-600 dark:text-secondary-400 mb-2">{edu.institution}, {edu.location}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.grade}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={itemVariants}
                className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">Key Achievement</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mentored juniors on project development, earning a Mentor Certification from NRI Institute of Technology.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;