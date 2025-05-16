import { ArrowUpRight, Code, Database, Layout, Smartphone } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks like Next.js and React.",
      price: "Starting at $200",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications built with Flutter and React Native.",
      price: "Starting at $300",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Pixel-perfect implementation of designs with responsive layouts and animations.",
      price: "Starting at $150",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Integration",
      description:
        "API development and database integration for your web and mobile applications.",
      price: "Starting at $250",
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional development services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-yellow-400 font-medium mb-4">
                {service.price}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-white hover:text-yellow-400 transition-colors"
              >
                Learn More
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            View All Services
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
