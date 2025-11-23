"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"
import { ArrowUpRight } from "lucide-react"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Cinematography", "Post-Production", "Production"]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8">
            <span className="text-sm tracking-[0.3em] text-white/50 font-medium">JOURNAL</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tight">
            Thoughts &<br />
            <span className="text-[#D4AF37] italic">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            A collection of essays, tutorials, and reflections on the craft of visual storytelling, cinematography, and
            the creative process.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 border-b border-white/10 pb-6">
        <div className="flex gap-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-2 text-sm tracking-wider transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                  : "text-white/40 hover:text-white/70 border-b-2 border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-0">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-white/10 last:border-b-0"
            >
              <Link href={`/blogs/${post.slug}`}>
                <div className="group cursor-pointer py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-white/[0.02] transition-colors duration-500 px-6 -mx-6">
                  <div className="hidden md:block md:col-span-1">
                    <span className="text-6xl font-serif font-light text-white/10 group-hover:text-[#D4AF37]/30 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider text-white/40">
                      <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] font-medium rounded-full">
                        {post.category}
                      </span>
                      <span>{post.publishedDate}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                      {post.title}
                    </h2>

                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">{post.excerpt}</p>

                    <div className="flex items-center gap-4 pt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{post.author.name}</p>
                        <p className="text-xs text-white/50">{post.author.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 relative">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 pt-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-white/60">Subscribe to receive our latest articles and insights.</p>
          </div>
          <button className="px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-[#D4AF37] hover:text-black transition-colors duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}
