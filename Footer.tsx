'use client'

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AgentCity</h3>
            <p className="text-gray-600 text-sm">
              The premier marketplace for AI agents. Discover, build, and deploy intelligent automation.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-600 hover:text-green-600 transition text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why')}
                  className="text-gray-600 hover:text-green-600 transition text-sm"
                >
                  Why AgentCity?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="text-gray-600 hover:text-green-600 transition text-sm"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-600 hover:text-green-600 transition text-sm"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2026 AgentCity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
