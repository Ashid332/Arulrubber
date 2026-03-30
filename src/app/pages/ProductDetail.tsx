import { useState } from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router";
import { categoriesData, Product } from "../data/productsData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Placeholder for missing images to maintain professional UI
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=800&auto=format&fit=crop";

export function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const navigate = useNavigate();

  // Find the category
  const category = categoriesData.find((c) => c.id === categorySlug);
  
  // Find the product within the category (check standard items or sections)
  let product: Product | undefined;
  if (category) {
    if (category.items) {
      product = category.items.find((p) => p.slug === productSlug);
    } else if (category.sections) {
      for (const section of category.sections) {
        const found = section.items.find((p) => p.slug === productSlug);
        if (found) {
          product = found;
          break;
        }
      }
    }
  }

  if (!category || !product) {
    return <Navigate to="/products" replace />;
  }

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-[#f0f3f9] pb-24">
      {/* PAGE HEADER */}
      <div className="bg-gradient-to-br from-[#0d1f4c] to-[#1a3a8f] pt-12 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-white/50 text-xs font-semibold tracking-wider uppercase flex items-center flex-wrap gap-2 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span className="text-red-500">›</span>
            <Link to={`/products/${category.id}`} className="hover:text-white transition-colors">{category.name}</Link>
            <span className="text-red-500">›</span>
            <span className="text-white/90">{product.name}</span>
          </div>
          
          <div className="flex items-center gap-4 text-white hover:text-red-400 transition-colors cursor-pointer w-fit mb-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Back</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(13,31,76,0.08)] border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* IMAGE GALLERY SLIDER */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 bg-slate-50 relative group">
            {/* Main Image with Hover Zoom */}
            <div className="aspect-[4/3] w-full bg-white rounded-xl overflow-hidden border border-gray-200 relative mb-6 shadow-sm">
              <img 
                src={activeImage} 
                alt={product.name}
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                className="w-full h-full object-cover hover:scale-125 transition-transform duration-[800ms] cursor-zoom-in"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === img ? "border-red-600 shadow-md ring-2 ring-red-100" : "border-gray-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx}`} 
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
            <div className="uppercase tracking-[3px] text-xs font-bold text-red-600 mb-4">{category.name}</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d1f4c] font-['Barlow_Condensed'] uppercase leading-none mb-6">
              {product.name}
            </h1>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-4 mb-10 text-sm font-medium text-[#1e3a8a]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500" /> Fully scalable B2B solution
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500" /> Guaranteed reliability & durability
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500" /> Custom specification support
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link 
                to="/enquiry" 
                className="flex-1 text-center bg-[#0d1f4c] hover:bg-[#1a3a8f] text-white font-bold uppercase tracking-widest text-sm py-5 px-8 rounded-xl shadow-[0_8px_24px_rgba(13,31,76,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                Request Enquiry
              </Link>
              <a 
                href="/Arul_Products_Catalogue.pdf" 
                target="_blank"
                className="flex-1 text-center bg-transparent border-2 border-gray-300 text-gray-700 hover:border-[#0d1f4c] hover:text-[#0d1f4c] font-bold uppercase tracking-widest text-sm py-5 px-8 rounded-xl transition-all duration-300"
              >
                Download Specs
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
