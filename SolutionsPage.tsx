'use client'

interface SolutionsPageProps {
  onStartTrial?: () => void
}

export default function SolutionsPage({ onStartTrial }: SolutionsPageProps) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Solutions</h1>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          Powerful AI agents for every use case
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-blue-300 transition shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Businesses</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Automate repetitive tasks, enhance customer service, and scale operations with enterprise-grade AI agents.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Custom agent deployment
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Team collaboration tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Advanced analytics
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Priority support
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-300 transition shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Developers</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Build, publish, and monetize your AI agents. Reach thousands of users and grow your developer business.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Easy integration APIs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Revenue sharing model
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Developer community
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Technical documentation
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users and developers already using AgentCity
          </p>
          <button 
            onClick={onStartTrial}
            className="px-10 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg text-lg" 
            style={{ backgroundColor: '#335acf' }}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  )
}
