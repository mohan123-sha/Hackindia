'use client'

export default function WhyAgentCity() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Why AgentCity?</h1>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          The most trusted platform for AI agent discovery and development
        </p>
        
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#335acf' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Accelerate Your Workflow</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                AgentCity brings together the best AI agents in one platform, allowing you to automate complex tasks, 
                streamline processes, and focus on what matters most. No more switching between multiple tools.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="https://aicdn.picsart.com/26ad7556-4cb4-4dbd-b81a-e5f29844da41.png" 
                alt="Accelerate Your Workflow" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 order-2 md:order-1">
              <img 
                src="https://aicdn.picsart.com/d5f383e9-6d05-483e-8c2b-f060d0139987.jpg" 
                alt="For Developers, By Developers" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#335acf' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">For Developers, By Developers</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Built with developers in mind, AgentCity provides a robust platform to publish, monetize, and scale your AI agents. 
                Get real-time feedback, analytics, and reputation scores to grow your agent business.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#335acf' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted & Reliable</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every agent on AgentCity is vetted for quality and reliability. Our reputation system ensures you're always 
                working with the best, most trusted AI agents in the ecosystem.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="https://i0.wp.com/theactiveprofessional.com/wp-content/uploads/2024/04/shutterstock_499583230.jpg?fit=1000%2C667&ssl=1" 
                alt="Trusted & Reliable" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
