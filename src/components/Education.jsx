import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'

const educationData = [
  {
    title: '10th Grade (SSC)',
    year: '2022',
    result: '86%',
    icon: BookOpen,
    details: 'Passed with distinction from Maharashtra State Board.'
  },
  {
    title: '12th Grade (HSC)',
    year: '2024',
    result: '75%',
    icon: BookOpen,
    details: 'Completed Science stream with focus on Mathematics and Computer Science.'
  },
  {
    title: 'B.Sc. Computer Science (First Year)',
    year: '2024-2025',
    result: '',
    icon: GraduationCap,
    details: 'Currently pursuing at B.K. Birla College. Strong performance in core CS subjects. SY onwards.',
    sems: [
      { name: 'SEM I', sgpa: 9.28 },
      { name: 'SEM II', sgpa: 9.38 }
    ]
  }
]

const Education = () => {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <GraduationCap size={48} className="text-primary-500 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <p className="text-xl text-white/80 mb-8">
            My academic journey and achievements so far.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex flex-col items-center justify-between h-full"
            >
              <edu.icon size={40} className="text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
              <span className="text-white/70 text-lg font-semibold mb-2">{edu.year}</span>
              {edu.sems ? (
                <>
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-2"
                  >
                    <span>View SGPA Details</span>
                    {openIdx === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <AnimatePresence>
                    {openIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full mt-2"
                      >
                        {edu.sems.map((sem) => (
                          <div key={sem.name} className="mb-4 text-left">
                            <div className="flex justify-between mb-1">
                              <span className="text-white font-medium">{sem.name}</span>
                              <span className="text-primary-400 font-bold">{sem.sgpa}</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(sem.sgpa/10)*100}%` }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-white/80 text-sm mb-4">{edu.details}</p>
                </>
              ) : (
                <>
                  <span className="text-primary-400 text-xl font-bold mb-2">{edu.result}</span>
                  <p className="text-white/80 text-sm mb-4">{edu.details}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 