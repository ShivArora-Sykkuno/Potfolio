"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import { GlobalStyles } from "@mui/material";
import { BsBarChartFill } from "react-icons/bs";
import { 
  FaPython, 
  FaJava, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiTensorflow, 
  // SiPowerbi, 
  SiN8N, 
  SiLangchain 
} from "react-icons/si";
import { MdTableChart } from "react-icons/md";

// Custom scrollbar styling
const scrollbarStyles = (
  <GlobalStyles
    styles={{
      "*::-webkit-scrollbar": { width: "8px" },
      "*::-webkit-scrollbar-track": { background: "transparent" },
      "*::-webkit-scrollbar-thumb": {
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "20px",
      },
      "*::-webkit-scrollbar-thumb:hover": {
        background: "rgba(255, 255, 255, 0.7)",
      },
    }}
  />
);

// Skill interface
interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  description: string;
  projects: string[];
}

// Main Component
export function SkillSection() {
  const [showLevel, setShowLevel] = useState<boolean>(false);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<number>(3);

  const toggleSkillExpansion = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  const showMoreSkills = () => {
    setVisibleSkills((prev) => Math.min(prev + 3, skills.length));
  };

  const skills: Skill[] = [
  { 
    name: "Python", 
    level: 90, 
    icon: FaPython, 
    description: "Versatile programming language for AI, ML, and automation.",
    projects: ["Image Caption Generator", "Stock Bot", "Data Analysis Tool"]
  },
  { 
    name: "TensorFlow", 
    level: 80, 
    icon: SiTensorflow, 
    description: "Building and training deep learning models efficiently.",
    projects: ["Image Caption Generator", "Stock Bot"]
  },
  { 
    name: "LangGraph", 
    level: 77, 
    icon: SiLangchain, 
    description: "Framework for building agentic AI systems with dynamic reasoning.",
    projects: ["SQL Agent"]
  },
  { 
    name: "n8n", 
    level: 85, 
    icon: SiN8N, 
    description: "Workflow automation tool for integrating AI and APIs seamlessly.",
    projects: ["SQL Agent", "Automation Pipelines"]
  },
  { 
    name: "SQL", 
    level: 81, 
    icon: FaDatabase, 
    description: "Designing, optimizing, and querying relational databases.",
    projects: ["SQL Agent", "Data Management System"]
  },
  { 
    name: "Excel", 
    level: 75, 
    icon: MdTableChart, 
    description: "Data visualization and statistical modeling using Excel.",
    projects: ["UK Traffic Accidents"]
  },
  { 
    name: "Power BI", 
    level: 85, 
    icon: BsBarChartFill, 
    description: "Creating interactive dashboards and analytical reports.",
    projects: ["UK Traffic Accidents"]
  },
  { 
    name: "Java", 
    level: 65, 
    icon: FaJava, 
    description: "Object-oriented programming for scalable software development.",
    projects: ["Hotel Management System"]
  },
];

  return (
    <>
      {scrollbarStyles}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-background to-secondary overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-primary"
            >
              My Skills
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Here’s a collection of my technical expertise and tools I use to
              build intelligent systems.
            </motion.p>
            <Button
              onClick={() => setShowLevel(!showLevel)}
              className="mb-8 transition-colors duration-300 hover:bg-purple-600"
            >
              {showLevel ? "Hide Levels" : "Show Levels"}
            </Button>
          </div>

          {/* Skill Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {skills.slice(0, visibleSkills).map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                    }}
                    exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      transition: { duration: 0.3 },
                    }}
                    className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, hsl(${
                        (index * 50) % 360
                      }, 70%, 50%), hsl(${(index * 50 + 180) % 360}, 70%, 50%))`,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="p-6 relative z-10 text-center">
                      <div className="flex justify-center mb-4">
                        <Icon className="text-white text-5xl drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {skill.name}
                      </h3>
                      {showLevel && (
                        <div className="w-full bg-white/30 rounded-full h-2.5 mb-4 overflow-hidden">
                          <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              delay: 0.3,
                              duration: 1.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      )}
                      <p className="text-white mb-4 opacity-90">
                        {skill.description}
                      </p>

                      {/* More Details Button */}

                      {/* <Button
                        size="sm"
                        className="group relative overflow-hidden transition-colors duration-300"
                        onClick={() => toggleSkillExpansion(skill.name)}
                        style={{
                          backgroundColor: `hsl(${(index * 50) % 360}, 70%, 50%)`,
                        }}
                      >
                        <span className="relative z-10">
                          {expandedSkill === skill.name
                            ? "Less Details"
                            : "More Details"}
                        </span>
                        <motion.span
                          className="absolute inset-0"
                          initial={{ x: "100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            backgroundColor: `hsl(${
                              (index * 50 + 180) % 360
                            }, 70%, 50%)`,
                          }}
                        />
                        {expandedSkill === skill.name ? (
                          <X className="ml-2 h-4 w-4 relative z-10" />
                        ) : (
                          <ChevronRight className="ml-2 h-4 w-4 relative z-10" />
                        )}
                          
                      </Button> */}
                    </div>

                    {/* Expanded view */}
                    {expandedSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 p-6 bg-black/70 backdrop-blur-lg overflow-y-auto rounded-lg"
                      >
                        <Button
                          size="sm"
                          className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 transition-colors duration-300 z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSkillExpansion(skill.name);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <h4 className="text-white font-semibold mb-4 text-2xl">
                          {skill.name}
                        </h4>
                        <p className="text-white/90 mb-4">{skill.description}</p>
                        <h5 className="text-white font-semibold mb-2 text-xl">
                          Related Projects 📂:
                        </h5>
                        <ul className="text-white list-disc list-inside space-y-1">
                          {skill.projects.map((p, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              {p}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {visibleSkills < skills.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <Button
                onClick={showMoreSkills}
                size="lg"
                className="group transition-colors duration-300 hover:bg-green-600"
              >
                Show More
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
}
