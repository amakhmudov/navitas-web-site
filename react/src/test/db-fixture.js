/** Shared fixture that mirrors public/data/db.json — update both together. */
export const dbFixture = {
  menuItems: [
    { id: 1, label: "About", href: "/about/" },
    { id: 2, label: "Solutions", href: "/solutions/" },
    { id: 3, label: "Contact", href: "/contact/" },
  ],
  contact: {
    phone: "+31208932732",
    phoneDisplay: "020\u00a0893\u00a02732",
  },
  projects: [
    { id: "gps-buddy", title: "GPS Buddy", alt: "GPS Buddy" },
    { id: "kitemana", title: "Kitemana", alt: "Kitemana" },
    { id: "van-dijk", title: "Van Dijk Staircase Solutions", alt: "Van Dijk Staircase Solutions" },
  ],
  clients: [
    { id: "gps-buddy", name: "GPS Buddy", link: "https://www.gps-buddy.com" },
    { id: "kitemana", name: "Kitemana", link: "https://www.kitemana.com" },
    { id: "vandijk", name: "Van Dijk", link: "https://vandijk-staircasesolutions.com" },
    { id: "energielive", name: "Energielive", link: "https://energielive.nl" },
  ],
  aboutSections: [],
};
