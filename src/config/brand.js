/**
 * DESI BREAK — BRAND CONFIGURATION
 * Centralized brand identity and messaging
 * All hardcoded strings should be imported from this file
 */

export const BRAND = {
  // Core Identity
  name: "Desi Break",
  tagline: "Sip Your Way Across India",
  positioning: "India's Regional Beverage Café",
  
  // Messaging
  mission: "To make authentic regional Indian beverages accessible across regions while preserving their originality and celebrating the stories behind them.",
  vision: "To become India's most loved regional beverage brand.",
  description: "Discover authentic regional beverages from every corner of India—served fresh, crafted traditionally, and brought together in one place.",
  
  // Values
  values: [
    "Authenticity",
    "Quality",
    "Discovery",
    "Regional Diversity",
    "Warm Hospitality",
    "Consistency"
  ],
  
  // Call-to-Action Labels
  cta: {
    primary: "Explore Menu",
    secondary: "Our Story",
    franchise: "Franchise With Us",
    learnMore: "Learn More",
    discover: "Discover",
    viewDetails: "View Details"
  },
  
  // Navigation Links
  navigation: [
    { name: "Home", path: "/" },
    { name: "Explore Drinks", path: "/drinks" },
    { name: "Find a Store", path: "/stores" },
    { name: "About", path: "/about" }
  ],
  
  // Social Links
  social: {
    instagram: "https://instagram.com/desibreak",
    facebook: "https://facebook.com/desibreak",
    twitter: "https://twitter.com/desibreak",
    linkedin: "https://linkedin.com/company/desibreak"
  },
  
  // Contact Information
  contact: {
    email: "hello@desibreak.com",
    phone: "+91 (123) 456-7890",
    address: "Bangalore, India"
  },
  
  // Theme Colors
  colors: {
    primary: "#1F5C3A",      // Forest Green
    background: "#F6F1E7",   // Heritage Cream
    accent: "#907E4C",       // Muted olive / earthy green-brown badge border
    highlight: "#907E4C",
    badgeBorder: "#907E4C",
  },
  
  // Typography
  typography: {
    logo: "'Perpetua MT Std', 'Perpetua', Georgia, serif",
    heading: "'Perpetua MT Std', 'Perpetua', Georgia, serif",
    tagline: "Candara, 'Trebuchet MS', sans-serif",
    body: "Candara, 'Trebuchet MS', sans-serif"
  },
  
  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Desi Break. All rights reserved.`,
    tagline: "India's Regional Beverage Café",
    description: "Discover authentic regional beverages from every corner of India."
  },
  
  // Tone of Voice Keywords (use these instead of "forgotten", "revive", etc.)
  approved_language: {
    use: [
      "Regional",
      "Authentic",
      "Traditional",
      "Local",
      "Signature",
      "Crafted",
      "Across India",
      "Discovery",
      "Celebration",
      "Heritage"
    ],
    avoid: [
      "Forgotten",
      "Revive",
      "Dying traditions",
      "Lost recipes"
    ]
  }
};

export default BRAND;
