import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { Terminal } from "lucide-react";

interface SkillItemProps {
  name: string;
  tools: string[];
  index: number;
}

function SkillItem({ name, tools, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-3"
    >
      <div className="flex items-center gap-2">
        <Terminal className="h-4 w-4 text-green-500" />
        <h4 className="font-medium text-green-400">{name}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <motion.span
            key={tool}
            className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-md border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/20 transition-colors cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background via-black/50 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <Terminal className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
          </div>
        </MotionWrapper>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="space-y-6"
            >
              <GlassCard className="p-6 border-green-500/20 hover:border-green-500/40 transition-colors backdrop-blur-sm bg-black/40">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-medium text-green-400">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {category.skills.map((skill, index) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      tools={skill.tools}
                      index={index}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
