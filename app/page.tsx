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

export default function Home() {
  const contactRef = useRef<HTMLElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const testimonials = [
    {
      name: "Automotive Solutions Inc.",
      role: "Car Manufacturer",
      content:
        "Precision Machine Works delivered exceptional quality components for our new vehicle line. Their attention to detail and precision cutting services exceeded our expectations.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "TechDrive Motors",
      role: "Electric Vehicle Startup",
      content:
        "We partnered with Precision for our prototype components. Their welding quality and quick turnaround time helped us meet our tight launch schedule.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Global Auto Parts",
      role: "Parts Distributor",
      content:
        "As a distributor, we need reliable manufacturing partners. Precision Machine Works consistently delivers high-quality parts on time and within budget.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product)
    scrollToContact()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-400">Precision</span> Machine Works
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-blue-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="#products" className="hover:text-blue-400 transition-colors duration-300">
              Products
            </Link>
            <Link href="#services" className="hover:text-blue-400 transition-colors duration-300">
              Services
            </Link>
            <Link href="#portfolio" className="hover:text-blue-400 transition-colors duration-300">
              Portfolio
            </Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors duration-300">
              About
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-2xl">☰</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative text-white min-h-screen flex items-center">
          <div className="absolute inset-0 bg-black/70 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Manufacturing machinery"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Precision Machine Parts Manufacturing
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slideUp">
              High-quality cutting, trimming, welding and joining services for automotive parts
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-semibold animate-pulse hover:animate-none"
              onClick={scrollToContact}
            >
              Get a Quote
            </Button>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Products & Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Delivering precision-engineered components for the automotive industry with state-of-the-art technology
              and expert craftsmanship.
            </p>

            {/* Product Filters */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <Button className="filter-btn bg-blue-600 text-white" data-filter="all">
                All
              </Button>
              <Button
                className="filter-btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                variant="outline"
                data-filter="cutting"
              >
                Cutting
              </Button>
              <Button
                className="filter-btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                variant="outline"
                data-filter="trimming"
              >
                Trimming
              </Button>
              <Button
                className="filter-btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                variant="outline"
                data-filter="welding"
              >
                Welding
              </Button>
              <Button
                className="filter-btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                variant="outline"
                data-filter="joining"
              >
                Joining
              </Button>
            </div>

            {/* Product Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="product-card cutting bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Laser Cutting"
                    fill
                    className="object-cover rounded transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Precision Laser Cutting</h3>
                <p className="text-gray-600 mb-4">
                  High-accuracy laser cutting for metal parts with tolerances up to ±0.1mm
                </p>
                <div className="specs mb-4">
                  <p className="text-sm">
                    <strong>Materials:</strong> Steel, Aluminum, Copper
                  </p>
                  <p className="text-sm">
                    <strong>Thickness:</strong> 0.5mm - 20mm
                  </p>
                  <p className="text-sm">
                    <strong>Finish:</strong> Clean edges, no burrs
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-600 font-semibold hover:text-blue-800 p-0"
                  onClick={() => handleProductSelect("Precision Laser Cutting")}
                >
                  Request Quote →
                </Button>
              </div>

              {/* Product 2 */}
              <div className="product-card trimming bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="CNC Trimming"
                    fill
                    className="object-cover rounded transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">CNC Precision Trimming</h3>
                <p className="text-gray-600 mb-4">Computer-controlled trimming for complex automotive components</p>
                <div className="specs mb-4">
                  <p className="text-sm">
                    <strong>Materials:</strong> All metals, plastics
                  </p>
                  <p className="text-sm">
                    <strong>Accuracy:</strong> ±0.05mm
                  </p>
                  <p className="text-sm">
                    <strong>Capacity:</strong> Up to 1m x 1m
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-600 font-semibold hover:text-blue-800 p-0"
                  onClick={() => handleProductSelect("CNC Precision Trimming")}
                >
                  Request Quote →
                </Button>
              </div>

              {/* Product 3 */}
              <div className="product-card welding bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Spot Welding"
                    fill
                    className="object-cover rounded transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Automotive Spot Welding</h3>
                <p className="text-gray-600 mb-4">High-speed resistance welding for car body panels and frames</p>
                <div className="specs mb-4">
                  <p className="text-sm">
                    <strong>Materials:</strong> Steel, Stainless Steel
                  </p>
                  <p className="text-sm">
                    <strong>Thickness:</strong> 0.5mm - 3mm
                  </p>
                  <p className="text-sm">
                    <strong>Speed:</strong> Up to 60 welds/minute
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-600 font-semibold hover:text-blue-800 p-0"
                  onClick={() => handleProductSelect("Automotive Spot Welding")}
                >
                  Request Quote →
                </Button>
              </div>

              {/* Product 4 */}
              <div className="product-card joining bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Component Joining"
                    fill
                    className="object-cover rounded transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Component Joining</h3>
                <p className="text-gray-600 mb-4">
                  Precision joining of small automotive parts with mechanical fasteners
                </p>
                <div className="specs mb-4">
                  <p className="text-sm">
                    <strong>Materials:</strong> All metals
                  </p>
                  <p className="text-sm">
                    <strong>Size Range:</strong> 5mm - 200mm
                  </p>
                  <p className="text-sm">
                    <strong>Methods:</strong> Riveting, Bolting, Adhesives
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-600 font-semibold hover:text-blue-800 p-0"
                  onClick={() => handleProductSelect("Component Joining")}
                >
                  Request Quote →
                </Button>
              </div>

              {/* Product 5 */}
              <div className="product-card cutting bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Waterjet Cutting"
                    fill
                    className="object-cover rounded transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Waterjet Cutting</h3>
                <p className="text-gray-600 mb-4">Cold-cutting process for heat-sensitive materials</p>
                <div className="specs mb-4">
                  <p className="text-sm">
                    <strong>Materials:</strong> Metals, Composites, Glass
                  </p>
                  <p className="text-sm">
                    <strong>Thickness:</strong> Up to 150mm
                  </p>
                  <p className="text-sm">
                    <strong>Tolerance:</strong> ±0.2mm
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-600 font-semibold hover:text-blue-800 p-0"
                  onClick={() => handleProductSelect("Waterjet Cutting")}
                >
                  Request Quote →
                </Button>
              </div>

              {/* Product 6 */}
              <div className="product-card welding bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="MIG Welding"
                    fill
                    className="object-cover rounded transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">MIG Welding Services</h3>
                <p className="text-gray-600 mb-4">Gas metal arc welding for structural components</p>
                <div className="specs mb-4">
                  <p className="text-sm">
                    <strong>Materials:</strong> Steel, Aluminum
                  </p>
                  <p className="text-sm">
                    <strong>Thickness:</strong> 0.8mm - 12mm
                  </p>
                  <p className="text-sm">
                    <strong>Strength:</strong> Up to 500MPa
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-600 font-semibold hover:text-blue-800 p-0"
                  onClick={() => handleProductSelect("MIG Welding Services")}
                >
                  Request Quote →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We offer comprehensive manufacturing solutions tailored to your specific requirements.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">
                  <Cut className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Precision Cutting</h3>
                <p className="text-gray-600">High-accuracy cutting services for metal parts with tight tolerances.</p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">
                  <Scissors className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trimming</h3>
                <p className="text-gray-600">Precision trimming of metal components to exact specifications.</p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">
                  <Flame className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Welding</h3>
                <p className="text-gray-600">Expert welding services for strong, durable joints in metal parts.</p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">
                  <PuzzlePiece className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Joining</h3>
                <p className="text-gray-600">
                  Specialized joining techniques for assembling small automotive components.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Explore our previous projects and see the quality of our work.
            </p>

            <Tabs defaultValue="automotive" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="automotive">Automotive</TabsTrigger>
                <TabsTrigger value="aerospace">Aerospace</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
              </TabsList>

              <TabsContent value="automotive" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
                          alt={`Automotive Project ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold">Automotive Component {item}</h3>
                        <div className="flex items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="aerospace" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Aerospace ${item}`}
                          alt={`Aerospace Project ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold">Aerospace Component {item}</h3>
                        <div className="flex items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="industrial" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Industrial ${item}`}
                          alt={`Industrial Project ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold">Industrial Component {item}</h3>
                        <div className="flex items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              What our clients say about our precision manufacturing services.
            </p>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonials[currentTestimonial].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonials[currentTestimonial].content}"</p>
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center mt-6 gap-2">
                <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`rounded-full ${currentTestimonial === index ? "bg-blue-600 text-white" : ""}`}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Factory"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in the automotive parts manufacturing industry, we specialize in
                  precision machining services for small components.
                </p>
                <p className="text-gray-600 mb-4">
                  Our state-of-the-art facility is equipped with the latest technology to deliver high-quality results
                  with tight tolerances.
                </p>
                <p className="text-gray-600 mb-6">
                  We serve automotive manufacturers and suppliers across the region, providing reliable and
                  cost-effective solutions.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-1">15+</h4>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-1">500+</h4>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-1">50+</h4>
                    <p className="text-gray-600">Team Members</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-1">100+</h4>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Location</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Visit our state-of-the-art manufacturing facility or contact us directly.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Company Address
                  </h3>
                  <p className="text-gray-600 mb-2">123 Manufacturing Drive</p>
                  <p className="text-gray-600 mb-2">Industrial Park, Suite 500</p>
                  <p className="text-gray-600 mb-2">Detroit, MI 48201</p>
                  <p className="text-gray-600 mb-6">United States</p>

                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
                  <p className="text-gray-600 mb-2">Email: info@precisionmachineworks.com</p>
                  <p className="text-gray-600 mb-2">Hours: Monday-Friday, 8am-6pm EST</p>
                </div>
              </div>

              <div className="lg:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94371.54522464039!2d-83.1277807243164!3d42.33142789999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1616593075166!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Company Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
              Request a quote or get in touch with our team to discuss your manufacturing needs.
            </p>

            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2">Product/Service Needed</label>
                  <RadioGroup
                    defaultValue={selectedProduct || undefined}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {[
                      "Precision Laser Cutting",
                      "CNC Precision Trimming",
                      "Automotive Spot Welding",
                      "Component Joining",
                      "Waterjet Cutting",
                      "MIG Welding Services",
                      "Custom Project",
                      "Other",
                    ].map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md border border-gray-700"
                      >
                        <RadioGroupItem value={product} id={product.replace(/\s+/g, "-").toLowerCase()} />
                        <Label htmlFor={product.replace(/\s+/g, "-").toLowerCase()}>{product}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <label htmlFor="project-details" className="block mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="project-details"
                    rows={4}
                    placeholder="Please provide details about your project requirements, specifications, timeline, etc."
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block mb-2">
                    Estimated Quantity
                  </label>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-800 border-gray-700 focus:ring-blue-500">
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 units</SelectItem>
                      <SelectItem value="11-50">11-50 units</SelectItem>
                      <SelectItem value="51-100">51-100 units</SelectItem>
                      <SelectItem value="101-500">101-500 units</SelectItem>
                      <SelectItem value="501+">501+ units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block mb-2">
                    Project Timeline
                  </label>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-800 border-gray-700 focus:ring-blue-500">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                      <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                      <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                      <SelectItem value="planning">Planning Phase (3+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Submit Quote Request
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">
                <span className="text-blue-400">Precision</span> Machine Works
              </h3>
              <p className="text-gray-400 mt-2">Quality machining services since 2008</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Precision Machine Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

