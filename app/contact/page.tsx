import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/film-set-studio-camera-crew-dark-cinematic.jpg"
            alt="Production Studio Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
          <div className="max-w-4xl">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white mb-8">
              Contact <span className="opacity-50 italic font-light">us</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              We love hearing from you! Whether you're ready to discuss your next project, have a question, or just want
              to say hello, we're all ears. Our team is here to make your experience exceptional. Drop us a message, and
              let's start a conversation.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 md:left-16 flex flex-col items-center gap-4 z-10">
          <span className="writing-vertical-rl text-xs font-medium tracking-[0.2em] text-white/70 uppercase rotate-180">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-white/50" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="w-full rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-hidden relative">
            {/* Background Grid/Glow Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Left Column: Info */}
            <div className="relative z-10 flex flex-col justify-between gap-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-12">Visit us</h2>

                <div className="space-y-10 font-sans">
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Address</p>
                      <p className="text-white text-lg leading-relaxed">
                        47 Adarsha Nagar,  Kolkata-700105, <br />
                        Kolkata, 700156
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Hours</p>
                      <p className="text-white text-lg">Everyday, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Email</p>
                      <a
                        href="mailto:aperturealchemistofficial@gmail.com"
                        className="text-white text-lg hover:text-primary transition-colors"
                      >
                        aperturealchemistofficial@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Phone</p>
                      <a href="tel:+919123332011" className="text-white text-lg hover:text-primary transition-colors">
                        +91 9123332011
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-12">
                Question? Send us a message. Don't be shy
              </h2>

              <form className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 rounded-xl px-6"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@gmail.com"
                      className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 rounded-xl px-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 rounded-xl px-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 rounded-xl px-6 py-4 resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full h-14 bg-primary text-black hover:bg-primary/90 text-lg font-semibold rounded-xl mt-4 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
