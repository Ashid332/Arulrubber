import { Link } from "react-router";
import { categoriesData } from "../data/productsData";
import "../components/Products.css";

export function ProductsIndex() {
  return (
    <div className="products-spa">
      {/* PAGE HEADER */}
      <div className="page-header" id="page-header">
        <div className="breadcrumb" id="breadcrumb">
          <Link to="/" className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">Home</Link>
          <span className="sep">›</span>
          <span className="current">Products</span>
        </div>
        <h1>
          <span>Explore Our</span>
          Products
        </h1>
        <div className="red-bar"></div>
      </div>

      {/* MAIN CONTAINER */}
      <main>
        {/* PAGE 1: CATEGORIES */}
        <div className="spa-page active">
          <div className="section-label">Our Offerings</div>
          <h2 className="section-title">Select a Product Category</h2>

          <div className="categories-grid">
            {categoriesData.map((cat, idx) => {
              const count = cat.items 
                ? cat.items.length 
                : cat.sections?.reduce((acc, sec) => acc + sec.items.length, 0);

              return (
                <Link key={idx} to={`/products/${cat.id}`} className="cat-card">
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
                </Link>
              );
            })}
          </div>

          <div className="cta-strip">
            <div>
              <h3>Need a Custom Solution?</h3>
              <p>Our engineering team can design and manufacture to your exact specifications.</p>
            </div>
            <Link to="/enquiry">
              <button className="cta-btn">Request Enquiry</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
