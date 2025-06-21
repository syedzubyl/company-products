import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10 px-4 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Company Description */}
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: 'rgba(0, 95, 137, 1)' }}>Sri Mutharamman Engineering</h2>
          <p className="mb-4 text-sm text-gray-600">
            <span style={{ color: 'rgba(0, 95, 137, 1)', fontWeight: 600 }}>SRI MUTHARAMMAN ENGINEERING</span> stands as Tamil Nadu's premier destination for precision metal fabrication and engineering excellence. With over 15 years of proven expertise, we transform raw materials into perfectly crafted solutions through our advanced cutting, trimming, welding, and joining technologies.
          </p>
          <h3 className="font-semibold mb-1 text-blue-800">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li><span className="font-semibold">Precision That Defines Excellence</span> – Every cut, every weld, every joint reflects our commitment to perfection. Our state-of-the-art equipment and skilled craftsmen ensure your projects meet the highest industry standards, delivering results that exceed expectations every time.</li>
            <li><span className="font-semibold">Innovation Meets Reliability</span> – From automotive components to industrial machinery, we bring innovative engineering solutions to life. Our ISO-certified processes guarantee consistent quality while our dedicated team provides personalized support throughout your project journey.</li>
            <li><span className="font-semibold">Your Success, Our Mission</span> – We don't just provide services; we build lasting partnerships. With rapid turnaround times, competitive pricing, and unwavering quality assurance, <span style={{ color: 'rgba(0, 95, 137, 1)', fontWeight: 600 }}>Sri Mutharamman Engineering</span> empowers your business to achieve new heights of success.</li>
          </ul>
        </div>
        {/* Call-to-Action */}
        <div>
          <h3 className="font-semibold mb-1 text-blue-800">Ready to Experience the Difference?</h3>
          <p className="text-sm mb-4 text-gray-600">
            Join hundreds of satisfied clients across Tamil Nadu who trust <span style={{ color: 'rgba(0, 95, 137, 1)', fontWeight: 600 }}>Sri Mutharamman Engineering</span> for their critical fabrication needs. Contact us today and discover how our expertise in cutting, trimming, welding, and joining can transform your vision into reality. Your next breakthrough project starts with a simple call!
          </p>
          <div className="mt-4">
            <a
              href="mailto:srimutharammanengineering@gmail.com"
              className="inline-block font-bold px-4 py-2 rounded transition bg-blue-800 text-white hover:bg-blue-900"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-1 text-blue-800">Contact Information</h3>
          <ul className="text-sm text-gray-600">
            <li><span className="font-bold">Email:</span> <a href="mailto:srimutharammanengineering@gmail.com" className="underline text-blue-800">srimutharammanengineering@gmail.com</a></li>
            <li><span className="font-bold">Phone:</span> <a href="tel:9841977261" className="underline text-blue-800">+91 98419 77261</a></li>
          </ul>
          <div className="mt-4">
            <p className="text-xs text-gray-400">Follow Our Journey – Stay updated with our latest projects, technological advances, and industry insights. Connect with us for exclusive updates and special offers.</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-xs text-gray-400">
        Website crafted with precision by the <span style={{ color: 'rgba(0, 95, 137, 1)', fontWeight: 600 }}>Sri Mutharamman Engineering</span> digital team. For technical support or feedback, contact <a href="mailto:srimutharammanengineering@gmail.com" className="underline text-blue-800">srimutharammanengineering@gmail.com</a>.
      </div>
    </footer>
  );
}
