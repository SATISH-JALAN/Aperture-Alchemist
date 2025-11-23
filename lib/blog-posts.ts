export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: {
    name: string
    role: string
    avatar: string
  }
  publishedDate: string
  readTime: string
  coverImage: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mastering-cinematic-lighting",
    title: "Mastering Cinematic Lighting: A Guide for Filmmakers",
    excerpt:
      "Discover the secrets behind creating dramatic, movie-quality lighting that transforms your visual storytelling.",
    content: "Lighting is the soul of cinematography...",
    category: "Cinematography",
    author: {
      name: "Alex Rivera",
      role: "Director of Photography",
      avatar: "/images/1.png",
    },
    publishedDate: "March 15, 2024",
    readTime: "8 min read",
    coverImage: "/images/2.png",
    tags: ["Lighting", "Cinematography", "Tutorial"],
  },
  {
    slug: "color-grading-workflow",
    title: "Professional Color Grading Workflow",
    excerpt: "Learn the industry-standard color grading techniques used in Hollywood productions.",
    content: "Color grading is where magic happens...",
    category: "Post-Production",
    author: {
      name: "Sarah Chen",
      role: "Colorist",
      avatar: "/images/3.png",
    },
    publishedDate: "March 10, 2024",
    readTime: "12 min read",
    coverImage: "/images/4.png",
    tags: ["Color Grading", "Post-Production", "Workflow"],
  },
  {
    slug: "storytelling-through-composition",
    title: "Storytelling Through Visual Composition",
    excerpt: "How to use framing, angles, and composition to elevate your narrative.",
    content: "Every frame tells a story...",
    category: "Cinematography",
    author: {
      name: "Marcus Thompson",
      role: "Creative Director",
      avatar: "/images/5.png",
    },
    publishedDate: "February 28, 2024",
    readTime: "10 min read",
    coverImage: "/images/6.png",
    tags: ["Composition", "Storytelling", "Visual Design"],
  },
  {
    slug: "behind-the-scenes-documentary",
    title: "Behind the Scenes: Creating Award-Winning Documentaries",
    excerpt: "An inside look at our documentary production process from concept to completion.",
    content: "Documentary filmmaking requires patience...",
    category: "Production",
    author: {
      name: "Elena Rodriguez",
      role: "Producer",
      avatar: "/images/7.png",
    },
    publishedDate: "February 20, 2024",
    readTime: "15 min read",
    coverImage: "/images/9.png",
    tags: ["Documentary", "Production", "Case Study"],
  },
  {
    slug: "sound-design-essentials",
    title: "Sound Design Essentials for Video Production",
    excerpt: "Why audio is 50% of your video and how to get it right every time.",
    content: "Great visuals deserve great audio...",
    category: "Post-Production",
    author: {
      name: "David Kim",
      role: "Sound Designer",
      avatar: "/images/10.png",
    },
    publishedDate: "February 15, 2024",
    readTime: "9 min read",
    coverImage: "/images/11.png",
    tags: ["Sound Design", "Audio", "Production"],
  },
  {
    slug: "modern-editing-techniques",
    title: "Modern Editing Techniques for Engaging Content",
    excerpt: "Stay ahead of the curve with these contemporary editing styles and transitions.",
    content: "Editing is where raw footage becomes art...",
    category: "Post-Production",
    author: {
      name: "Jessica Park",
      role: "Lead Editor",
      avatar: "/images/12.png",
    },
    publishedDate: "February 8, 2024",
    readTime: "11 min read",
    coverImage: "/images/13.png",
    tags: ["Editing", "Techniques", "Tutorial"],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
