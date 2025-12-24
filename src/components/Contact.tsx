import { Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/dev-harshhh19/',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/harshad-nikam-311734281',
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid Background with vertical fade */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-12 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Reach out to <span className="gradient-text">me</span> directly...!
          </h2>
        </div>

        {/* CTA Button */}
        <div className="mb-12 animate-on-scroll animation-delay-200">
          <a
            href="mailto:nikamharshadshivaji@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Let's get in touch</span>
            <Send size={18} className="rotate-45" />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 animate-on-scroll animation-delay-400">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact