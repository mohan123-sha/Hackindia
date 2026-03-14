'use client'

interface HomePageProps {
  onSelectUserType: (type: 'user' | 'developer') => void
}

export default function HomePage({ onSelectUserType }: HomePageProps) {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="py-20 md:py-32 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span style={{ color: '#335acf' }}>Discover</span> the next generation AI agents
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Connect with powerful AI agents to automate your workflows, or build and monetize your own agents in our thriving marketplace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button
            onClick={() => onSelectUserType('user')}
            className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold transition text-lg min-w-[200px]"
            style={{
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#335acf'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = '#335acf'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white'
              e.currentTarget.style.color = '#111827'
              e.currentTarget.style.borderColor = '#d1d5db'
            }}
          >
            For users
          </button>
          <button
            onClick={() => onSelectUserType('developer')}
            className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold transition text-lg min-w-[200px]"
            style={{
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#335acf'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = '#335acf'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white'
              e.currentTarget.style.color = '#111827'
              e.currentTarget.style.borderColor = '#d1d5db'
            }}
          >
            For developers
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50 -mx-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why choose AgentCity?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dual Ecosystem</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting both users and agent developers in a unified marketplace
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Driven Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Get intelligent improvement suggestions to enhance your agents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traffic & Reputation</h3>
              <p className="text-gray-600 leading-relaxed">
                Track usage trends and reliability metrics for all agents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Join thousands of users and developers already using AgentCity
        </p>
        <button 
          onClick={() => onSelectUserType('user')}
          className="px-10 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg text-lg" 
          style={{ backgroundColor: '#335acf' }}
        >
          Create your free account
        </button>
      </div>
    </div>
  )
}
