'use client'

import { useState, useEffect } from 'react'

interface SignUpPageProps {
  userType: 'user' | 'developer'
  onBack: () => void
  initialMode?: 'login' | 'signup'
  onLogin?: (name: string, type: 'user' | 'developer') => void
}

export default function SignUpPage({ userType, onBack, initialMode = 'login', onLogin }: SignUpPageProps) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login')
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - extract name from email
    const name = email.split('@')[0] || 'User'
    if (onLogin) {
      onLogin(name, userType)
    }
  }

  useEffect(() => {
    // Show popup on first visit
    const hasVisited = localStorage.getItem('agentcity_visited')
    if (!hasVisited) {
      setShowPopup(true)
      localStorage.setItem('agentcity_visited', 'true')
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-slideInLeft">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to AgentCity!</h3>
              <p className="text-gray-600 mb-4">
                New here? We recommend creating an account to get started.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Security Tip</h4>
                  <p className="text-sm text-gray-700">
                    Use a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsLogin(false)
                  closePopup()
                }}
                className="flex-1 py-3 rounded-lg font-semibold text-white transition shadow-lg"
                style={{ backgroundColor: '#335acf' }}
              >
                Sign Up Now
              </button>
              <button
                onClick={closePopup}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Left Side - Welcome Section with Earth Animation */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-12 flex-col justify-center relative overflow-hidden animate-slideInLeft">
        {/* Rotating Earth Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="animate-rotateEarth">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="180" fill="url(#earthGradient)" />
              <defs>
                <radialGradient id="earthGradient">
                  <stop offset="0%" stopColor="#4A90E2" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </radialGradient>
              </defs>
              {/* Continents simplified */}
              <path d="M200 50 Q250 80 280 120 Q300 160 290 200 Q280 240 250 270 Q220 300 180 290 Q140 280 120 250 Q100 220 110 180 Q120 140 150 100 Q180 60 200 50" fill="#2D5016" opacity="0.6"/>
              <path d="M150 150 Q180 140 200 160 Q220 180 210 210 Q200 240 170 230 Q140 220 130 190 Q120 160 150 150" fill="#2D5016" opacity="0.6"/>
            </svg>
          </div>
        </div>

        <div className="max-w-md relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <img 
              src="https://aicdn.picsart.com/63a1c302-8140-45b7-82bc-7dcbec3a7f39.png" 
              alt="AgentCity Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-3xl font-bold text-white">AgentCity</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to<br />AgentCity Community
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            {userType === 'user' 
              ? 'Home to thousands of AI agents ready to transform your workflow'
              : 'Home to thousands of developers building the future of AI agents'}
          </p>
          <button className="text-blue-400 hover:text-blue-300 transition">
            Know more →
          </button>
        </div>
      </div>

      {/* Right Side - Login/Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2 transition"
          >
            ← Back
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome back!' : 'Join us'}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {isLogin ? 'Login to your account' : 'Create an AgentCity account'}
            </h3>
            <p className="text-gray-600">
              {isLogin 
                ? "It's nice to see you again. Ready to code?"
                : `Be part of a growing community of ${userType === 'user' ? 'users' : 'developers'}`}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            )}

            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isLogin ? "Your username or email" : "Email"}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline transition">
                  Forgot password?
                </a>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to AgentCity's{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
              style={{ backgroundColor: '#335acf' }}
            >
              {isLogin ? 'Log in' : 'Sign up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="hover:opacity-80 transition"
              style={{ color: '#335acf' }}
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
