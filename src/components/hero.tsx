import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="bg-yellow-400 p-4 rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-3xl font-bold text-black">A</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
              Young{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Developer
              </span>{" "}
              with Big Ideas
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Aspid, a 13-year-old developer passionate about creating
              beautiful, functional web and mobile applications using
              TypeScript, Flutter/Dart, and React.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#projects"
                className="inline-flex items-center px-8 py-4 text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors text-lg font-medium"
              >
                View My Work
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-400" />
                <span>TypeScript Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-400" />
                <span>Flutter/Dart Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-400" />
                <span>React/React Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
