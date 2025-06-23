"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ScissorsIcon as Cut,
  Scissors,
  Flame,
  PuzzleIcon as PuzzlePiece,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Star,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import '@fontsource/merriweather/latin.css';

export default function Home() {
  const contactRef = useRef<HTMLElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAllProducts, setShowAllProducts] = useState(false);
  // WhatsApp floating button modal state
  const [showWAForm, setShowWAForm] = useState(false);
  const [waName, setWAName] = useState('');
  const [waMsg, setWAMsg] = useState('');
  // Contact form state for WhatsApp integration
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactProduct, setContactProduct] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [contactQuantity, setContactQuantity] = useState('');
  const [contactTimeline, setContactTimeline] = useState('');

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const testimonials = [
    {
      name: "Automotive Solutions Inc.",
      role: "Car Manufacturer",
      content:
        "SRI MUTHARAMMAN ENGINEERING delivered exceptional quality components for our new vehicle line. Their attention to detail and precision cutting services exceeded our expectations.",
      rating: 5,
    },
    {
      name: "TechDrive Motors",
      role: "Electric Vehicle Startup",
      content:
        "We partnered with SRI MUTHARAMMAN ENGINEERING for our prototype components. Their welding quality and quick turnaround time helped us meet our tight launch schedule.",
      rating: 4,
    },
    {
      name: "Global Auto Parts",
      role: "Parts Distributor",
      content:
        "As a distributor, we need reliable manufacturing partners. SRI MUTHARAMMAN ENGINEERING consistently delivers high-quality parts on time and within budget.",
      rating: 5,
    },
    {
      name: "Precision Gears Pvt Ltd.",
      role: "Industrial Gear Manufacturer",
      content:
        "Sri Mutharamman Engineering's gear cutting and machining services have been crucial to our production line. Their expertise and reliability are unmatched.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const allProducts = [
    // Gear Cutting
    { name: 'Gear Cutting', category: 'gearcutting', image: '/images/gear cutting1.png', desc: 'Precision gear manufacturing for automotive and industrial applications.', specs: ['Types: Spur, Helical, Bevel, Worm', 'Module Range: 0.5 - 10', 'Diameter: Up to 500mm'] },
    { name: 'Gear Cutting', category: 'gearcutting', image: '/images/gear cutting2.png', desc: 'High-accuracy gear shaping and hobbing.', specs: ['Types: Spur, Helical', 'Module Range: 1 - 8', 'Diameter: Up to 300mm'] },
    // Milling
    { name: 'Milling', category: 'milling', image: '/images/Milling1.png', desc: 'High-precision milling for complex shapes and surfaces.', specs: ['Materials: Steel, Aluminum, Brass', 'Accuracy: ±0.02mm', 'Capacity: Up to 1m x 1m'] },
    { name: 'Milling', category: 'milling', image: '/images/Milling2.png', desc: 'CNC milling for custom parts.', specs: ['Materials: All metals', 'Batch Size: 1-1000', 'Surface Finish: Ra 1.6'] },
    // Tapping
    { name: 'Tapping', category: 'tapping', image: '/images/Tapping1.png', desc: 'Thread creation inside holes for bolts and fasteners.', specs: ['Thread Sizes: M2 - M36', 'Depth: Up to 100mm', 'Types: Through, Blind'] },
    { name: 'Tapping', category: 'tapping', image: '/images/Tapping2.png', desc: 'Automated tapping for high-volume production.', specs: ['Thread Sizes: M4 - M24', 'Batch Size: 10-10000', 'Accuracy: ±0.05mm'] },
    // Threading
    { name: 'Threading', category: 'threading', image: '/images/Threading1.png', desc: 'External and internal threading for all types of fasteners.', specs: ['Thread Types: Metric, UNC, UNF, BSP', 'Diameter: 2mm - 100mm', 'Length: Up to 500mm'] },
    { name: 'Threading', category: 'threading', image: '/images/Threading2.png', desc: 'Precision threading for custom shafts.', specs: ['Thread Types: Metric, UNF', 'Diameter: 5mm - 50mm', 'Length: Up to 200mm'] },
    // Machining
    { name: 'Machining', category: 'machining', image: '/images/Machining1.png', desc: 'Comprehensive machining services for custom parts and prototypes.', specs: ['Processes: Turning, Milling, Drilling', 'Materials: All metals, plastics', 'Batch Size: 1 - 10,000 units'] },
    // Drilling
    { name: 'Drilling', category: 'drilling', image: '/images/Drilling1.png', desc: 'Precision drilling for holes of all sizes and depths.', specs: ['Diameter: 1mm - 50mm', 'Depth: Up to 300mm', 'Types: Through, Blind, Counterbore'] },
    { name: 'Drilling', category: 'drilling', image: '/images/Drilling2.png ', desc: 'Automated drilling for high-volume production.', specs: ['Diameter: 2mm - 30mm', 'Batch Size: 100-10000', 'Accuracy: ±0.05mm'] },
    // Cutting
    { name: 'Cutting', category: 'cutting', image: '/images/Cutting1.png', desc: 'High-precision cutting for all types of materials and shapes.', specs: ['Materials: Steel, Aluminum, Plastics', 'Thickness: 0.5mm - 50mm', 'Methods: Sawing, Shearing'] },
    { name: 'Cutting', category: 'cutting', image: '/images/cutting2.png', desc: 'Sheet metal cutting for automotive and industrial parts.', specs: ['Materials: All metals', 'Batch Size: 1-5000', 'Accuracy: ±0.1mm'] },
  ];

  const filteredProductsRaw = activeFilter === 'all' ? allProducts : allProducts.filter(p => p.category === activeFilter);
  const filteredProducts = showAllProducts ? filteredProductsRaw : filteredProductsRaw.slice(0, 6);

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product)
    scrollToContact()
  }

  // GALLERY IMAGES ARRAY
  const galleryImages = [
    { src: '/flange bushing.jpg', label: 'Flange Bushing' },
    { src: '/wheel.jpg', label: 'Weld Neck Flange' },
    { src: '/thread screw rod.jpg', label: 'Thread Screw Rod' },
    { src: '/industrial-shafts.jpg', label: 'Industrial Shafts' },
    { src: '/joining.jpg', label: 'Joining' },
    { src: '/gearshaft.jpg', label: 'Gear Shaft' },
    { src: '/Tubesheets.jpg', label: 'Tube Sheets' },
    { src: '/flange.jpg', label: 'Welded Flange' },
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
          {/* Floating Circles */}
          <div className="absolute top-1/5 left-1/12 w-16 h-16 bg-white/20 rounded-full animate-float1 blur-md" />
          <div className="absolute top-2/3 right-1/6 w-10 h-10 bg-white/20 rounded-full animate-float2 blur-md" />
          <div className="absolute bottom-1/5 left-1/5 w-20 h-20 bg-white/20 rounded-full animate-float3 blur-md" />
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 drop-shadow-lg animate-slideInUp font-[Merriweather,serif]" style={{ fontFamily: 'Merriweather, serif', fontVariationSettings: '"ital" 0, "wdth" 100, "wght" 700' }}>
              SRI MUTHARAMMAN ENGINEERING
            </h1>
            <p className="text-lg md:text-2xl font-light text-blue-900/90 mb-8 animate-slideInUp delay-200">
              Precision Engineering Solutions | Expert Cutting, Trimming, Welding, Machining, Drilling & Joining Services
              <br />
              Delivering Excellence for Over 25 Years Across Tamil Nadu
            </p>
            <button
              className="cta-button bg-gradient-to-r from-pink-400 to-pink-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:from-pink-500 hover:to-pink-400 transition-all duration-300 animate-slideInUp delay-400"
              onClick={scrollToContact}
            >
              Get a Quote
            </button>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-8 md:py-20 bg-white animate-fadeInUp">
          <div className="container mx-auto px-2 md:px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-3 md:mb-4 animate-slideInUp">Our Products & Services</h2>
            <p className="text-center text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto text-sm md:text-base animate-fadeIn delay-100">
              Delivering precision-engineered components for the automotive industry with state-of-the-art technology
              and expert craftsmanship.
            </p>

            {/* Product Filters */}
            <div className="flex flex-wrap justify-center mb-4 md:mb-8 gap-2 animate-fadeIn delay-200">
              {[
                { label: 'All', value: 'all' },
                { label: 'Gear Cutting', value: 'gearcutting' },
                { label: 'Milling', value: 'milling' },
                { label: 'Tapping', value: 'tapping' },
                { label: 'Threading', value: 'threading' },
                { label: 'Machining', value: 'machining' },
                { label: 'Drilling', value: 'drilling' },
                { label: 'Cutting', value: 'cutting' },
              ].map(btn => (
                <Button
                  key={btn.value}
                  className={`filter-btn text-xs md:text-base px-2 md:px-4 py-2 ${activeFilter === btn.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  variant={activeFilter === btn.value ? 'default' : 'outline'}
                  onClick={() => { setActiveFilter(btn.value); setShowAllProducts(false); }}
                  data-filter={btn.value}
                >
                  {btn.label}
                </Button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 gap-y-6">
              {filteredProducts.map((product, idx) => (
                <div key={idx} className={`product-card ${product.category} bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#4D55CC] animate-fadeInUp`} style={{ animationDelay: `${0.1 * idx}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm font-bold text-[#4D55CC]">{idx + 1}</span>
                    <span className="text-xs md:text-sm text-gray-400 capitalize">{product.category.replace(/ing$/, 'ing')}</span>
                  </div>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover rounded w-full h-full"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="specs mb-4">
                    {product.specs.map((spec, i) => (
                      <p className="text-sm" key={i}>{spec}</p>
                    ))}
                  </div>
                  <Button variant="link" className="text-blue-600 font-semibold hover:text-blue-800 p-0" onClick={() => handleProductSelect(product.name)}>
                    Request Quote →
                  </Button>
                </div>
              ))}
              {filteredProductsRaw.length > 6 && (
                <div className="flex items-center justify-center h-full col-span-full">
                  <Button onClick={() => setShowAllProducts(v => !v)} className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                    {showAllProducts ? 'Show Less' : 'View All'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-[#f4f8fb] animate-fadeInUp">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#024798] animate-slideInUp">Our Services</h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto animate-fadeIn delay-100">
              We offer comprehensive manufacturing solutions tailored to your specific requirements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cutting */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `0.1s` }}>
                <Image src="/cutting 2.jpg" alt="Cutting" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#024798]">Cutting</h3>
                <p className="text-gray-700 text-center">
                  Accurate and efficient metal cutting services using advanced machinery for clean, precise results on all types of metals.
                </p>
              </div>
              {/* Trimming */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `0.2s` }}>
                <Image src="/trimming.jpg" alt="Trimming" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#024798]">Trimming</h3>
                <p className="text-gray-700 text-center">
                  Precision trimming of metal components to exact specifications, ensuring smooth edges and perfect fit for assembly.
                </p>
              </div>
              {/* Welding */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `0.3s` }}>
                <Image src="/welding2.jpg" alt="Welding" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#024798]">Welding</h3>
                <p className="text-gray-700 text-center">
                  Expert welding services for strong, durable joints in metal parts, including MIG, TIG, and spot welding for all applications.
                </p>
              </div>
              {/* Joining */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `0.4s` }}>
                <Image src="/joining.jpg" alt="Joining" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#024798]">Joining</h3>
                <p className="text-gray-700 text-center">
                  Advanced joining techniques for assembling complex components, ensuring reliability and structural integrity in every project.
                </p>
              </div>
              {/* Machining */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `0.5s` }}>
                <Image src="/images/MACHINING.jpg" alt="Machining" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#024798]">Machining</h3>
                <p className="text-gray-700 text-center">
                  Comprehensive machining services for custom parts and prototypes, including turning, milling, and drilling for all metals and plastics.
                </p>
              </div>
              {/* Drilling */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `0.6s` }}>
                <Image src="/images/DRILLING 1.jpg" alt="Drilling" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#024798]">Drilling</h3>
                <p className="text-gray-700 text-center">
                  Precision drilling for holes of all sizes and depths, using advanced CNC and manual drilling machines for high accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Gallery Section */}
        <section id="gallery" className="py-10 md:py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-pink-50 animate-fadeInUp">
          <div className="container mx-auto px-2 md:px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-[#211C84]  drop-shadow-lg">Our Gallery</h2>
            <p className="text-center text-[#4D55CC] mb-6 md:mb-12 max-w-3xl mx-auto text-sm md:text-base animate-fadeIn delay-100">
              Explore some of the products and components we have manufactured for our clients.
            </p>
            <div className="overflow-x-auto flex space-x-6 pb-4 px-8 md:px-20 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow-2xl hover:shadow-pink-200 hover:scale-105 transition-transform duration-500 border-2 border-[#4D55CC] flex-shrink-0 transform-gpu hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                  <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                    <img src={img.src} alt={img.label} className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="text-center font-semibold text-[#211C84] py-2">{img.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-20 bg-[#f4f8fb] animate-fadeInUp">
          <div className="container mx-auto px-2 md:px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-[#211C84] animate-slideInUp">Client Testimonials</h2>
            <p className="text-center text-[#4D55CC] mb-6 md:mb-12 max-w-3xl mx-auto text-sm md:text-base animate-fadeIn delay-100">
              What our clients say about our engineering and manufacturing services.
            </p>

            <div className="relative max-w-xl md:max-w-4xl mx-auto animate-fadeInUp delay-200">
              <Card className="border-2 border-[#B5A8D5] shadow-xl bg-white">
                <CardContent className="p-4 md:p-8">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    <div className="w-full">
                      <div className="flex items-center mb-1 md:mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 md:h-5 md:w-5 ${i < testimonials[currentTestimonial].rating ? "text-yellow-400 fill-yellow-400" : "text-[#B5A8D5]"}`}
                          />
                        ))}
                      </div>
                      <p className="text-[#211C84] italic mb-2 md:mb-4 text-sm md:text-base">"{testimonials[currentTestimonial].content}"</p>
                      <div>
                        <h4 className="font-bold text-base md:text-lg text-[#4D55CC]">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-[#7A73D1] text-xs md:text-base">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap justify-center mt-4 md:mt-6 gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-[#B5A8D5] text-[#4D55CC] hover:bg-[#e3eef7]">
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`rounded-full border-[#B5A8D5] ${currentTestimonial === index ? "bg-[#4D55CC] text-white" : "text-[#4D55CC] hover:bg-[#e3eef7]"} text-xs md:text-base`}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button variant="outline" size="icon" className="rounded-full border-[#B5A8D5] text-[#4D55CC] hover:bg-[#e3eef7]">
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-10 md:py-20 bg-[#fafdff] animate-fadeInUp">
          <div className="container mx-auto px-2 md:px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col gap-6 animate-fadeInUp delay-100">
                {/* Company Production Image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105 min-h-[180px] md:min-h-[240px] mb-4">
                  <Image
                    src="/products.jpeg"
                    alt="Factory"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                {/* Map Field Below Image */}
                <div className="w-full h-48 md:h-[300px] rounded-lg overflow-hidden shadow-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps?q=Sri+Mutharamman+Engineering+No+126,+Korattur,+Ambattur,+Pothiamman+Koil+Street,+Chennai,+Tamil+Nadu,+600080&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Company Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
                {/* Both Location Buttons Under the Map */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=27/9,+Periyar+Nagar,+Mannurpet,+Chennai,+Tamil+Nadu+600098,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mb-2"
                >
                  Get Location for Unit I
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Sri+Mutharamman+Engineering+No+126,+Korattur,+Ambattur,+Pothiamman+Koil+Street,+Chennai,+Tamil+Nadu,+600080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Get Location for Unit II
                </a>
              </div>
              <div className="w-full lg:w-1/2 animate-fadeInUp delay-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 animate-slideInUp" style={{ color: 'rgba(0, 95, 137, 1)' }}>About <span>Sri Mutharamman Engineering</span></h2>
                <p className="text-gray-700 mb-3 md:mb-4 animate-fadeIn delay-100 text-base md:text-lg">
                  <span style={{ color: 'rgba(0, 95, 137, 1)', fontWeight: 600 }}>Sri Mutharamman Engineering</span> is a <span className="font-semibold">25 years 6 months old Proprietorship Firm</span> incorporated on <span className="font-semibold">10-Dec-1999</span>, having its registered office located at No.14/26 M, Mannurpet, Ambattur, Manickam Pillai Street, Chennai, Tamil Nadu.
                </p>
                <p className="text-gray-700 mb-3 md:mb-4 animate-fadeIn delay-200 text-base md:text-lg">
                  The major activity is <span className="font-semibold">Manufacturing</span>, sub-classified into <span className="font-semibold">Manufacture of machinery and equipment n.e.c.</span> and is primarily engaged in the <span className="font-semibold">Manufacture of other special purpose machinery n.e.c.</span>
                </p>
                <p className="text-gray-700 mb-4 md:mb-6 animate-fadeIn delay-300 text-base md:text-lg">
                  <span style={{ color: 'rgba(0, 95, 137, 1)', fontWeight: 600 }}>Sri Mutharamman Engineering</span> is classified as a <span className="font-semibold">Micro enterprise</span> in the financial year 2024-25. It has its unit situated at Chennai, Tamil Nadu.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 md:mb-6 animate-fadeIn delay-400">
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">Organisation Type</h4>
                    <p className="text-gray-700 text-sm md:text-base">Proprietary</p>
                  </div>
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">Date of Incorporation</h4>
                    <p className="text-gray-700 text-sm md:text-base">10-Dec-1999</p>
                  </div>
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">Major Activity</h4>
                    <p className="text-gray-700 text-sm md:text-base">Manufacturing</p>
                  </div>
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">Social Category</h4>
                    <p className="text-gray-700 text-sm md:text-base">General</p>
                  </div>
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow sm:col-span-2">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">Official Address</h4>
                    <p className="text-gray-700 text-sm md:text-base">No.14/26, M, Mannurpet, Ambattur, Manickam Pillai Street, Chennai, Tamil Nadu, 600050</p>
                  </div>
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow sm:col-span-2">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">Branches</h4>
                    <ul className="text-gray-700 list-disc ml-5 text-sm md:text-base">
                      <li>Chennai, Thiruvallur, Tamil Nadu: No.14/26, Mannurpet, Manickam Pillai Street, Chennai, Thiruvallur, Tamil Nadu, 600050</li>
                      <li>Chennai, Chennai, Tamil Nadu: No 126, Korattur, Ambattur, Pothiamman Koil Street, Chennai, Chennai, Tamil Nadu, 600080</li>
                    </ul>
                  </div>
                  <div className="bg-[#e3eef7] p-4 rounded-lg shadow sm:col-span-2">
                    <h4 className="font-bold text-base md:text-lg mb-1 text-[#024798]">National Industry Classification</h4>
                    <ul className="text-gray-700 list-disc ml-5 text-sm md:text-base">
                      <li>Manufacture of machinery and equipment n.e.c. &rarr; Manufacture of metal-forming machinery and machine tools &rarr; Manufacture of metal-forming machinery and machine tools n.e.c. (Manufacturing)</li>
                      <li>Manufacture of machinery and equipment n.e.c. &rarr; Manufacture of other special-purpose machinery &rarr; Manufacture of other special-purpose machinery n.e.c. (Manufacturing)</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.thecompanycheck.com/org/sri-mutharamman-engineering/9e12c536b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 animate-fadeIn delay-500 text-sm md:text-base"
                >
                  Check Company Details ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 bg-[#e3eef7] text-[#024798] animate-fadeInUp">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#211C84] animate-slideInUp">Contact Us</h2>
            <p className="text-center text-[#4D55CC] mb-12 max-w-3xl mx-auto animate-fadeIn delay-100">
              Reach out for a quote or to discuss your next project. Our team is ready to help you with all your engineering and manufacturing needs.
            </p>

            <div className="max-w-2xl mx-auto animate-fadeInUp delay-200">
              <form className="space-y-6" onSubmit={e => {
                e.preventDefault();
                const message =
                  `Contact Request from Website:%0A` +
                  `Name: ${contactName}%0A` +
                  `Email: ${contactEmail}%0A` +
                  `Phone: ${contactPhone}%0A` +
                  `Company: ${contactCompany}%0A` +
                  `Product/Service: ${contactProduct}%0A` +
                  `Details: ${contactDetails}%0A` +
                  `Quantity: ${contactQuantity}%0A` +
                  `Timeline: ${contactTimeline}`;
                window.open(`https://wa.me/917358547421?text=${encodeURIComponent(message)}`, '_blank');
              }}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#211C84] font-semibold">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded bg-white border border-[#B5A8D5] focus:outline-none focus:ring-2 focus:ring-[#4D55CC] text-[#211C84] placeholder-[#7A73D1]"
                    placeholder="Enter your name"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-[#211C84] font-semibold">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded bg-white border border-[#B5A8D5] focus:outline-none focus:ring-2 focus:ring-[#4D55CC] text-[#211C84] placeholder-[#7A73D1]"
                    placeholder="Enter your email"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-[#211C84] font-semibold">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded bg-white border border-[#B5A8D5] focus:outline-none focus:ring-2 focus:ring-[#4D55CC] text-[#211C84] placeholder-[#7A73D1]"
                    placeholder="Enter your phone number"
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-[#211C84] font-semibold">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded bg-white border border-[#B5A8D5] focus:outline-none focus:ring-2 focus:ring-[#4D55CC] text-[#211C84] placeholder-[#7A73D1]"
                    placeholder="Enter your company name"
                    value={contactCompany}
                    onChange={e => setContactCompany(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#211C84] font-semibold">Product/Service Needed</label>
                  <RadioGroup
                    defaultValue={selectedProduct || undefined}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    value={contactProduct}
                    onValueChange={setContactProduct}
                  >
                    {["Machining", "Drilling", "Cutting", "Gear Cutting", "Milling","Tapping", "Threading",  "Custom Project", "Other"].map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-2 bg-[#f4f8fb] p-3 rounded-md border border-[#B5A8D5]"
                      >
                        <RadioGroupItem value={product} id={product.replace(/\s+/g, "-").toLowerCase()} className="accent-[#4D55CC]" />
                        <Label htmlFor={product.replace(/\s+/g, "-").toLowerCase()} className="text-[#211C84]">{product}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <label htmlFor="project-details" className="block mb-2 text-[#211C84] font-semibold">
                    Project Details
                  </label>
                  <Textarea
                    id="project-details"
                    rows={4}
                    placeholder="Please provide details about your project requirements, specifications, timeline, etc."
                    className="w-full px-4 py-2 rounded bg-white border border-[#B5A8D5] focus:outline-none focus:ring-2 focus:ring-[#4D55CC] text-[#211C84] placeholder-[#7A73D1]"
                    value={contactDetails}
                    onChange={e => setContactDetails(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block mb-2 text-[#211C84] font-semibold">
                    Estimated Quantity
                  </label>
                  <Select value={contactQuantity} onValueChange={setContactQuantity}>
                    <SelectTrigger className="w-full bg-white border-[#B5A8D5] focus:ring-[#4D55CC] text-[#211C84]">
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-[#211C84] border-[#B5A8D5]">
                      <SelectItem value="1-10">1-10 units</SelectItem>
                      <SelectItem value="11-50">11-50 units</SelectItem>
                      <SelectItem value="51-100">51-100 units</SelectItem>
                      <SelectItem value="101-500">101-500 units</SelectItem>
                      <SelectItem value="501+">501+ units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block mb-2 text-[#211C84] font-semibold">
                    Project Timeline
                  </label>
                  <Select value={contactTimeline} onValueChange={setContactTimeline}>
                    <SelectTrigger className="w-full bg-white border-[#B5A8D5] focus:ring-[#4D55CC] text-[#211C84]">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-[#211C84] border-[#B5A8D5]">
                      <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                      <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                      <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                      <SelectItem value="planning">Planning Phase (3+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#4D55CC] hover:bg-[#211C84] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Submit Quote Request
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* WhatsApp Floating Button */}
      <a
        onClick={() => setShowWAForm(true)}
        className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all cursor-pointer"
        title="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
        </svg>
      </a>
      {/* WhatsApp Modal */}
      {showWAForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-bold mb-2">Send WhatsApp Message</h3>
            <input
              className="w-full border rounded px-2 py-1 mb-2"
              placeholder="Your Name"
              value={waName}
              onChange={e => setWAName(e.target.value)}
            />
            <textarea
              className="w-full border rounded px-2 py-1 mb-2"
              placeholder="Your Message"
              value={waMsg}
              onChange={e => setWAMsg(e.target.value)}
            />
            <button
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              onClick={() => {
                const url = `https://wa.me/917358547421?text=Hi%20Sir,%20My%20name%20is%20${encodeURIComponent(waName)}.%20${encodeURIComponent(waMsg)}`;
                window.open(url, '_blank');
              }}
            >
              Send Message
            </button>
            <button
              className="w-full mt-2 text-gray-500"
              onClick={() => setShowWAForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}

                      