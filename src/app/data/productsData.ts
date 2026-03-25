// Helper to create consistent product objects
const createProduct = (name: string, categorySlug: string, imageFolder: string): Product => ({
  name,
  slug: name.toLowerCase().replace(/[\s&/]+/g, '-'),
  categorySlug,
  description: `Premium industrial ${name.toLowerCase()} engineered for maximum durability, reliability, and B2B scale operations. Manufactured strictly to global quality standards.`,
  images: [
    `/images/${imageFolder}/${name.toLowerCase().replace(/[\s&/]+/g, '-')}-1.jpg`,
    `/images/${imageFolder}/${name.toLowerCase().replace(/[\s&/]+/g, '-')}-2.jpg`,
    `/images/${imageFolder}/${name.toLowerCase().replace(/[\s&/]+/g, '-')}-3.jpg`
  ]
});

export interface Product {
  name: string;
  slug: string;
  categorySlug: string;
  images: string[];
  description: string;
}

export interface CategoryData {
  id: string;
  icon: string;
  name: string;
  desc: string;
  items?: Product[];
  sections?: { title: string; items: Product[] }[];
}

export const categoriesData: CategoryData[] = [
  {
    id: "ms-fabrication-rubber-lining",
    icon: "🏭",
    name: "MS Fabrication & Rubber Lining",
    desc: "Mild steel fabrications with high-grade rubber lining for industrial durability.",
    items: [
      createProduct("MSRL Rubber Lining", "ms-fabrication-rubber-lining", "msrl"),
      createProduct("MSRL Tanks & Vessels", "ms-fabrication-rubber-lining", "msrl"),
      createProduct("MSRL Pipes & Fittings", "ms-fabrication-rubber-lining", "msrl"),
      createProduct("MSRL Ductings", "ms-fabrication-rubber-lining", "msrl"),
      createProduct("MSRL Rollers", "ms-fabrication-rubber-lining", "msrl"),
      createProduct("MSRL Sandmill Rotor & Stator", "ms-fabrication-rubber-lining", "msrl")
    ]
  },
  {
    id: "site-rubber-lining-projects",
    icon: "🔧",
    name: "Site Rubber Lining & Projects",
    desc: "On-site rubber lining services and complete turnkey project solutions.",
    items: [
      createProduct("Rubber Lining & Projects", "site-rubber-lining-projects", "site")
    ]
  },
  {
    id: "msfe-project-equipment-products",
    icon: "⚙️",
    name: "MSFE Project Equipment & Products",
    desc: "Engineered process equipment for chemical, mineral, and industrial applications.",
    items: [
      createProduct("Tube Holder Plates", "msfe-project-equipment-products", "equipment"),
      createProduct("Heater Shells and Evaporators", "msfe-project-equipment-products", "equipment"),
      createProduct("Sand Filters", "msfe-project-equipment-products", "equipment"),
      createProduct("Cyclone Separators", "msfe-project-equipment-products", "equipment"),
      createProduct("Star Rollers", "msfe-project-equipment-products", "equipment"),
      createProduct("Intel & Flash Nozzles", "msfe-project-equipment-products", "equipment"),
      createProduct("Pipes & Fittings", "msfe-project-equipment-products", "equipment"),
      createProduct("Rubber Gaskets & O-rings / Seal rings", "msfe-project-equipment-products", "equipment")
    ]
  },
  {
    id: "pulley-laggings",
    icon: "🔩",
    name: "Pulley Laggings",
    desc: "High-performance pulley lagging solutions for conveyor systems.",
    items: [
      createProduct("Plain", "pulley-laggings", "pulleys"),
      createProduct("Grooved", "pulley-laggings", "pulleys"),
      createProduct("Herringbone", "pulley-laggings", "pulleys"),
      createProduct("Ceramic", "pulley-laggings", "pulleys")
    ]
  },
  {
    id: "hoses",
    icon: "🌀",
    name: "Hoses",
    desc: "Industrial hoses engineered for chemical transfer, dredging, and expansion applications.",
    items: [
      createProduct("Acid Transfer", "hoses", "hoses"),
      createProduct("Chemical Transfer", "hoses", "hoses"),
      createProduct("Dredging", "hoses", "hoses"),
      createProduct("Rubber Expansion Joints / Bellows", "hoses", "hoses")
    ]
  },
  {
    id: "moulded-products",
    icon: "🧱",
    name: "Moulded Products",
    desc: "Precision moulded rubber components for sealing and vibration isolation.",
    items: [
      createProduct("O Rings", "moulded-products", "moulded"),
      createProduct("Gaskets", "moulded-products", "moulded"),
      createProduct("Buffers", "moulded-products", "moulded")
    ]
  },
  {
    id: "rubbers",
    icon: "⬛",
    name: "Rubbers",
    desc: "Speciality rubber grades and professional lining services.",
    items: [
      createProduct("Grades", "rubbers", "rubbers"),
      createProduct("Lining Services", "rubbers", "rubbers")
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
        items: [
          createProduct("Fuel Handling Systems", "material-handling", "material"),
          createProduct("Ash Handling Systems", "material-handling", "material")
        ]
      },
      {
        title: "Conveyors",
        items: [
          createProduct("Belt", "material-handling", "material"),
          createProduct("Shuttle", "material-handling", "material"),
          createProduct("Tripper", "material-handling", "material"),
          createProduct("Screw", "material-handling", "material"),
          createProduct("Side-Wall Belt", "material-handling", "material"),
          createProduct("Slat Chain", "material-handling", "material"),
          createProduct("Portable Bag", "material-handling", "material")
        ]
      },
      {
        title: "Feeders",
        items: [
          createProduct("Drag Chain", "material-handling", "material"),
          createProduct("Belt", "material-handling", "material"),
          createProduct("Screw", "material-handling", "material")
        ]
      },
      {
        title: "Spares",
        items: [
          createProduct("Idlers", "material-handling", "material"),
          createProduct("Pulleys", "material-handling", "material"),
          createProduct("Internal Scrapper", "material-handling", "material"),
          createProduct("External Scrapper", "material-handling", "material"),
          createProduct("Rack and Pinion Gate", "material-handling", "material"),
          createProduct("Rod Gate", "material-handling", "material"),
          createProduct("Screw Gate", "material-handling", "material")
        ]
      },
      {
        title: "Others",
        items: [
          createProduct("Bucket Elevator", "material-handling", "material"),
          createProduct("Vibrating Feeder", "material-handling", "material"),
          createProduct("Vibrating Screen (Circular & Linear)", "material-handling", "material"),
          createProduct("Crusher (Hammer Mills)", "material-handling", "material"),
          createProduct("Mild & Stainless Steel Fabrications", "material-handling", "material")
        ]
      }
    ]
  }
];
