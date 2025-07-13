import { motion } from 'framer-motion'
import { Code, Database, Cloud, Server, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 65 },
        { name: "ReactJS", level: 62 },
        { name: "HTML", level: 64 },
        { name: "CSS", level: 63 },
        { name: "TypeScript", level: 60 },
        { name: "Angular", level: 40, learning: true }
      ]
    },
    {
      id: 2,
      title: "Backend & APIs",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 63 },
        { name: "Python", level: 60 },
        { name: "Flask", level: 55 },
        { name: "Django", level: 40, learning: true },
        { name: "REST", level: 35, learning: true }
      ]
    },
    {
      id: 3,
      title: "Database & Tools",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 60 },
        { name: "Git", level: 65 },
        { name: "GitHub", level: 62 },
        { name: "Postman", level: 55 },
        { name: "AWS", level: 45, learning: true }
      ]
    },
    {
      id: 4,
      title: "Other Tools",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", level: 50 },
        { name: "Visual Studio Code", level: 65 },
        { name: "Chrome", level: 60 },
        { name: "Docker", level: 35, learning: true },
        { name: "IAM", level: 30, learning: true }
      ]
    },
    {
      id: 5,
      title: "Programming Languages",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "C++", level: 60 },
        { name: "Python", level: 55 },
        { name: "SQL", level: 40, learning: true },
        { name: "Java", level: 55, learning: true },
        { name: "Kotlin", level: 30, learning: true }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My core technical skills and tools I use in development. Skills marked as "Learning" are currently being improved.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              whileHover={{ y: -16 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium">
                        {skill.name} {skill.learning && <span className="text-xs text-yellow-400 ml-2">(Learning)</span>}
                      </span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 