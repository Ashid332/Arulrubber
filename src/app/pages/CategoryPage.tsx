import { Link, useParams, Navigate, useNavigate } from "react-router";
import { categoriesData, CategoryData } from "../data/productsData";
import "../components/Products.css";

export function CategoryPage() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const activeCat: CategoryData | undefined = categoriesData.find(
    (c) => c.id === categorySlug
  );

  if (!activeCat) {
    return <Navigate to="/products" replace />;
  }

  const count = activeCat.items 
    ? activeCat.items.length 
    : activeCat.sections?.reduce((a, s) => a + s.items.length, 0);

  return (
    <div className="products-spa">
      {/* PAGE HEADER */}
      <div className="page-header" id="page-header">
        <div className="breadcrumb" id="breadcrumb">
          <Link to="/" className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">Home</Link>
          <span className="sep">›</span>
          <Link to="/products" className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">Products</Link>
          <span className="sep">›</span>
          <span className="current">{activeCat.name}</span>
        </div>
        <h1>
          <span>Product Category</span>
          {activeCat.name}
        </h1>
        <div className="red-bar"></div>
      </div>

      {/* MAIN CONTAINER */}
      <main>
        <div className="spa-page active">
          <button className="back-btn" onClick={() => navigate('/products')}>
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
              {count} Products
            </span>
          </div>

          <div>
            {activeCat.items ? (
              // Simple Flat List
              <div className="products-list">
                {activeCat.items.map((item, i) => {
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
                {activeCat.sections?.map((sec, i) => (
                  <div key={i} className="sub-section">
                    <h3>{sec.title}</h3>
                    <div className="products-list">
                      {sec.items.map((item, j) => {
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
            <Link to="/enquiry">
              <button className="cta-btn">Get a Quote</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
