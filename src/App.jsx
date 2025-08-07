import { useState } from 'react';
import './app.css';
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          backgroundColor: darkMode ? "#111827" : "#f8fafc" // Changed to softer white
        }}
        transition={{ 
          duration: 0.8,
          backgroundColor: { 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      >
        {/* Navbar */}
        <motion.nav
          className="py-6 px-4 sm:px-6 lg:px-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            backgroundColor: darkMode ? "#111827" : "#f8fafc" // Matching soft white
          }}
          transition={{ 
            duration: 0.7, 
            ease: [0.32, 0, 0.67, 0],
            backgroundColor: {
              duration: 0.7,
              ease: [0.33, 1, 0.68, 1]
            }
          }}
        >
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                color: darkMode ? "#818cf8" : "#4f46e5"
              }}
              transition={{ 
                duration: 0.6,
                color: { duration: 0.5 }
              }}
            >
              My Portfolio
            </motion.h1>

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg overflow-hidden relative"
              style={{
                backgroundColor: darkMode ? "rgba(55, 65, 81, 0.5)" : "rgba(229, 231, 235, 0.5)"
              }}
              whileTap={{ 
                rotate: 180,
                scale: 1.2,
                transition: { type: "spring", stiffness: 500 }
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: darkMode ? "rgba(55, 65, 81, 0.8)" : "rgba(229, 231, 235, 0.8)"
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 400,
                damping: 15
              }}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={darkMode ? 'sun' : 'moon'}
                  className="block"
                  initial={{ 
                    opacity: 0, 
                    y: -20,
                    rotate: darkMode ? 90 : -90
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    rotate: 0,
                    transition: { type: "spring", bounce: 0.5 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 20,
                    rotate: darkMode ? -90 : 90,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1]
                  }}
                >
                  {darkMode ? '🌙' : '☀️'}
                </motion.span>
              </AnimatePresence>
              
              {darkMode && (
                <motion.span 
                  className="absolute inset-0 rounded-lg bg-yellow-200 opacity-0"
                  animate={{
                    opacity: [0, 0.2, 0],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 text-center"
          style={{ backgroundColor: darkMode ? "#111827" : "#f8fafc" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Zanyar</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              A passionate software engineer student at AUIS specializing in front-end development.
            </motion.p>
            
            <motion.button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              View My Work
            </motion.button>
          </div>
        </motion.section>
        
        {/* About Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: darkMode ? "#1f2937" : "#ffffff" }} // Slightly darker in dark mode
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I am a senior software engineer student at American University of Iraq Sulaimani. 
                  I have a background in database, networking and front-end web-app development.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">My Skills</h3>
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {['React', 'JavaScript', 'Java', 'Database', 'Networking', 'HTML/CSS', 'Tailwind CSS', 'Node.js'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.3)'
                        }}
                        transition={{ 
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex justify-center"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src="https://i.ibb.co/0pQWwjCV/IMG-1464.jpg"
                  alt="Profile"
                  className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-indigo-200 dark:border-indigo-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: darkMode ? "#111827" : "#f8fafc" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { id: 1, title: "E-Commerce Platform", tech: ["React", "Node.js", "MongoDB"] },
                { id: 2, title: "Task Management App", tech: ["React", "Firebase", "Tailwind"] },
                { id: 3, title: "Portfolio Website", tech: ["React", "Framer Motion", "CSS"] },
                { id: 4, title: "Weather Dashboard", tech: ["JavaScript", "API Integration", "CSS"] }
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-indigo-900/30 transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-60 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="text-6xl text-indigo-400 dark:text-indigo-600 opacity-30"
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.id}
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white dark:bg-gray-800">
                    <motion.h3 
                      className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                      whileHover={{ color: "#4f46e5" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Brief description of the project and technologies used.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a 
                        href="#" 
                        className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Demo
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: darkMode ? "#1f2937" : "#ffffff" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: "zanyarhussein3@gmail.com",
                  href: "mailto:zanyarhussein3@gmail.com"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: "+964 772 295 1515",
                  href: "tel:+9647722951515"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                  text: "github.com/zanyarhussein",
                  href: "https://github.com/zanyarhussein"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ),
                  text: "linkedin.com/in/zanyar-hussein-salam",
                  href: "https://www.linkedin.com/in/zanyar-hussein-salam-a878642b5/"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(79, 70, 229, 0.1)"
                  }}
                >
                  <motion.div
                    className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                  <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.text}
                  </span>
                  <motion.div 
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer 
          className="py-8 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: darkMode ? "#111827" : "#f1f5f9" }} // Slightly darker than main bg
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:zanyarhussein3@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://github.com/zanyarhussein" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/zanyar-hussein-salam-a878642b5/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default App;