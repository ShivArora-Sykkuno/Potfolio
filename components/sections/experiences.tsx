"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Calendar, X } from 'lucide-react'
import Image from "next/image"

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  companyLogo: string;
  color: string;
  linkedinUrl: string;
};

const experiences = [
  {
    role: "Business Analyst",
    company: "S.A. Square",
    duration: "November 2022 – April 2023",
    description: "Optimized business operations by integrating ML models, database automation, and Power BI dashboards for data-driven decision-making.",
    technologies: ["Python", "Excel", "SQL"],
    companyLogo: "/placeholder.svg?height=48&width=48",
    color: "from-purple-400 to-purple-600",
    linkedinUrl: "https://www.linkedin.com/company/sa-papers/",
  },
  {
    role: "Jr. Data Scientist",
    company: "KDataScience",
    duration: "April 2023 – October 2023",
    description: "Enhanced financial analysis and client strategy through predictive ML models, advanced Excel automation, and data-driven insights.",
    technologies: ["Python", "SQL", "PowerBI", "Excel"],
    companyLogo: "/placeholder.svg?height=48&width=48",
    color: "from-red-400 to-red-600",
    linkedinUrl: "https://www.linkedin.com/company/kdatascience/posts/?feedView=all",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
}

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section id="experiences" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Work Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A selection of my recent professional roles where I've grown my skills and worked on exciting projects.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {experiences.map((experience) => (
              <motion.div
                key={experience.company}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className="w-full max-w-sm"
              >
                <Card 
                  className={`p-6 bg-gradient-to-br ${experience.color} shadow-xl rounded-lg h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-4">

                      {/* Image after the Companies name */}
                      {/* <div className="w-12 h-12 relative rounded-full overflow-hidden bg-white p-1">
                        {<Image
                          src={experience.companyLogo}
                          alt={experience.company}
                          layout="fill"
                          objectFit="cover"
                        /> 
                      </div> */}
                      <div>
                        <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                        <p className="text-sm text-gray-200">{experience.company}</p>
                        <p className="text-sm text-gray-200">{experience.duration}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-100 mb-4">{experience.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Only the View Details button on the card */}
                  <div className="flex mt-auto">
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white text-gray-800 hover:bg-gray-200"
                      onClick={() => setSelectedExperience(experience)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal with LinkedIn button */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-gradient-to-br ${selectedExperience.color} p-8 rounded-lg shadow-2xl max-w-2xl w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedExperience.role}</h2>
                  <p className="text-xl text-gray-200">{selectedExperience.company}</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white hover:bg-white hover:text-gray-800"
                  onClick={() => setSelectedExperience(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <p className="text-gray-100 mb-4">{selectedExperience.description}</p>
              <p className="text-gray-200 mb-4">{selectedExperience.duration}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedExperience.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>

              {/* LinkedIn button only inside modal */}
              <div className="flex justify-end space-x-4">
                <a
                  href={selectedExperience.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" className="bg-white text-gray-800 hover:bg-gray-200">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Visit LinkedIn
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
