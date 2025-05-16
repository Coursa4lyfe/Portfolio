import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Code,
  ExternalLink,
  Github,
  Laptop,
  Zap,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <Hero />

      {/* Skills Showcase Section */}
      <section className="py-24 bg-gray-900" id="skills">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm constantly learning and improving my skills in these
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "TypeScript",
                description:
                  "Building type-safe applications with modern JavaScript features",
                skills: ["Next.js", "React", "Node.js", "Express"],
              },
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "Flutter/Dart",
                description:
                  "Creating beautiful cross-platform mobile applications",
                skills: [
                  "UI Design",
                  "State Management",
                  "Firebase Integration",
                  "REST APIs",
                ],
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "React/React Native",
                description: "Developing responsive web and mobile interfaces",
                skills: ["Hooks", "Context API", "Redux", "Tailwind CSS"],
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <div className="text-yellow-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((subskill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                    >
                      {subskill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-24 bg-black" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">My Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                  alt="CheapLux Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  CheapLux
                </h3>
                <p className="text-gray-400 mb-4">
                  A luxury shopping platform with budget-friendly options. Built
                  with Next.js and Tailwind CSS.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80"
                  alt="Mobile App Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Task Manager
                </h3>
                <p className="text-gray-400 mb-4">
                  A Flutter mobile application for managing daily tasks with
                  cloud synchronization.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors animate-bounce-subtle hover:animate-none"
            >
              View My Services
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
