'use client'

interface HeaderProps {
  onLoginClick: () => void
  onSignUpClick: () => void
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ onLoginClick, onSignUpClick, currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40" style={{ fontFamily: 'TTbluescreens, "Times New Roman", Times, serif' }}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src="https://aicdn.picsart.com/63a1c302-8140-45b7-82bc-7dcbec3a7f39.png" 
              alt="AgentCity Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">AgentCity</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => onNavigate('home')}
              className={`text-gray-700 hover:text-gray-900 transition font-medium ${currentPage === 'home' ? 'text-gray-900 font-semibold' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('why')}
              className={`text-gray-700 hover:text-gray-900 transition font-medium ${currentPage === 'why' ? 'text-gray-900 font-semibold' : ''}`}
            >
              Why AgentCity?
            </button>
            <button
              onClick={() => onNavigate('solutions')}
              className={`text-gray-700 hover:text-gray-900 transition font-medium ${currentPage === 'solutions' ? 'text-gray-900 font-semibold' : ''}`}
            >
              Solutions
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-gray-700 hover:text-gray-900 transition font-medium ${currentPage === 'about' ? 'text-gray-900 font-semibold' : ''}`}
            >
              About Us
            </button>
          </nav>

          <div className="flex gap-4 items-center">
            <button
              onClick={onLoginClick}
              className="px-6 py-2 text-white rounded-lg font-semibold hover:opacity-90 transition shadow-md"
              style={{ backgroundColor: '#335acf' }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
