'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage'
import WhyAgentCity from '@/components/WhyAgentCity'
import SolutionsPage from '@/components/SolutionsPage'
import AboutPage from '@/components/AboutPage'
import SignUpPage from '@/components/SignUpPage'
import UserDashboard from '@/components/UserDashboard'
import DeveloperDashboard from '@/components/DeveloperDashboard'

type Page = 'home' | 'why' | 'solutions' | 'about'
type UserType = 'user' | 'developer' | null

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [showSignUpPage, setShowSignUpPage] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLoginClick = () => {
    setSelectedUserType(null)
    setShowSignUpPage(true)
  }

  const handleSelectUserType = (type: 'user' | 'developer') => {
    setSelectedUserType(type)
    setShowSignUpPage(true)
  }

  const handleCloseSignUp = () => {
    setShowSignUpPage(false)
    setSelectedUserType(null)
  }

  const handleLogin = (name: string, type: 'user' | 'developer') => {
    setUserName(name)
    setSelectedUserType(type)
    setIsLoggedIn(true)
    setShowSignUpPage(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserName('')
    setSelectedUserType(null)
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page)
  }

  // Show User Dashboard after login (only for users)
  if (isLoggedIn && selectedUserType === 'user') {
    return <UserDashboard userName={userName} onLogout={handleLogout} />
  }

  // Show Developer Dashboard after login (only for developers)
  if (isLoggedIn && selectedUserType === 'developer') {
    return <DeveloperDashboard userName={userName} onLogout={handleLogout} />
  }

  if (showSignUpPage) {
    return (
      <SignUpPage 
        userType={selectedUserType || 'user'} 
        onBack={handleCloseSignUp}
        onLogin={handleLogin}
      />
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header
        onLoginClick={handleLoginClick}
        onSignUpClick={handleLoginClick}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <div className="min-h-[calc(100vh-200px)]">
        {currentPage === 'home' && <HomePage onSelectUserType={handleSelectUserType} />}
        {currentPage === 'why' && <WhyAgentCity />}
        {currentPage === 'solutions' && <SolutionsPage onStartTrial={() => handleSelectUserType('user')} />}
        {currentPage === 'about' && <AboutPage />}
      </div>

      <Footer onNavigate={handleNavigate} />
    </main>
  )
}
