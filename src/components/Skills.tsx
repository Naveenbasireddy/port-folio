import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';
import { Code, Database, Globe, Cpu, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    { 
      title: 'Programming Languages', 
      icon: <Code className="w-6 h-6 text-primary-500" />,
      skills: skills.filter(skill => skill.category === 'programming'),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'AI & Machine Learning', 
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      skills: skills.filter(skill => skill.category === 'ai-ml'),
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Web Development', 
      icon: <Globe className="w-6 h-6 text-green-500" />,
      skills: skills.filter(skill => skill.category === 'web'),
      color: 'from-green-500 to-teal-500'
    },
    { 
      title: 'Database', 
      icon: <Database className="w-6 h-6 text-amber-500" />,
      skills: skills.filter(skill => skill.category === 'database'),
      color: 'from-amber-500 to-orange-500'
    },
    { 
      title: 'Other Skills', 
      icon: <Lightbulb className="w-6 h-6 text-red-500" />,
      skills: skills.filter(skill => skill.category === 'other'),
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            Skills & Expertise
          </motion.h2>

          <motion.p 
            variants={itemVariants} 
            className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            My technical toolkit includes a diverse range of programming languages, frameworks, and technologies
            that I've mastered to build innovative solutions.
          </motion.p>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.color} px-6 py-4 flex items-center`}>
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        className="skill-pill"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center gradient-text">Continuous Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and trends in AI, 
              machine learning, and data analytics to deliver cutting-edge solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;