import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, FileText, X } from 'lucide-react'

const certificates = [
  {
    title: 'Full Stack Java Development',
    file: `${import.meta.env.BASE_URL}certificates/FS-java-development-certificate.jpg`,
    description: 'Learned end-to-end web application development using Java, Spring Boot, and modern frontend frameworks. Managed real-world projects, collaborated in teams, and implemented RESTful APIs, authentication, and deployment best practices.'
  },
  {
    title: 'EA Certification',
    file: `${import.meta.env.BASE_URL}certificates/EA_Certification.jpg`,
    description: 'Gained expertise in enterprise architecture principles, system integration, and IT strategy. Managed architectural documentation and participated in case studies to solve real business problems.'
  },
  {
    title: 'AWS Solution Architecture',
    file: `${import.meta.env.BASE_URL}certificates/AWS Solution Architecture.jpg`,
    description: 'Mastered AWS cloud services, solution design, and cost optimization. Managed cloud deployments, security, and scalability for distributed applications.'
  },
]

const Certifications = () => {
  const [openCert, setOpenCert] = useState(null)

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <BookOpen size={48} className="text-primary-500 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Here are some of my earned certifications. Click to view more details and see the certificate.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -16 }}
              className="glass-effect rounded-xl p-6 flex flex-col justify-between card-hover"
            >
              <FileText size={40} className="text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-white/80 text-sm mb-4">{cert.description}</p>
              <button
                onClick={() => setOpenCert(cert)}
                className="mt-auto inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>View Certificate</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal for PDF preview */}
      {openCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full h-[80vh] flex flex-col">
            <button
              onClick={() => setOpenCert(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-primary-500 p-2"
            >
              <X size={28} />
            </button>
            <div className="flex-1 overflow-auto rounded-b-lg flex items-center justify-center bg-gray-100">
              <img
                src={openCert.file}
                alt={openCert.title}
                className="max-h-full max-w-full object-contain rounded-b-lg shadow-lg"
              />
            </div>
            <div className="p-4 border-t bg-gray-50 text-left">
              <h3 className="text-lg font-bold mb-1 text-gray-900">{openCert.title}</h3>
              <p className="text-gray-700 text-sm">{openCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications 