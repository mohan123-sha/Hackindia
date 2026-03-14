'use client'

interface AuthModalProps {
  isLogin: boolean
  userType: 'user' | 'developer' | null
  onClose: () => void
  onToggleMode: () => void
}

export default function AuthModal({ isLogin, userType, onClose, onToggleMode }: AuthModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2 transition"
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {userType === 'user' ? 'User Portal' : userType === 'developer' ? 'Developer Portal' : 'AgentCity'}
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none transition"
                style={{ borderColor: 'rgba(51, 90, 207, 0.3)' }}
                onFocus={(e) => e.target.style.borderColor = '#335acf'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(51, 90, 207, 0.3)'}
                placeholder="Enter your email or username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none transition"
                style={{ borderColor: 'rgba(51, 90, 207, 0.3)' }}
                onFocus={(e) => e.target.style.borderColor = '#335acf'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(51, 90, 207, 0.3)'}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
              style={{ backgroundColor: '#335acf' }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={onToggleMode}
              className="hover:opacity-80 transition"
              style={{ color: '#335acf' }}
            >
              {isLogin ? "New here? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
