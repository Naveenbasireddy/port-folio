import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && circleRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = heroRef.current?.getBoundingClientRect();
        
        if (rect) {
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          
          gsap.to(circleRef.current, {
            x: x,
            y: y,
            ease: 'power2.out',
            duration: 0.8
          });
        }
      };
      
      const heroElement = heroRef.current;
      heroElement.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-20"
      ref={heroRef}
    >
      <div 
        ref={circleRef}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Naveen Kumar Reddy Basireddy
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  'AI/ML Enthusiast',
                  1500,
                  'Data Analytics Specialist',
                  1500,
                  'Python Developer',
                  1500,
                  'Web Developer',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-600 dark:text-primary-400"
              />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>{contactInfo.location}</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full gradient-bg text-white font-medium shadow-lg shadow-primary-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-2xl"></div>
              <div className="absolute inset-0 grid-pattern"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 flex items-center justify-center text-white text-4xl font-bold">
                    NB
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">AI/ML & Data Analytics</h2>
                  <p className="text-gray-600 dark:text-gray-400">Turning data into meaningful insights</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <ChevronDown size={24} className="text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;