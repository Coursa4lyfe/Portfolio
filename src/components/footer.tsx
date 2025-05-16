import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800" id="contact">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-400">aspid@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Discord</h3>
                    <p className="text-gray-400">@aspid</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-gray-800 pt-12">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-400">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <p className="text-gray-400">
              Young developer passionate about creating beautiful, functional
              web and mobile applications.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Aspid. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
