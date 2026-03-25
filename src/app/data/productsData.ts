export interface CategoryData {
  id: string;
  icon: string;
  name: string;
  desc: string;
  items?: string[];
  sections?: { title: string; items: string[] }[];
}

export const categoriesData: CategoryData[] = [
  {
    id: "ms-fabrication-rubber-lining",
    icon: "🏭",
    name: "MS Fabrication & Rubber Lining",
    desc: "Mild steel fabrications with high-grade rubber lining for industrial durability.",
    items: [
      "MSRL Rubber Lining",
      "MSRL Tanks & Vessels",
      "MSRL Pipes & Fittings",
      "MSRL Ductings",
      "MSRL Rollers",
      "MSRL Sandmill Rotor & Stator"
    ]
  },
  {
    id: "site-rubber-lining-projects",
    icon: "🔧",
    name: "Site Rubber Lining & Projects",
    desc: "On-site rubber lining services and complete turnkey project solutions.",
    items: [
      "Rubber Lining & Projects"
    ]
  },
  {
    id: "msfe-project-equipment-products",
    icon: "⚙️",
    name: "MSFE Project Equipment & Products",
    desc: "Engineered process equipment for chemical, mineral, and industrial applications.",
    items: [
      "Tube Holder Plates",
      "Heater Shells and Evaporators",
      "Sand Filters",
      "Cyclone Separators",
      "Star Rollers",
      "Intel & Flash Nozzles",
      "Pipes & Fittings",
      "Rubber Gaskets & O-rings / Seal rings"
    ]
  },
  {
    id: "pulley-laggings",
    icon: "🔩",
    name: "Pulley Laggings",
    desc: "High-performance pulley lagging solutions for conveyor systems.",
    items: [
      "Plain",
      "Grooved",
      "Herringbone",
      "Ceramic"
    ]
  },
  {
    id: "hoses",
    icon: "🌀",
    name: "Hoses",
    desc: "Industrial hoses engineered for chemical transfer, dredging, and expansion applications.",
    items: [
      "Acid Transfer",
      "Chemical Transfer",
      "Dredging",
      "Rubber Expansion Joints / Bellows"
    ]
  },
  {
    id: "moulded-products",
    icon: "🧱",
    name: "Moulded Products",
    desc: "Precision moulded rubber components for sealing and vibration isolation.",
    items: [
      "O Rings",
      "Gaskets",
      "Buffers"
    ]
  },
  {
    id: "rubbers",
    icon: "⬛",
    name: "Rubbers",
    desc: "Speciality rubber grades and professional lining services.",
    items: [
      "Grades",
      "Lining Services"
    ]
  },
  {
    id: "material-handling",
    icon: "🏗️",
    name: "Material Handling",
    desc: "Complete material handling systems from conveyors to turnkey plant installations.",
    sections: [
      {
        title: "Turn-Key Projects",
        items: ["Fuel Handling Systems", "Ash Handling Systems"]
      },
      {
        title: "Conveyors",
        items: ["Belt", "Shuttle", "Tripper", "Screw", "Side-Wall Belt", "Slat Chain", "Portable Bag"]
      },
      {
        title: "Feeders",
        items: ["Drag Chain", "Belt", "Screw"]
      },
      {
        title: "Spares",
        items: ["Idlers", "Pulleys", "Internal Scrapper", "External Scrapper", "Rack and Pinion Gate", "Rod Gate", "Screw Gate"]
      },
      {
        title: "Others",
        items: ["Bucket Elevator", "Vibrating Feeder", "Vibrating Screen (Circular & Linear)", "Crusher (Hammer Mills)", "Mild & Stainless Steel Fabrications"]
      }
    ]
  }
];
