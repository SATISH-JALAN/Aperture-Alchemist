export interface Photo {
  id: number
  src: string
  alt: string
}

export interface Album {
  id: number
  slug: string
  title: string
  category: string
  coverImage: string
  previewImages: string[]
  photoCount: number
  description: string
  date: string
  photos: Photo[]
}

export const albums: Album[] = [
  {
    id: 1,
    slug: "speed-demons",
    title: "Speed Demons",
    category: "Event",
    coverImage: "/images/1.png",
    previewImages: ["/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png"],
    photoCount: 24,
    description: "High-octane racing event capturing the thrill of speed",
    date: "2024",
    photos: [
      { id: 1, src: "/images/1.png", alt: "Race car on track" },
      { id: 2, src: "/images/2.png", alt: "Pit stop action" },
      { id: 3, src: "/images/3.png", alt: "Crowd cheering" },
      { id: 4, src: "/images/4.png", alt: "Winner podium" },
      { id: 5, src: "/images/5.png", alt: "Checkered flag" },
      { id: 6, src: "/images/6.png", alt: "Close up of engine" },
      { id: 7, src: "/images/7.png", alt: "Driver portrait" },
      { id: 8, src: "/images/9.png", alt: "Start line lineup" },
    ],
  },
  {
    id: 2,
    slug: "eternal-vows",
    title: "Eternal Vows",
    category: "Wedding",
    coverImage: "/images/2.png",
    previewImages: ["/images/10.png", "/images/11.png", "/images/12.png", "/images/13.png"],
    photoCount: 48,
    description: "A beautiful celebration of love and commitment",
    date: "2024",
    photos: [
      { id: 1, src: "/images/2.png", alt: "Bride walking down aisle" },
      { id: 2, src: "/images/10.png", alt: "Ring exchange" },
      { id: 3, src: "/images/11.png", alt: "First kiss" },
      { id: 4, src: "/images/12.png", alt: "Reception dance" },
      { id: 5, src: "/images/13.png", alt: "Cake cutting" },
      { id: 6, src: "/images/16.png", alt: "Couple portrait" },
      { id: 7, src: "/images/17.png", alt: "Bridal party" },
      { id: 8, src: "/images/18.png", alt: "Venue decoration" },
    ],
  },
  {
    id: 3,
    slug: "wanderlust",
    title: "Wanderlust",
    category: "Travel",
    coverImage: "/images/3.png",
    previewImages: ["/images/4.png", "/images/5.png", "/images/6.png", "/images/7.png"],
    photoCount: 36,
    description: "Adventures across breathtaking landscapes",
    date: "2024",
    photos: [
      { id: 1, src: "/images/3.png", alt: "Mountain peak" },
      { id: 2, src: "/images/4.png", alt: "Desert sunset" },
      { id: 3, src: "/images/5.png", alt: "Jungle waterfall" },
      { id: 4, src: "/images/6.png", alt: "City skyline" },
      { id: 5, src: "/images/7.png", alt: "Local market" },
      { id: 6, src: "/images/9.png", alt: "Beach waves" },
    ],
  },
  {
    id: 4,
    slug: "urban-portraits",
    title: "Urban Portraits",
    category: "Portrait",
    coverImage: "/images/4.png",
    previewImages: ["/images/10.png", "/images/11.png", "/images/12.png", "/images/13.png"],
    photoCount: 20,
    description: "Capturing personalities in city environments",
    date: "2024",
    photos: [
      { id: 1, src: "/images/4.png", alt: "Street style" },
      { id: 2, src: "/images/10.png", alt: "Subway shot" },
      { id: 3, src: "/images/11.png", alt: "Neon lights" },
      { id: 4, src: "/images/12.png", alt: "Coffee shop candid" },
      { id: 5, src: "/images/13.png", alt: "Rooftop view" },
    ],
  },
  {
    id: 5,
    slug: "urban-chronicles",
    title: "Urban Chronicles",
    category: "Portrait",
    coverImage: "/images/4.png",
    previewImages: ["/images/10.png", "/images/11.png", "/images/12.png", "/images/13.png"],
    photoCount: 20,
    description: "Capturing personalities in city environments",
    date: "2024",
    photos: [
      { id: 1, src: "/images/4.png", alt: "Street style" },
      { id: 2, src: "/images/10.png", alt: "Subway shot" },
      { id: 3, src: "/images/11.png", alt: "Neon lights" },
      { id: 4, src: "/images/12.png", alt: "Coffee shop candid" },
      { id: 5, src: "/images/13.png", alt: "Rooftop view" },
    ],
  },
  {
    id: 6,
    slug: "corporate-gala",
    title: "Corporate Gala",
    category: "Event",
    coverImage: "/images/5.png",
    previewImages: ["/images/6.png", "/images/7.png", "/images/9.png", "/images/10.png"],
    photoCount: 32,
    description: "Annual company celebration and awards night",
    date: "2024",
    photos: [
      { id: 1, src: "/images/5.png", alt: "Keynote speaker" },
      { id: 2, src: "/images/6.png", alt: "Award presentation" },
      { id: 3, src: "/images/7.png", alt: "Networking session" },
      { id: 4, src: "/images/9.png", alt: "Gala dinner" },
      { id: 5, src: "/images/10.png", alt: "Team photo" },
    ],
  },
  {
    id: 7,
    slug: "nature-escape",
    title: "Nature Escape",
    category: "Travel",
    coverImage: "/images/6.png",
    previewImages: ["/images/11.png", "/images/12.png", "/images/13.png", "/images/16.png"],
    photoCount: 28,
    description: "Serene moments in natural environments",
    date: "2023",
    photos: [
      { id: 1, src: "/images/6.png", alt: "Forest path" },
      { id: 2, src: "/images/11.png", alt: "River flowing" },
      { id: 3, src: "/images/12.png", alt: "Bird watching" },
      { id: 4, src: "/images/13.png", alt: "Sunrise over lake" },
      { id: 5, src: "/images/16.png", alt: "Flower macro" },
    ],
  },
]
