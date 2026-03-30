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

// Real images sourced from arulrubbers.com
const ARUL = "https://www.arulrubbers.com/images/products";

export const categoriesData: CategoryData[] = [
  {
    id: "ms-fabrication-rubber-lining",
    icon: "🏭",
    name: "MS Fabrication & Rubber Lining",
    desc: "Mild steel fabrications with high-grade rubber lining for industrial durability.",
    items: [
      {
        name: "MSRL Rubber Lining",
        slug: "msrl-rubber-lining",
        categorySlug: "ms-fabrication-rubber-lining",
        description: "High-performance rubber lining applied to mild steel structures for superior chemical resistance, abrasion protection, and extended equipment life in demanding industrial environments.",
        images: [
          `${ARUL}/msrl-rubber-lining/MSRL_saturator_inside_rubber_lined.jpg`,
          `${ARUL}/msrl-rubber-lining/MSRL_saturator_outside_rubber_lined.jpg`,
          `${ARUL}/msrl-rubber-lining/MS_Fabricated_tanks.jpg`,
          `${ARUL}/msrl-rubber-lining/nuclear-power-plant-tank-with-inside-rubber-lining--exterior-FRP.jpg`
        ]
      },
      {
        name: "MSRL Tanks & Vessels",
        slug: "msrl-tanks-vessels",
        categorySlug: "ms-fabrication-rubber-lining",
        description: "Rubber-lined industrial tanks and pressure vessels designed for chemical storage, acid processing, and corrosive fluid containment across heavy industries.",
        images: [
          `${ARUL}/msrl-tanks-and-vessels/MSRL_HCL_tank.jpg`,
          `${ARUL}/msrl-tanks-and-vessels/MSRL_special_purpose_tank.jpg`,
          `${ARUL}/msrl-tanks-and-vessels/MSRL_tank_1.jpg`,
          `${ARUL}/msrl-tanks-and-vessels/MSRL_high_temperature_resitant_evaporator.jpg`
        ]
      },
      {
        name: "MSRL Pipes & Fittings",
        slug: "msrl-pipes-fittings",
        categorySlug: "ms-fabrication-rubber-lining",
        description: "Precision rubber-lined pipes and fittings engineered for corrosion-free transfer of acids, chemicals, and slurries in processing plants.",
        images: [
          `${ARUL}/msrl-pipes-and-fittings/hydro_test_of_pipes_and_fittings.jpg`,
          `${ARUL}/msrl-pipes-and-fittings/special_exterior_painting_fittings.jpg`,
          `${ARUL}/msrl-pipes-and-fittings/special_exterior_painting_pipes.jpg`
        ]
      },
      {
        name: "MSRL Ductings",
        slug: "msrl-ductings",
        categorySlug: "ms-fabrication-rubber-lining",
        description: "Rubber-lined ducting systems built for safe transport of corrosive gases and fumes in chemical, pharmaceutical, and power generation industries.",
        images: [
          `${ARUL}/msrl-rubber-lining/fabricated_saturator.jpg`,
          `${ARUL}/msrl-rubber-lining/MSRL_saturator_with_exterior_adhesive_coating_ready_for_rubber_lining.jpg`,
          `${ARUL}/msrl-rubber-lining/MS_fabricated_HCL_tank_2.jpg`
        ]
      },
      {
        name: "MSRL Rollers",
        slug: "msrl-rollers",
        categorySlug: "ms-fabrication-rubber-lining",
        description: "Heavy-duty rubber-coated steel rollers designed for conveyor systems, printing, and industrial processing with excellent wear resistance.",
        images: [
          `${ARUL}/msrl-rollers/msrl_rollers.jpg`,
          `${ARUL}/msrl-rubber-lining/valve.jpg`,
          `${ARUL}/msrl-rubber-lining/progen_tank_of_rubber_lined_filter_plate.jpg`
        ]
      },
      {
        name: "MSRL Sandmill Rotor & Stator",
        slug: "msrl-sandmill-rotor-stator",
        categorySlug: "ms-fabrication-rubber-lining",
        description: "Precision-engineered sandmill rotor and stator assemblies with rubber lining for paint, ink, and chemical grinding applications.",
        images: [
          `${ARUL}/msrl-rubber-lining/progen_tank_for_BGR.jpg`,
          `${ARUL}/msrl-rubber-lining/phophoric-tank-fabrication-at-site-for-FACT-Kerala.jpg`,
          `${ARUL}/msrl-rubber-lining/MS_fabricated_HCL_tank_3.jpg`
        ]
      }
    ]
  },
  {
    id: "site-rubber-lining-projects",
    icon: "🔧",
    name: "Site Rubber Lining & Projects",
    desc: "On-site rubber lining services and complete turnkey project solutions.",
    items: [
      {
        name: "Rubber Lining & Projects",
        slug: "rubber-lining-projects",
        categorySlug: "site-rubber-lining-projects",
        description: "Comprehensive on-site rubber lining installation for tanks, vessels, pipes, and industrial equipment with full project management and quality assurance.",
        images: [
          `${ARUL}/site-rubber-lining/FACT-Kerala-Phosphoric-Acid-Tank-rubber-lined-at-site.jpg`,
          `${ARUL}/site-rubber-lining/PPL-Site-project-pictures-of-tanks-rubber-lined-by-Arul-Rubbers.jpg`,
          `${ARUL}/site-rubber-lining/Site-rubber-lined-tank.jpg`,
          `${ARUL}/site-rubber-lining/SPV-Indonesia-MSFE-Project-01.jpg`
        ]
      }
    ]
  },
  {
    id: "msfe-project-equipment-products",
    icon: "⚙️",
    name: "MSFE Project Equipment & Products",
    desc: "Engineered process equipment for chemical, mineral, and industrial applications.",
    items: [
      {
        name: "Tube Holder Plates",
        slug: "tube-holder-plates",
        categorySlug: "msfe-project-equipment-products",
        description: "Precision-machined tube holder plates for heat exchangers, condensers, and evaporators with superior dimensional accuracy.",
        images: ["/images/equipment/cyclone-separator.png", "/images/heater_shells.png", "/images/factory_building.png"]
      },
      {
        name: "Heater Shells and Evaporators",
        slug: "heater-shells-and-evaporators",
        categorySlug: "msfe-project-equipment-products",
        description: "Custom-fabricated heater shells and evaporator units designed for chemical processing and sugar industries.",
        images: ["/images/heater_shells.png", "/images/equipment/cyclone-separator.png", "/images/factory_building.png"]
      },
      {
        name: "Sand Filters",
        slug: "sand-filters",
        categorySlug: "msfe-project-equipment-products",
        description: "Industrial sand filtration systems for water treatment and process fluid purification.",
        images: ["/images/equipment/cyclone-separator.png", "/images/heater_shells.png", "/images/factory_building.png"]
      },
      {
        name: "Cyclone Separators",
        slug: "cyclone-separators",
        categorySlug: "msfe-project-equipment-products",
        description: "High-efficiency cyclone separators for dust collection, gas cleaning, and material classification.",
        images: ["/images/equipment/cyclone-separator.png", "/images/factory_building.png", "/images/heater_shells.png"]
      },
      {
        name: "Star Rollers",
        slug: "star-rollers",
        categorySlug: "msfe-project-equipment-products",
        description: "Precision star rollers for material handling and conveyor alignment in industrial processing plants.",
        images: [`${ARUL}/msrl-rollers/msrl_rollers.jpg`, "/images/equipment/cyclone-separator.png", "/images/factory_building.png"]
      },
      {
        name: "Intel & Flash Nozzles",
        slug: "intel-flash-nozzles",
        categorySlug: "msfe-project-equipment-products",
        description: "Engineered inlet and flash nozzles for evaporators, heaters and pressure vessels.",
        images: ["/images/equipment/cyclone-separator.png", "/images/heater_shells.png", `${ARUL}/msrl-pipes-and-fittings/hydro_test_of_pipes_and_fittings.jpg`]
      },
      {
        name: "Pipes & Fittings",
        slug: "pipes-fittings",
        categorySlug: "msfe-project-equipment-products",
        description: "Industrial-grade pipes and fittings for chemical processing, water treatment and heavy industrial applications.",
        images: [
          `${ARUL}/msrl-pipes-and-fittings/hydro_test_of_pipes_and_fittings.jpg`,
          `${ARUL}/msrl-pipes-and-fittings/special_exterior_painting_pipes.jpg`,
          "/images/equipment/cyclone-separator.png"
        ]
      },
      {
        name: "Rubber Gaskets & O-rings / Seal rings",
        slug: "rubber-gaskets-o-rings-seal-rings",
        categorySlug: "msfe-project-equipment-products",
        description: "Precision-molded rubber gaskets, O-rings and seal rings for leak-proof sealing in high-pressure environments.",
        images: ["/images/moulded/orings-gaskets.png", "/images/rubbers/rubber-sheets.png", "/images/equipment/cyclone-separator.png"]
      }
    ]
  },
  {
    id: "pulley-laggings",
    icon: "🔩",
    name: "Pulley Laggings",
    desc: "High-performance pulley lagging solutions for conveyor systems.",
    items: [
      {
        name: "Plain",
        slug: "plain",
        categorySlug: "pulley-laggings",
        description: "Plain rubber pulley lagging for standard conveyor applications, providing improved belt grip and reduced slippage.",
        images: ["/images/pulleys/pulley-lagging.png", `${ARUL}/msrl-rollers/msrl_rollers.jpg`, "/images/material/belt-conveyor.png"]
      },
      {
        name: "Grooved",
        slug: "grooved",
        categorySlug: "pulley-laggings",
        description: "Grooved pulley lagging with diamond pattern channels for water drainage in wet conveyor environments.",
        images: ["/images/pulleys/pulley-lagging.png", "/images/material/belt-conveyor.png", `${ARUL}/msrl-rollers/msrl_rollers.jpg`]
      },
      {
        name: "Herringbone",
        slug: "herringbone",
        categorySlug: "pulley-laggings",
        description: "Herringbone pattern pulley lagging providing superior water shedding and maximum belt traction.",
        images: ["/images/pulleys/pulley-lagging.png", "/images/material/belt-conveyor.png", "/images/factory_building.png"]
      },
      {
        name: "Ceramic",
        slug: "ceramic",
        categorySlug: "pulley-laggings",
        description: "Ceramic-embedded pulley lagging for extreme-duty applications requiring maximum wear resistance.",
        images: ["/images/pulleys/pulley-lagging.png", "/images/material/belt-conveyor.png", "/images/factory_building.png"]
      }
    ]
  },
  {
    id: "hoses",
    icon: "🌀",
    name: "Hoses",
    desc: "Industrial hoses for chemical transfer, dredging, and expansion applications.",
    items: [
      {
        name: "Acid Transfer",
        slug: "acid-transfer",
        categorySlug: "hoses",
        description: "Acid-resistant flexible hoses for safe transfer of concentrated acids and aggressive chemicals.",
        images: [
          `${ARUL}/dredging-hoses/dredging_hose_1.jpg`,
          `${ARUL}/dredging-hoses/suction_hose.jpg`,
          "/images/hoses/chemical-transfer.png"
        ]
      },
      {
        name: "Chemical Transfer",
        slug: "chemical-transfer",
        categorySlug: "hoses",
        description: "Multi-purpose chemical transfer hoses rated for industrial chemicals, solvents, and corrosive fluids.",
        images: [
          `${ARUL}/dredging-hoses/dredging_hose_2.jpg`,
          `${ARUL}/dredging-hoses/vacuum_hose.jpg`,
          "/images/hoses/chemical-transfer.png"
        ]
      },
      {
        name: "Dredging",
        slug: "dredging",
        categorySlug: "hoses",
        description: "Heavy-duty dredging hoses built for high-abrasion slurry transport in mining and marine dredging operations.",
        images: [
          `${ARUL}/dredging-hoses/dredging_hose_3.jpg`,
          `${ARUL}/dredging-hoses/dredging_hose_4.jpg`,
          `${ARUL}/dredging-hoses/dredging_hose_5.jpg`,
          `${ARUL}/dredging-hoses/dredging_hose_6.jpg`
        ]
      },
      {
        name: "Rubber Expansion Joints / Bellows",
        slug: "rubber-expansion-joints-bellows",
        categorySlug: "hoses",
        description: "Flexible rubber expansion joints and bellows for absorbing thermal movement and vibration in piping systems.",
        images: [
          `${ARUL}/dredging-hoses/dredging_hose_7.jpg`,
          `${ARUL}/dredging-hoses/suction_hose.jpg`,
          "/images/hoses/chemical-transfer.png"
        ]
      }
    ]
  },
  {
    id: "moulded-products",
    icon: "🧱",
    name: "Moulded Products",
    desc: "Precision moulded rubber components for sealing and vibration isolation.",
    items: [
      {
        name: "O Rings",
        slug: "o-rings",
        categorySlug: "moulded-products",
        description: "Precision-molded O-rings available in various elastomers for hydraulic, pneumatic, and chemical systems.",
        images: ["/images/moulded/orings-gaskets.png", "/images/rubbers/rubber-sheets.png", "/images/factory_building.png"]
      },
      {
        name: "Gaskets",
        slug: "gaskets",
        categorySlug: "moulded-products",
        description: "Custom rubber gaskets for leak-proof sealing in flanges, vessels, and industrial equipment.",
        images: ["/images/moulded/orings-gaskets.png", "/images/rubbers/rubber-sheets.png", "/images/equipment/cyclone-separator.png"]
      },
      {
        name: "Buffers",
        slug: "buffers",
        categorySlug: "moulded-products",
        description: "Heavy-duty rubber buffers and vibration dampeners for machinery mounting and impact absorption.",
        images: ["/images/moulded/orings-gaskets.png", "/images/rubbers/rubber-sheets.png", "/images/factory_building.png"]
      }
    ]
  },
  {
    id: "rubbers",
    icon: "⬛",
    name: "Rubbers",
    desc: "Speciality rubber grades and professional lining services.",
    items: [
      {
        name: "Grades",
        slug: "grades",
        categorySlug: "rubbers",
        description: "Wide range of specialty rubber grades including Natural Rubber, Neoprene, EPDM, Nitrile, Butyl, and Hypalon.",
        images: ["/images/rubbers/rubber-sheets.png", `${ARUL}/msrl-rubber-lining/MSRL_saturator_inside_rubber_lined.jpg`, "/images/factory_building.png"]
      },
      {
        name: "Lining Services",
        slug: "lining-services",
        categorySlug: "rubbers",
        description: "Expert rubber lining application including surface preparation, adhesive bonding, and quality testing.",
        images: [
          `${ARUL}/site-rubber-lining/FACT-Fabrication-progress-of-phosphoric-acid-tank-at-site.jpg`,
          `${ARUL}/site-rubber-lining/Phosphoric-Acid-Tank-rubber-lined-at-site-01.jpg`,
          "/images/rubbers/rubber-sheets.png"
        ]
      }
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
          { name: "Fuel Handling Systems", slug: "fuel-handling-systems", categorySlug: "material-handling", description: "Complete fuel handling and storage systems for power plants and industrial facilities.", images: ["/images/material-handling/turn-key-projects/fuel_handling_1_1774851922332.png", "/images/material-handling/turn-key-projects/fuel_handling_2_1774851938551.png"] },
          { name: "Ash Handling Systems", slug: "ash-handling-systems", categorySlug: "material-handling", description: "Turnkey ash handling systems for thermal power plants.", images: ["/images/material-handling/turn-key-projects/ash_handling_1_1774851954278.png", "/images/material-handling/turn-key-projects/ash_handling_2_1774851970715.png"] }
        ]
      },
      {
        title: "Conveyors",
        items: [
          { name: "Belt Conveyor", slug: "belt-conveyor", categorySlug: "material-handling", description: "Standard belt conveyors for bulk material transport in mining and manufacturing.", images: ["/images/material-handling/conveyors/belt_conveyor_1_1774851987301.png", "/images/material-handling/conveyors/belt_conveyor_2_1774852001942.png"] },
          { name: "Shuttle Conveyor", slug: "shuttle-conveyor", categorySlug: "material-handling", description: "Shuttle conveyors for controlled distribution across multiple discharge points.", images: ["/images/material-handling/conveyors/shuttle_conveyor_1_1774852018565.png", "/images/material-handling/conveyors/shuttle_conveyor_2_1774852040579.png"] },
          { name: "Tripper Conveyor", slug: "tripper-conveyor", categorySlug: "material-handling", description: "Tripper conveyors for precise material discharge at multiple locations.", images: ["/images/material-handling/conveyors/tripper_conveyor_1_1774852055129.png", "/images/material-handling/conveyors/tripper_conveyor_2_1774852073670.png"] },
          { name: "Screw Conveyor", slug: "screw-conveyor", categorySlug: "material-handling", description: "Screw conveyors for moving granular and semi-solid materials.", images: ["/images/material-handling/conveyors/screw_conveyor_1_1774852091922.png", "/images/material-handling/conveyors/screw_conveyor_2_1774852106673.png"] },
          { name: "Side-Wall Belt Conveyor", slug: "side-wall-belt", categorySlug: "material-handling", description: "Side-wall belt conveyors for steep incline material transport.", images: ["/images/material-handling/conveyors/sidewall_belt_1_1774852126249.png", "/images/material-handling/conveyors/sidewall_belt_2_1774852142426.png"] },
          { name: "Slat Chain Conveyor", slug: "slat-chain", categorySlug: "material-handling", description: "Slat chain conveyors for handling heavy, bulky items.", images: ["/images/material-handling/conveyors/slat_chain_1_1774852158282.png", "/images/material-handling/conveyors/slat_chain_2_1774852175675.png"] }
        ]
      },
      {
        title: "Feeders",
        items: [
          { name: "Drag Chain Feeder", slug: "drag-chain-feeder", categorySlug: "material-handling", description: "Drag chain feeders for controlled extraction of bulk materials.", images: ["/images/material-handling/feeders/drag_chain_1_1774852200142.png", "/images/material-handling/feeders/drag_chain_2.jpg"] },
          { name: "Belt Feeder", slug: "belt-feeder", categorySlug: "material-handling", description: "Belt feeders for precise volumetric feeding of materials.", images: ["/images/material-handling/feeders/belt_feeder_1.jpg", "/images/material-handling/feeders/belt_feeder_2.jpg"] },
          { name: "Screw Feeder", slug: "screw-feeder", categorySlug: "material-handling", description: "Screw feeders for controlled metering of granular materials.", images: ["/images/material-handling/feeders/screw_feeder_1.jpg", "/images/material-handling/feeders/screw_feeder_2.jpg"] }
        ]
      },
      {
        title: "Spares",
        items: [
          { name: "Idlers", slug: "idlers", categorySlug: "material-handling", description: "Conveyor idlers and roller assemblies for belt support.", images: ["/images/material-handling/spares/idler1.jpg", "/images/material-handling/spares/idler2.jpg"] },
          { name: "Pulleys", slug: "pulleys", categorySlug: "material-handling", description: "Conveyor pulleys with optional lagging.", images: ["/images/material-handling/spares/pulley1.jpg", "/images/material-handling/spares/pulley2.jpg"] },
          { name: "Internal Scrapper", slug: "internal-scrapper", categorySlug: "material-handling", description: "Internal belt scrappers for cleaning conveyor belts.", images: ["/images/material-handling/spares/internal_scrapper1.jpg", "/images/material-handling/spares/internal_scrapper2.jpg"] },
          { name: "External Scrapper", slug: "external-scrapper", categorySlug: "material-handling", description: "External belt scrappers for efficient material removal.", images: ["/images/material-handling/spares/external_scrapper1.jpg", "/images/material-handling/spares/external_scrapper2.jpg"] },
          { name: "Rack and Pinion Gate", slug: "rack-and-pinion-gate", categorySlug: "material-handling", description: "Rack and pinion gates for controlled material flow.", images: ["/images/material-handling/spares/rack_pinion_gate1.jpg", "/images/material-handling/spares/rack_pinion_gate2.jpg"] },
          { name: "Rod Gate", slug: "rod-gate", categorySlug: "material-handling", description: "Rod gates for on/off flow control.", images: ["/images/material-handling/spares/rod_gate1.jpg", "/images/material-handling/spares/rod_gate2.jpg"] },
          { name: "Screw Gate", slug: "screw-gate", categorySlug: "material-handling", description: "Screw gates for precise flow control.", images: ["/images/material-handling/spares/screw_gate1.jpg", "/images/material-handling/spares/screw_gate2.jpg"] }
        ]
      },
      {
        title: "Others",
        items: [
          { name: "Bucket Elevator", slug: "bucket-elevator", categorySlug: "material-handling", description: "Bucket elevators for vertical transport of bulk materials.", images: ["/images/material-handling/bucket-elevator/bucket_elevator_1.jpg", "/images/material-handling/bucket-elevator/bucket_elevator_2.jpg"] },
          { name: "Vibrating Feeder", slug: "vibrating-feeder", categorySlug: "material-handling", description: "Vibrating feeders for controlled material feeding.", images: ["/images/material-handling/others/vibrating_feeder_1.jpg", "/images/material-handling/others/vibrating_feeder_2.jpg"] },
          { name: "Vibrating Screen", slug: "vibrating-screen", categorySlug: "material-handling", description: "Circular and linear vibrating screens for size classification.", images: ["/images/material-handling/others/vibrating_screen_1.jpg", "/images/material-handling/others/vibrating_screen_2.jpg"] },
          { name: "Crusher (Hammer Mills)", slug: "crusher-hammer-mills", categorySlug: "material-handling", description: "Hammer mill crushers for size reduction of bulk materials.", images: ["/images/material-handling/crushers/hammer_mill_1.jpg", "/images/material-handling/crushers/hammer_mill_2.jpg"] }
        ]
      }
    ]
  }
];
