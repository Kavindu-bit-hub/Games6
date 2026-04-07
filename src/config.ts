// =============================================================================
// GameVault - Game Download Site Configuration
// A cyberpunk-themed gaming platform with 3D game cube and immersive gallery
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "GameVault - Download Free PC Games",
  description: "Your ultimate destination for free PC game downloads. Discover indie gems, AAA titles, and everything in between.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "GameVault",
  decodeText: "GAME ON",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  subtitle: "Download thousands of PC games. From indie masterpieces to AAA blockbusters - all in one place.",
  ctaPrimary: "Browse Games",
  ctaPrimaryTarget: "featured",
  ctaSecondary: "New Releases",
  ctaSecondaryTarget: "releases",
  cornerLabel: "LIVE NOW",
  cornerDetail: "2,847 Games Available",
  navItems: [
    { label: "Featured", sectionId: "featured", icon: "disc" },
    { label: "Gallery", sectionId: "gallery", icon: "play" },
    { label: "New Releases", sectionId: "releases", icon: "calendar" },
    { label: "Community", sectionId: "contact", icon: "music" },
  ],
};

// -- Featured Games Cube Section ----------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    { id: 1, title: "CYBER DAWN", subtitle: "RPG", image: "/game-1.jpg" },
    { id: 2, title: "NEBULA RACER", subtitle: "RACING", image: "/game-2.jpg" },
    { id: 3, title: "SHADOW PROTOCOL", subtitle: "STEALTH", image: "/game-3.jpg" },
    { id: 4, title: "STAR FORGE", subtitle: "STRATEGY", image: "/game-4.jpg" },
  ],
  cubeTextures: [
    "/game-1.jpg", // right
    "/game-2.jpg", // left
    "/game-3.jpg", // top
    "/game-4.jpg", // bottom
    "/game-5.jpg", // front
    "/game-6.jpg", // back
  ],
  scrollHint: "Scroll to explore featured games",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "SCREENSHOTS",
  sectionTitle: "Visual Experience",
  galleryLabel: "GAME GALLERY",
  galleryTitle: "Explore Worlds",
  marqueeTexts: [
    "FREE DOWNLOADS",
    "INDIE GAMES",
    "AAA TITLES",
    "EARLY ACCESS",
    "FREE DOWNLOADS",
    "INDIE GAMES",
    "AAA TITLES",
    "EARLY ACCESS",
  ],
  endCtaText: "View All Games",
  parallaxImagesTop: [
    { id: 1, src: "/screenshot-1.jpg", alt: "Cyberpunk City" },
    { id: 2, src: "/screenshot-2.jpg", alt: "Space Battle" },
    { id: 3, src: "/screenshot-3.jpg", alt: "Fantasy Realm" },
    { id: 4, src: "/screenshot-4.jpg", alt: "Racing Track" },
    { id: 5, src: "/screenshot-5.jpg", alt: "Dungeon Crawl" },
    { id: 6, src: "/screenshot-6.jpg", alt: "Mech Combat" },
  ],
  parallaxImagesBottom: [
    { id: 7, src: "/screenshot-7.jpg", alt: "Open World" },
    { id: 8, src: "/screenshot-8.jpg", alt: "Zombie Survival" },
    { id: 9, src: "/screenshot-9.jpg", alt: "Puzzle Game" },
    { id: 10, src: "/screenshot-10.jpg", alt: "FPS Action" },
    { id: 11, src: "/screenshot-11.jpg", alt: "RPG Village" },
    { id: 12, src: "/screenshot-12.jpg", alt: "Sci-Fi Base" },
  ],
  galleryImages: [
    { id: 1, src: "/gallery-1.jpg", title: "Abyss Walker", date: "2024.12.15" },
    { id: 2, src: "/gallery-2.jpg", title: "Velocity X", date: "2024.12.10" },
    { id: 3, src: "/gallery-3.jpg", title: "Mystic Realms", date: "2024.12.05" },
    { id: 4, src: "/gallery-4.jpg", title: "Iron Legion", date: "2024.11.28" },
    { id: 5, src: "/gallery-5.jpg", title: "Neon Drift", date: "2024.11.20" },
    { id: 6, src: "/gallery-6.jpg", title: "Void Stalker", date: "2024.11.15" },
  ],
};

// -- New Releases Section (Tour Schedule adapted) -----------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "NEW RELEASES",
  sectionTitle: "Fresh Drops",
  vinylImage: "/disc-spinner.png",
  buyButtonText: "Download Now",
  detailsButtonText: "View Details",
  bottomNote: "All downloads are 100% free and virus-scanned",
  bottomCtaText: "Browse All Games",
  statusLabels: {
    onSale: "AVAILABLE",
    soldOut: "LIMITED",
    comingSoon: "COMING SOON",
    default: "CHECK",
  },
  tourDates: [
    {
      id: 1,
      date: "2024.12.28",
      time: "FREE",
      city: "Cyberpunk",
      venue: "Neon Nights RPG",
      status: "on-sale",
      image: "/release-1.jpg",
    },
    {
      id: 2,
      date: "2024.12.25",
      time: "FREE",
      city: "Space",
      venue: "Stellar Command",
      status: "on-sale",
      image: "/release-2.jpg",
    },
    {
      id: 3,
      date: "2025.01.05",
      time: "FREE",
      city: "Fantasy",
      venue: "Dragon's Reign",
      status: "coming-soon",
      image: "/release-3.jpg",
    },
    {
      id: 4,
      date: "2025.01.12",
      time: "FREE",
      city: "Horror",
      venue: "Dark Echoes",
      status: "coming-soon",
      image: "/release-4.jpg",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/footer-hero.jpg",
  portraitAlt: "Gaming Setup",
  heroTitle: "JOIN THE REVOLUTION",
  heroSubtitle: "Where gamers become legends",
  artistLabel: "PLATFORM",
  artistName: "GameVault",
  artistSubtitle: "Free Games for Everyone",
  brandName: "GameVault",
  brandDescription: "The ultimate destination for free PC game downloads. Discover, download, and play thousands of games without spending a dime.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["Action Games", "RPG Games", "Racing Games", "Strategy Games", "Indie Games"],
  contactTitle: "Contact Us",
  emailLabel: "Email",
  email: "support@gamevault.com",
  phoneLabel: "Discord",
  phone: "discord.gg/gamevault",
  addressLabel: "Community",
  address: "2.5M+ Active Players",
  newsletterTitle: "Newsletter",
  newsletterDescription: "Get notified about new game releases and exclusive deals.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thanks for subscribing! Check your email for confirmation.",
  copyrightText: "© 2024 GameVault. All games are property of their respective owners.",
  bottomLinks: ["Privacy Policy", "Terms of Service", "DMCA", "Contact"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "#" },
    { icon: "twitter", label: "Twitter", href: "#" },
    { icon: "youtube", label: "YouTube", href: "#" },
    { icon: "music", label: "Discord", href: "#" },
  ],
  galleryImages: [
    { id: 1, src: "/footer-1.jpg" },
    { id: 2, src: "/footer-2.jpg" },
    { id: 3, src: "/footer-3.jpg" },
    { id: 4, src: "/footer-4.jpg" },
  ],
};
