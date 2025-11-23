export interface Project {
  id: number
  title: string
  slug: string
  client: string
  category: string
  image: string
  aspectRatio: "16:9" | "portrait" | "square"
  featured: boolean
  year: number
  description: string
  credits: {
    role: string
    name: string
  }[]
  gallery?: string[]
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Corporate Brand Film 2024",
    slug: "corporate-brand-film-2024",
    client: "TechCorp Industries",
    category: "Corporate",
    image: "/images/1.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2024,
    description:
      "A high-impact brand film showcasing TechCorp's innovation and global reach. We utilized dynamic camera movements and cutting-edge motion graphics to visualize their complex technological solutions.",
    credits: [
      { role: "Director", name: "Alex Morgan" },
      { role: "DOP", name: "Sarah Chen" },
      { role: "Editor", name: "Mike Ross" },
    ],
  },
  {
    id: 2,
    title: "Fashion Week Highlights",
    slug: "fashion-week-highlights",
    client: "StyleMag",
    category: "Fashion",
    image: "/images/2.png",
    aspectRatio: "portrait",
    featured: false,
    year: 2024,
    description:
      "Capturing the energy and elegance of Fashion Week. This highlight reel focuses on the intricate details of the garments and the electric atmosphere of the runway.",
    credits: [
      { role: "Director", name: "Elena V." },
      { role: "Camera", name: "David K." },
    ],
  },
  {
    id: 3,
    title: "Wedding Cinematic Story",
    slug: "wedding-cinematic-story",
    client: "Private Client",
    category: "Wedding",
    image: "/images/3.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2024,
    description:
      "A timeless love story captured through a cinematic lens. We focused on candid moments and raw emotions to create a wedding film that feels like a movie.",
    credits: [
      { role: "Cinematographer", name: "James Wilson" },
      { role: "Editor", name: "Emma Thompson" },
    ],
  },
  {
    id: 4,
    title: "Product Launch Campaign",
    slug: "product-launch-campaign",
    client: "InnovateTech",
    category: "Product Video",
    image: "/images/4.png",
    aspectRatio: "square",
    featured: false,
    year: 2024,
    description:
      "A sleek and modern product launch video designed for social media impact. High-speed cinematography meets bold typography.",
    credits: [
      { role: "Director", name: "Chris P." },
      { role: "Motion Graphics", name: "Sam L." },
    ],
  },
  {
    id: 5,
    title: "Real Estate Showcase",
    slug: "real-estate-showcase",
    client: "Luxury Homes",
    category: "Real Estate",
    image: "/images/5.png",
    aspectRatio: "16:9",
    featured: false,
    year: 2024,
    description:
      "A tour of a multi-million dollar property. Drone shots and smooth gimbal work highlight the architectural beauty and vast landscapes.",
    credits: [
      { role: "Drone Operator", name: "Tom H." },
      { role: "Editor", name: "Lisa M." },
    ],
  },
  {
    id: 6,
    title: "Social Media Series",
    slug: "social-media-series",
    client: "Digital Agency",
    category: "Social Media",
    image: "/images/6.png",
    aspectRatio: "portrait",
    featured: false,
    year: 2024,
    description:
      "A series of engaging short-form videos optimized for vertical viewing. Fast-paced editing and trending audio integration.",
    credits: [
      { role: "Content Creator", name: "Ryan G." },
      { role: "Editor", name: "Ryan G." },
    ],
  },
  {
    id: 7,
    title: "Documentary Short",
    slug: "documentary-short",
    client: "Arts Foundation",
    category: "Documentary",
    image: "/images/7.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2023,
    description:
      "An intimate look into the life of a local artist. This documentary explores the creative process and the struggles of pursuing art in the modern world.",
    credits: [
      { role: "Director", name: "Sophia L." },
      { role: "Producer", name: "Mark T." },
    ],
  },
  {
    id: 8,
    title: "Event Coverage Highlight",
    slug: "event-coverage-highlight",
    client: "Conference 2024",
    category: "Event",
    image: "/images/9.png",
    aspectRatio: "square",
    featured: false,
    year: 2024,
    description:
      "Comprehensive coverage of a major tech conference. Interviews, keynote highlights, and b-roll of the exhibition floor.",
    credits: [
      { role: "Lead Camera", name: "Ben J." },
      { role: "Editor", name: "Sarah K." },
    ],
  },
  {
    id: 9,
    title: "Commercial Advertisement",
    slug: "commercial-advertisement",
    client: "Brand Co",
    category: "Commercials",
    image: "/images/10.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2024,
    description:
      "A high-energy commercial spot for national television. Combining live-action footage with 3D product integration.",
    credits: [
      { role: "Director", name: "Michael Bay-ish" },
      { role: "VFX", name: "Pixel Studio" },
    ],
  },
  {
    id: 10,
    title: "3D Animation Sequence",
    slug: "3d-animation-sequence",
    client: "Animation Studio",
    category: "Animation",
    image: "/images/11.png",
    aspectRatio: "portrait",
    featured: false,
    year: 2024,
    description: "A fully 3D animated sequence demonstrating character rigging and fluid simulation.",
    credits: [
      { role: "Animator", name: "John D." },
      { role: "Renderer", name: "RenderFarm Inc." },
    ],
  },
  {
    id: 11,
    title: "Music Video Production",
    slug: "music-video-production",
    client: "Indie Artist",
    category: "Entertainment",
    image: "/images/12.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2024,
    description: "A narrative-driven music video with surreal visual effects and moody lighting.",
    credits: [
      { role: "Director", name: "Luna S." },
      { role: "Colorist", name: "ColorGrade Pro" },
    ],
  },
  {
    id: 12,
    title: "Educational Series",
    slug: "educational-series",
    client: "Learning Platform",
    category: "Educational",
    image: "/images/13.png",
    aspectRatio: "16:9",
    featured: false,
    year: 2024,
    description: "Clear and concise educational content with animated diagrams and on-screen text.",
    credits: [
      { role: "Producer", name: "EduTech" },
      { role: "Host", name: "Dr. Smith" },
    ],
  },
  {
    id: 13,
    title: "Interview Special",
    slug: "interview-special",
    client: "News Network",
    category: "Interview",
    image: "/images/16.png",
    aspectRatio: "portrait",
    featured: false,
    year: 2024,
    description: "A deep-dive interview with a prominent industry leader. Multi-cam setup with professional lighting.",
    credits: [
      { role: "Interviewer", name: "Jane Doe" },
      { role: "Camera", name: "News Crew" },
    ],
  },
  {
    id: 14,
    title: "Lifestyle Brand Campaign",
    slug: "lifestyle-brand-campaign",
    client: "Urban Wear",
    category: "Lifestyle",
    image: "/images/17.png",
    aspectRatio: "square",
    featured: true,
    year: 2024,
    description: "A lifestyle campaign shot on location in downtown Tokyo. Focusing on street culture and fashion.",
    credits: [
      { role: "Photographer", name: "Kenji T." },
      { role: "Videographer", name: "Kenji T." },
    ],
  },
  {
    id: 15,
    title: "News Edit Package",
    slug: "news-edit-package",
    client: "Daily News",
    category: "News Edit",
    image: "/images/18.png",
    aspectRatio: "16:9",
    featured: false,
    year: 2024,
    description: "Fast-turnaround news package covering breaking events. Edited on-site for immediate broadcast.",
    credits: [{ role: "Editor", name: "News Desk" }],
  },
  {
    id: 16,
    title: "Motion Graphics Reel",
    slug: "motion-graphics-reel",
    client: "Creative Studio",
    category: "Motion Graphics",
    image: "/images/19.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2024,
    description:
      "A compilation of our best motion graphics work, featuring kinetic typography, logo reveals, and HUD designs.",
    credits: [{ role: "Lead Designer", name: "Motion Master" }],
  },
]
