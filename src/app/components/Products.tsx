import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./Products.css";

// The full data structure extracted precisely from the user's template
const categoriesData = [
  {
    id: "ms-fabrication",
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
    id: "site-rubber",
    icon: "🔧",
    name: "Site Rubber Lining & Projects",
    desc: "On-site rubber lining services and complete turnkey project solutions.",
    items: [
      "Rubber Lining & Projects"
    ]
  },
  {
    id: "msfe-project",
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

export function Products() {
  const [activePage, setActivePage] = useState<'categories' | 'subproducts'>('categories');
  const [activeCat, setActiveCat] = useState<any>(null);
  
  // Intercept hash from react-router locally if navigating from Header
  const location = useLocation();
  
  useEffect(() => {
    // If there is a hash, try to find the matching product or category
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      
      // We will just open the specific category if the hash matches its generated ID logic
      let foundCategory = null;
      for (const cat of categoriesData) {
        if (cat.items) {
           const match = cat.items.find((item: string) => item.toLowerCase().replace(/[\s&/]+/g, '-') === hash);
           if (match || cat.id === hash) foundCategory = cat;
        } else if (cat.sections) {
           const match = cat.sections.some((sec: any) => sec.items.find((item: string) => item.toLowerCase().replace(/[\s&/]+/g, '-') === hash));
           if (match || cat.id === hash) foundCategory = cat;
        }
      }
      
      // If found, open the subproducts page
      if (foundCategory) {
        setActiveCat(foundCategory);
        setActivePage('subproducts');
        
        // Timeout to let DOM render, then scroll to item if strictly a product hash
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      setActivePage('categories');
      setActiveCat(null);
    }
  }, [location.hash]);

  const showSubProducts = (cat: any) => {
    setActiveCat(cat);
    setActivePage('subproducts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showCategories = () => {
    setActivePage('categories');
    setActiveCat(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-spa">
      {/* PAGE HEADER */}
      <div className="page-header" id="page-header">
        <div className="breadcrumb" id="breadcrumb">
          <span>Home</span>
          <span className="sep">›</span>
          <span className="current">Products</span>
        </div>
        <h1>
          <span>{activePage === 'categories' ? 'Explore Our' : 'Product Category'}</span>
          {activePage === 'categories' ? 'Products' : activeCat?.name}
        </h1>
        <div className="red-bar"></div>
      </div>

      {/* MAIN CONTAINER */}
      <main>
        
        {/* PAGE 1: CATEGORIES */}
        <div className={`spa-page ${activePage === 'categories' ? 'active' : ''}`}>
          <div className="section-label">Our Offerings</div>
          <h2 className="section-title">Select a Product Category</h2>

          <div className="categories-grid">
            {categoriesData.map((cat, idx) => {
              const count = cat.items 
                ? cat.items.length 
                : cat.sections?.reduce((acc, sec) => acc + sec.items.length, 0);

              return (
                <div key={idx} className="cat-card" onClick={() => showSubProducts(cat)}>
                  <div className="cat-icon">{cat.icon}</div>
                  <div>
                    <div className="cat-name">{cat.name}</div>
                    <div className="cat-count">{count} product{count !== 1 ? 's' : ''}</div>
                  </div>
                  <div className="cat-arrow">
                    View Products
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cta-strip">
            <div>
              <h3>Need a Custom Solution?</h3>
              <p>Our engineering team can design and manufacture to your exact specifications.</p>
            </div>
            <button className="cta-btn">Request Enquiry</button>
          </div>
        </div>

        {/* PAGE 2: SUB-PRODUCTS list */}
        {activeCat && (
          <div className={`spa-page ${activePage === 'subproducts' ? 'active' : ''}`}>
            <button className="back-btn" onClick={showCategories}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to All Products
            </button>

            <div className="sub-header">
              <div className="sub-header-left">
                <div className="section-label">Product Category</div>
                <h2>{activeCat.name}</h2>
                <p>{activeCat.desc}</p>
              </div>
              <span className="sub-badge">
                {activeCat.items 
                   ? activeCat.items.length 
                   : activeCat.sections?.reduce((a: number, s: any) => a + s.items.length, 0)
                } Products
              </span>
            </div>

            <div>
              {activeCat.items ? (
                // Simple Flat List
                <div className="products-list">
                  {activeCat.items.map((item: string, i: number) => {
                    const id = item.toLowerCase().replace(/[\s&/]+/g, '-');
                    return (
                      <div key={i} className="product-item" id={id}>
                        <div className="product-dot"></div>
                        <div className="product-name">{item}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Sections Layout for Material Handling
                <div className="sub-sections">
                  {activeCat.sections?.map((sec: any, i: number) => (
                    <div key={i} className="sub-section">
                      <h3>{sec.title}</h3>
                      <div className="products-list">
                        {sec.items.map((item: string, j: number) => {
                          const id = item.toLowerCase().replace(/[\s&/]+/g, '-');
                          return (
                            <div key={j} className="product-item" id={id}>
                              <div className="product-dot"></div>
                              <div className="product-name">{item}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="cta-strip" style={{ marginTop: '48px' }}>
              <div>
                <h3>Interested in This Category?</h3>
                <p>Talk to our specialists for pricing, availability &amp; technical specs.</p>
              </div>
              <button className="cta-btn">Get a Quote</button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
