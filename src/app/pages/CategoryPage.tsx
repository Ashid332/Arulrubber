import { Link, useParams, Navigate, useNavigate } from "react-router";
import { categoriesData, CategoryData } from "../data/productsData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../components/Products.css";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=800&auto=format&fit=crop";

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
      <div className="page-header relative bg-gradient-to-br from-[#0d1f4c] to-[#1a3a8f] overflow-hidden py-14 px-12">
        <div className="breadcrumb text-white/50 text-xs tracking-wider uppercase flex items-center gap-2 mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-red-500">›</span>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <span className="text-red-500">›</span>
          <span className="text-white/90">{activeCat.name}</span>
        </div>
        <h1 className="text-white text-5xl font-extrabold tracking-wide font-['Barlow_Condensed']">
          <span className="block text-sm font-normal tracking-[3px] text-white/50 uppercase mb-2">Product Category</span>
          {activeCat.name}
        </h1>
        <div className="w-12 h-1 bg-red-600 rounded-full mt-5"></div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-12 py-12">
        <button 
          className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-slate-500 hover:text-[#0d1f4c] transition-colors mb-10"
          onClick={() => navigate('/products')}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </button>

        <div className="flex flex-wrap items-start justify-between gap-5 border-b border-gray-200 pb-6 mb-10">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2">Portfolio</div>
            <h2 className="text-4xl font-extrabold text-[#0d1f4c] font-['Barlow_Condensed'] uppercase">{activeCat.name}</h2>
            <p className="text-slate-500 mt-2 max-w-2xl leading-relaxed">{activeCat.desc}</p>
          </div>
          <span className="inline-flex py-1 px-4 bg-red-50 text-red-600 font-semibold text-xs border border-red-200 rounded-full whitespace-nowrap items-center">
            {count} Products
          </span>
        </div>

        {activeCat.items ? (
          /* STANDARD GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeCat.items.map((prod, i) => (
              <Link 
                key={i} 
                to={`/products/${activeCat.id}/${prod.slug}`} 
                className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(13,31,76,0.12)] hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={prod.images[0]} 
                    alt={prod.name}
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between bg-white z-20">
                  <h3 className="font-bold text-[#0d1f4c] text-[17px] leading-snug font-['Barlow_Condensed'] uppercase tracking-wide mb-3">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-red-600 transition-colors mt-auto">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* MATERIAL HANDLING SECTIONS */
          <div className="space-y-12">
            {activeCat.sections?.map((sec, i) => (
              <div key={i}>
                <h3 className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest text-[#1a3a8f] font-['Barlow_Condensed'] mb-6 pb-2 border-b-2 border-slate-100">
                  <div className="w-2.5 h-2.5 bg-red-600 rounded-sm" />
                  {sec.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sec.items.map((prod, j) => (
                    <Link 
                      key={j} 
                      to={`/products/${activeCat.id}/${prod.slug}`} 
                      className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(13,31,76,0.12)] hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={prod.images[0]} 
                          alt={prod.name}
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1 justify-between bg-white z-20">
                        <h3 className="font-bold text-[#0d1f4c] text-[17px] leading-snug font-['Barlow_Condensed'] uppercase tracking-wide mb-3">
                          {prod.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-red-600 transition-colors mt-auto">
                          View Details
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-br from-[#0d1f4c] to-[#1a3a8f] rounded-2xl p-10 flex flex-wrap items-center justify-between gap-6 shadow-2xl">
          <div className="text-white max-w-xl">
            <h3 className="text-3xl font-bold font-['Barlow_Condensed'] tracking-wide border-l-4 border-red-500 pl-4 mb-2">Interested in This Category?</h3>
            <p className="text-white/70 pl-5 text-sm">Talk to our engineering specialists for pricing, availability, and detailed technical specifications tailored to your unique constraints.</p>
          </div>
          <Link to="/enquiry" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 px-8 rounded-lg shadow-[0_8px_24px_rgba(200,39,29,0.3)] hover:-translate-y-1 transition-all duration-300">
            Get a Quote
          </Link>
        </div>
      </main>
    </div>
  );
}
