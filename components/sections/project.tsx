"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  details: string;
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "SQL Agent",
    description: "An autonomous SQL Agent that dynamically generates, optimizes, and executes database queries using natural language commands for efficient data management and analysis.",
    image: "https://tinyurl.com/226ofh39",
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
    details: "This project integrates natural language understanding with database automation, allowing users to input conversational commands that are converted into optimized SQL queries. It intelligently interprets intent, handles joins and filters, and improves query efficiency through dynamic prompt chaining.",
    technologies: ["LangChain", "LangGraph", "Groaq", "SQLite"],
    github: "https://github.com/ShivArora-Sykkuno/Agentic-AI/tree/main/SQL%20Agent"
  },
  {
    id: 2,
    title: "Stock Bot",
    description: "An intelligent AI-powered Stock Bot that analyzes market trends, predicts price movements, and provides real-time trading insights for smarter investment decisions.",
    image: "https://tinyurl.com/25ydsheu",
    color: "from-green-500 to-yellow-500",
    textColor: "text-green-100",
    details: "This system utilizes deep learning and real-time market data to forecast stock price movements and identify profitable trading patterns. It incorporates sentiment analysis from financial news and social media to enhance prediction accuracy and deliver actionable trading insights.",
    technologies: ["Python", "Streamlit", "tensorflow", "Transformer", "Excel"],
    github: "https://github.com/yourusername/vr-fitness"
  },
  {
    id: 3,
    title: "Image Caption Generator",
    description: "An AI-based Image Caption Generator that automatically interprets visual content and generates accurate, descriptive captions using deep learning and computer vision.",
    image: "https://tinyurl.com/258xcbsc",
    color: "from-red-500 to-pink-600",
    textColor: "text-red-100",
    details: "This project combines convolutional neural networks (CNNs) and transformer-based language models to generate human-like captions for images. It extracts visual features, interprets context, and produces coherent, descriptive sentences that accurately represent the image content.",
    technologies: ["Python", "Tensorflow", "Opencv", "Transformer"],
    github: "https://github.com/ShivArora-Sykkuno/Data-Science-Projects/tree/main/Image%20Caption%20Generator"
  },
  {
  id: 4,
  title: "UK Traffic Accidents",
  description: "A data-driven analytics system that visualizes and predicts UK traffic accident trends using historical datasets and machine learning models for improved road safety insights.",
  image: "https://appstylo.com/wp-content/uploads/2024/07/How-to-Increase-User-Retention-930x600.png",
  color: "from-orange-500 to-red-600",
  textColor: "text-orange-100",
  details: "This project leverages predictive modeling and interactive dashboards to analyze factors influencing road accidents across the UK, enabling smarter city planning and safety improvements.",
  technologies: ["Tableura", "Excel", "Python"],
  github: "https://github.com/ShivArora-Sykkuno/Data-Science-Projects/tree/main/UK%20Traffic%20Accidents"
}
];

export function ProjectSection() {
  // Define selectedProject state to accept Project type or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-background animate-pulse" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Explore a collection of innovative projects that showcase my expertise in cutting-edge web technologies and creative problem-solving.
            </motion.p>
          </div>

          {/* Project Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                />
                <motion.h3
                  className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className={`mt-2 ${project.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="mt-4"
                >
                  <Button 
                    size="lg" 
                    className={`group bg-white/20 hover:bg-white/30 ${project.textColor}`}
                    onClick={() => setSelectedProject(project)} // now works fine
                  >
                    View Details
                    <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">{selectedProject.details}</p>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-gray-800 text-white hover:bg-gray-700">
                        <FaGithub className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                    
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
