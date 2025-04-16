import { experience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-b from-background via-black/50 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <Terminal className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
        </MotionWrapper>
        <div className="mb-8">
          {experience.map((job: Experience, index: number) => (
            <TimelineItem
              key={job.company + job.period}
              title={`👨‍💻 ${job.position} | ${job.company}`}
              subtitle={`🌍 ${job.location}`}
              date={`📅 ${job.period}`}
              isLast={index === experience.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-black/40 backdrop-blur-sm backdrop-filter rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/10 mr-2">
                    <Terminal className="h-4 w-4 text-green-500" />
                  </div>
                  <h4 className="text-sm font-medium text-green-400">Key Achievements</h4>
                </div>
                <ul className="list-none ml-4 space-y-2 text-sm">
                  {job.achievements.map((achievement: string, i: number) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground relative pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
