export const categories = [
  "All",
  "Indoor",
  "Outdoors",
  "Kids & Baby",
  "Tech & Gadgets",
  "Mobility & Rides",
  "Pet Products",
  "Offbeat"
];

export const rooms = [
  "All",
  "Bedrooms",
  "Living Areas",
  "Bathrooms",
  "Kitchens",
  "Dining Areas",
  "Offices",
  "Man Caves",
  "Aquariums",
  "Patios & Backyards",
  "Pools & Water Fun"
];

/*
  Replace IMAGE_URL values with the exact Inspiring Designs image URLs
  you want to use. The UI always has a local-looking CSS fallback.
*/
const img = (query) =>
  `https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85&${encodeURIComponent(query)}`;

export const products = [
  {
    id: 1,
    name: "Adult Inflatable Car Bed",
    category: "Indoor",
    room: "Bedrooms",
    price: 899,
    badge: "Featured",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/09/inflatable-car-adult-bed.jpg",
    description: "A dramatic adult-sized car-shaped sleeping concept with a padded body, canopy and integrated lighting."
  },
  {
    id: 2,
    name: "Guitar Aquarium Coffee Table",
    category: "Indoor",
    room: "Living Areas",
    price: 1199,
    badge: "Statement",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/02/guitar-aquarium-coffee-tables.jpg",
    description: "A guitar silhouette combined with a panoramic aquarium and usable tabletop."
  },
  {
    id: 3,
    name: "Corner Pyramid Aquarium",
    category: "Indoor",
    room: "Aquariums",
    price: 749,
    badge: "Space Saver",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/05/corner-pyramid-aquariums.png",
    description: "A triangular aquarium concept designed to turn an unused room corner into a focal point."
  },
  {
    id: 4,
    name: "Inflatable Movie Theater",
    category: "Outdoors",
    room: "Patios & Backyards",
    price: 1599,
    badge: "Popular",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/06/inflatable-patio-movie-theater.jpg",
    description: "An all-in-one backyard cinema concept with seating, screen, lighting and entertainment features."
  },
  {
    id: 5,
    name: "Inflatable Hot Tub Sofa",
    category: "Outdoors",
    room: "Pools & Water Fun",
    price: 1899,
    badge: "Summer",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/09/all-in-one-inflatable-hot-tub-sofa-tv.jpg",
    description: "A playful outdoor lounge concept combining a hot tub, sofa-style seating and entertainment."
  },
  {
    id: 6,
    name: "Robotic Cow Lawn Mower",
    category: "Outdoors",
    room: "Patios & Backyards",
    price: 1299,
    badge: "New",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/09/robot-cow-lawn-mower.jpg",
    description: "A whimsical autonomous yard-care concept disguised as a small robotic cow."
  },
  {
    id: 7,
    name: "Spaceship Kids Bed",
    category: "Kids & Baby",
    room: "Bedrooms",
    price: 999,
    badge: "Kids Pick",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/08/spaceship-kids-bed.jpg",
    description: "A futuristic bedroom centerpiece inspired by a compact spaceship cabin."
  },
  {
    id: 8,
    name: "Inflatable Car Kids Bed",
    category: "Kids & Baby",
    room: "Bedrooms",
    price: 599,
    badge: "Popular",
    image:"https://inspiringdesigns.net/wp-content/uploads/2026/07/inflatable-car-bed.jpg",
    description: "A playful car-shaped inflatable sleeping concept for imaginative children's rooms."
  },
  {
    id: 9,
    name: "Giant Foam Train Bed",
    category: "Kids & Baby",
    room: "Bedrooms",
    price: 799,
    badge: "Fun",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/09/giant-foam-train-bed.jpg",
    description: "A walk-in train-inspired sleeping concept with oversized soft forms."
  },
  {
    id: 10,
    name: "Hugging Caterpillar Sleeping Bag",
    category: "Kids & Baby",
    room: "Bedrooms",
    price: 249,
    badge: "Cute",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/04/hugging-caterpillar-sleeping-bags.jpg",
    description: "A cocoon-style sleeping bag concept designed to wrap around the sleeper."
  },
  {
    id: 11,
    name: "Converting Stroller Bicycle",
    category: "Mobility & Rides",
    room: "Patios & Backyards",
    price: 1299,
    badge: "Family",
    image:"https://inspiringdesigns.net/wp-content/uploads/2026/07/converting-stroller-bicycle.jpg",
    description: "A convertible mobility concept combining stroller functionality with bicycle form."
  },
  {
    id: 12,
    name: "Adult Nature Stroller",
    category: "Mobility & Rides",
    room: "Patios & Backyards",
    price: 1799,
    badge: "Offbeat",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/09/adult-strollers.jpg",
    description: "An oversized stroller concept designed as a humorous outdoor mobility statement."
  },
  {
    id: 13,
    name: "Spider Recliner",
    category: "Offbeat",
    room: "Living Areas",
    price: 999,
    badge: "Unique",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/06/spider-recliners.png",
    description: "A theatrical spider-inspired recliner concept for a bold living space."
  },
  {
    id: 14,
    name: "Tiny Electric Yard Tools",
    category: "Tech & Gadgets",
    room: "Patios & Backyards",
    price: 399,
    badge: "Mini",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/09/tiny-yard-tools.jpg",
    description: "Compact electric yard-tool concepts built around miniature proportions."
  },
  {
    id: 15,
    name: "Smart Kitchen Workstation",
    category: "Tech & Gadgets",
    room: "Kitchens",
    price: 1299,
    badge: "Modern",
    image: "https://inspiringdesigns.net/wp-content/uploads/2026/01/sea-creature-kettles.jpg",
    description: "A futuristic kitchen workstation concept that combines storage, lighting and technology."
  },
  {
    id: 16,
    name: "Hidden Office Wall Desk",
    category: "Indoor",
    room: "Offices",
    price: 699,
    badge: "Space Saver",
    image: "https://inspiringdesigns.net/wp-content/uploads/2023/08/deskog.jpg",
    description: "A compact workspace concept designed to fold neatly into a wall installation."
  },
  {
    id: 17,
    name: "Luxury Conversation Sofa",
    category: "Indoor",
    room: "Living Areas", 
    price: 1499,
    badge: "Premium",
    image: "https://inspiringdesigns.net/wp-content/uploads/2025/09/circular-tv-sofas.jpg",
    description: "A sculptural sofa concept built around social seating and a strong visual silhouette."
  },
  {
    id: 18,
    name: "Statement Dining Pod",
    category: "Indoor",
    room: "Dining Areas",
    price: 1099,
    badge: "Designer",
    image: 'https://inspiringdesigns.net/wp-content/uploads/2025/08/fruit-picnic-tables-960x504.jpg',
    description: "A dramatic dining concept designed to make the table the center of attention."
  }
];