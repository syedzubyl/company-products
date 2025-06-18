import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-16 bg-[hsl(241,65%,32%)]">
      <h1 className="text-4xl font-bold text-[hsl(211,28%,52%)] mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-[hsl(211,28%,52%)] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image src="/welding.jpg" alt="Welding" width={400} height={250} className="rounded mb-4" />
          <h2 className="text-2xl font-semibold text-[hsl(211,28%,18%)] mb-2">Welding</h2>
          <p className="text-[hsl(211,28%,18%)]">High-quality welding services for industrial and commercial needs.</p>
        </div>
        <div className="bg-[hsl(211,28%,52%)] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image src="/welding2.jpg" alt="Welding 2" width={400} height={250} className="rounded mb-4" />
          <h2 className="text-2xl font-semibold text-[hsl(211,28%,18%)] mb-2">On-site Welding</h2>
          <p className="text-[hsl(211,28%,18%)]">Expert on-site welding for repairs and installations.</p>
        </div>
        <div className="bg-[hsl(211,28%,52%)] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image src="/cutting 1.jpg" alt="Cutting" width={400} height={250} className="rounded mb-4" />
          <h2 className="text-2xl font-semibold text-[hsl(211,28%,18%)] mb-2">Cutting</h2>
          <p className="text-[hsl(211,28%,18%)]">Accurate and efficient metal cutting services.</p>
        </div>
        <div className="bg-[hsl(211,28%,52%)] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image src="/products.jpeg" alt="Fabrication" width={400} height={250} className="rounded mb-4" />
          <h2 className="text-2xl font-semibold text-[hsl(211,28%,18%)] mb-2">Fabrication</h2>
          <p className="text-[hsl(211,28%,18%)]">Custom fabrication solutions for your engineering needs.</p>
        </div>
      </div>
    </div>
  );
}
