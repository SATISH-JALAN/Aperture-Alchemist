"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Heart, Camera, Film, Sparkles } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "15+", icon: <Award className="w-8 h-8" /> },
    { label: "Projects Completed", value: "478", icon: <Film className="w-8 h-8" /> },
    { label: "Happy Clients", value: "350+", icon: <Heart className="w-8 h-8" /> },
    { label: "Team Members", value: "24", icon: <Users className="w-8 h-8" /> },
  ]

  const values = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge techniques to deliver exceptional visual experiences.",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Excellence",
      description: "Every frame matters. We maintain the highest standards in every aspect of production.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Passion",
      description: "Our love for storytelling drives everything we do. We live and breathe cinema.",
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Authenticity",
      description: "We believe in genuine storytelling that resonates with audiences on a deeper level.",
    },
  ]

  const team = [
    { name: "Michael Chen", role: "Founder & Director", image: "/images/1.png" },
    { name: "Sarah Williams", role: "Creative Director", image: "/images/2.png" },
    { name: "David Rodriguez", role: "Director of Photography", image: "/images/3.png" },
    { name: "Emma Thompson", role: "Lead Producer", image: "/images/4.png" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <img src="/images/5.png" alt="About Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-white mb-6">OUR STORY</h1>
          <p className="text-2xl md:text-3xl text-[#FFD700] font-light mb-8">
            Transforming Visions Into Cinematic Reality
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Since 2015, we have been crafting captivating visual narratives defined by creativity, innovation, and an
            unwavering commitment to excellence in video production.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-[#FFD700]">{stat.icon}</div>
                <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-32 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
              OUR <span className="text-[#FFD700]">MISSION</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is
              an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, event
              coverage, or animation, we approach each endeavor with creativity, enthusiasm, and a commitment to
              exceeding our clients' expectations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              OUR <span className="text-[#FFD700]">VALUES</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FFD700]/50 transition-all duration-500"
              >
                <div className="text-[#FFD700] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              MEET THE <span className="text-[#FFD700]">TEAM</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">The creative minds behind every masterpiece</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#FFD700] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
            LET'S CREATE <span className="text-[#FFD700]">TOGETHER</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Ready to bring your vision to life? Let's start a conversation about your next project.
          </p>
          <button className="px-12 py-5 bg-[#FFD700] text-black font-semibold text-lg rounded-full hover:bg-[#E6C200] transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] hover:scale-105">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  )
}
