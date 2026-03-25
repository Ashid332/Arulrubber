import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LeadBy } from "./components/LeadBy";
import { WhatWeDo } from "./components/WhatWeDo";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ProductsIndex } from "./pages/ProductsIndex";
import { CategoryPage } from "./pages/CategoryPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { CorporateInfo } from "./pages/CorporateInfo";
import { MDMessage } from "./pages/MDMessage";
import { Quality } from "./pages/Quality";
import { Certificates } from "./pages/Certificates";
import { Awards } from "./pages/Awards";
import { Achievements } from "./pages/Achievements";
import { Industries } from "./pages/Industries";
import { Facilities } from "./pages/Facilities";
import { ResearchAndDevelopment } from "./pages/ResearchAndDevelopment";
import { Clients } from "./pages/Clients";
import { News } from "./pages/News";
import { Enquiry } from "./pages/Enquiry";
import { ContactUs } from "./pages/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <LeadBy />
      <WhatWeDo />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-info" element={<CorporateInfo />} />
          <Route path="/md-message" element={<MDMessage />} />
          <Route path="/quality" element={<Quality />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/research-and-development" element={<ResearchAndDevelopment />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/news" element={<News />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<ProductsIndex />} />
        <Route path="/products/:categorySlug" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
