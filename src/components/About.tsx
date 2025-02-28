import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Code, Database, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-12 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm an AI/ML & Data Analytics enthusiast with a passion for building innovative solutions. 
              With proficiency in Python, SQL, and web development, I focus on creating data-driven applications 
              that solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Proficient in Python, SQL, and JavaScript with hands-on experience in building real-time solutions 
                    and optimizing machine learning models.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experienced in analyzing complex datasets to extract actionable insights and 
                    deliver data-driven solutions for business decision-making.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    B.Tech in Information Technology from NRI Institute of Technology with a strong 
                    academic background and practical project experience.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mentored juniors on project development, earning a Mentor Certification from 
                    NRI Institute of Technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interests & Passions</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Exploring AI chatbots and their applications</li>
                  <li>Solving complex problems and puzzles (e.g., Rubik's Cube)</li>
                  <li>Photography and image processing using AI tools</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;