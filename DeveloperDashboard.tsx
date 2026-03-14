'use client'

import { useState } from 'react'

interface DeveloperDashboardProps {
  userName: string
  onLogout: () => void
}

export default function DeveloperDashboard({ userName, onLogout }: DeveloperDashboardProps) {
  const [activeTab, setActiveTab] = useState<'publish' | 'myAgents' | 'analytics'>('publish')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const [agentName, setAgentName] = useState('')
  const [agentDescription, setAgentDescription] = useState('')
  const [apiEndpoint, setApiEndpoint] = useState('')
  const [developerName, setDeveloperName] = useState('')
  const [verificationStatus, setVerificationStatus] = useState<'none' | 'success' | 'error'>('none')
  const [verificationMessage, setVerificationMessage] = useState('')

  const handleVerifyAgent = () => {
    // Validate all fields
    if (!agentName.trim()) {
      setVerificationStatus('error')
      setVerificationMessage('Agent name is required')
      return
    }
    if (!agentDescription.trim()) {
      setVerificationStatus('error')
      setVerificationMessage('Agent description is required')
      return
    }
    if (!apiEndpoint.trim()) {
      setVerificationStatus('error')
      setVerificationMessage('API endpoint URL is required')
      return
    }
    if (!developerName.trim()) {
      setVerificationStatus('error')
      setVerificationMessage('Developer name is required')
      return
    }

    // Validate URL format
    try {
      new URL(apiEndpoint)
    } catch {
      setVerificationStatus('error')
      setVerificationMessage('Invalid API endpoint URL format')
      return
    }

    // Simulate verification success
    setVerificationStatus('success')
    setVerificationMessage('Agent verified successfully!')
    console.log('Agent verified:', { agentName, agentDescription, apiEndpoint, developerName })
  }

  return (
    <div className="min-h-screen bg-white flex" style={{ fontFamily: 'TTbluescreens, "Times New Roman", Times, serif' }}>
      {/* Left Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white flex flex-col transition-all duration-300 overflow-hidden border-r border-gray-200`}>
        {/* Logo Section - Only logo, no text */}
        <div className="p-4 border-b border-gray-700 flex-shrink-0">
          <div className="flex items-center justify-center">
            <img 
              src="https://aicdn.picsart.com/63a1c302-8140-45b7-82bc-7dcbec3a7f39.png" 
              alt="AgentCity Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {/* New Deployment Button */}
          <button
            onClick={() => setActiveTab('publish')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition mb-4 text-white hover:opacity-90"
            style={{ backgroundColor: '#335acf' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-medium">New Deployment</span>
          </button>

          {/* My Agents Section */}
          <div className="mb-6">
            <button
              onClick={() => setActiveTab('myAgents')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'myAgents' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span className="font-medium">My Agents</span>
            </button>
          </div>

          {/* Analytics */}
          <div>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'analytics' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">Analytics</span>
            </button>
          </div>
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-4 border-t border-gray-700">
          <div className="relative">
            <div className="w-full flex items-center gap-3 p-2 rounded-lg">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: '#335acf' }}>
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-white">{userName}</p>
                <p className="text-xs text-gray-400">Developer</p>
              </div>
              <button
                onClick={onLogout}
                className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main 
        className="flex-1 flex flex-col"
        onClick={() => {
          if (isSidebarOpen) {
            setIsSidebarOpen(false)
          }
        }}
      >
        {/* Top Header */}
        <header className="border-b border-gray-200 bg-white px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Hamburger Menu Icon */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* AgentCity text - Show only when sidebar is closed */}
              {!isSidebarOpen && (
                <h2 className="text-2xl font-bold text-black animate-fadeIn">AgentCity</h2>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          {activeTab === 'publish' && (
            <div className="max-w-3xl mx-auto">
              {/* Badge */}
              <div className="flex justify-start mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                  <svg className="w-4 h-4" style={{ color: '#335acf' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: '#335acf' }}>NEW DEPLOYMENT</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Launch Your AI Agent
              </h1>
              
              <p className="text-gray-600 text-lg mb-12">
                Configure your agent's identity and connectivity to join the global neural ecosystem.
              </p>

              {/* Form */}
              <div className="space-y-6">
                {/* Agent Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    Agent Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="e.g. NeuralOptimizer-v1"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Agent Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    Agent Description
                  </label>
                  <textarea
                    value={agentDescription}
                    onChange={(e) => setAgentDescription(e.target.value)}
                    placeholder="Describe what your agent does, its specialties, and how it handles tasks..."
                    className="w-full h-40 px-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* API Endpoint URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    API Endpoint URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={apiEndpoint}
                      onChange={(e) => setApiEndpoint(e.target.value)}
                      placeholder="https://api.yourdomain.com/v1/agent"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Developer Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    Developer Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={developerName}
                      onChange={(e) => setDeveloperName(e.target.value)}
                      placeholder="e.g. Alex Chen"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Verify Button */}
                <button
                  onClick={handleVerifyAgent}
                  className="w-full py-4 text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2 text-lg"
                  style={{ backgroundColor: '#335acf' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verify Agent
                </button>

                {/* Verification Status */}
                {verificationStatus !== 'none' && (
                  <div className={`flex items-center gap-3 p-4 rounded-lg ${
                    verificationStatus === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {verificationStatus === 'success' ? (
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className={`font-semibold ${
                        verificationStatus === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {verificationStatus === 'success' ? 'Verification Successful' : 'Verification Failed'}
                      </p>
                      <p className={`text-sm ${
                        verificationStatus === 'success' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {verificationMessage}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'myAgents' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-12 border border-gray-200 text-center shadow-lg">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Agents Published Yet</h3>
                <p className="text-gray-600">Your published agents will appear here.</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-12 border border-gray-200 text-center shadow-lg">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Coming Soon</h3>
                <p className="text-gray-600">Track your agent's performance and usage statistics.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
