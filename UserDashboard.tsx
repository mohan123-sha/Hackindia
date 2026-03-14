'use client'

import { useState, useEffect } from 'react'
import TaskResult from './TaskResult'

interface UserDashboardProps {
  userName: string
  onLogout: () => void
}

export default function UserDashboard({ userName, onLogout }: UserDashboardProps) {
  const [goal, setGoal] = useState('')
  const [activeTab, setActiveTab] = useState<'main' | 'agents' | 'history' | 'result'>('main')
  const [isExecuting, setIsExecuting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedHistory, setSelectedHistory] = useState<number | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [taskResult, setTaskResult] = useState<{ taskId: string; goal: string } | null>(null)

  // Sample history data
  const historyItems = [
    { id: 1, title: 'Deploy Kubernetes cluster', date: 'Today', time: '2:30 PM' },
    { id: 2, title: 'Setup CI/CD pipeline', date: 'Today', time: '11:45 AM' },
    { id: 3, title: 'Configure load balancer', date: 'Yesterday', time: '4:20 PM' },
    { id: 4, title: 'Database migration script', date: 'Yesterday', time: '10:15 AM' },
    { id: 5, title: 'API endpoint optimization', date: 'Mar 12', time: '3:00 PM' },
    { id: 6, title: 'Security audit report', date: 'Mar 11', time: '1:30 PM' },
  ]

  const steps = [
    { label: 'Goal received', completed: false },
    { label: 'Agent selected', completed: false },
    { label: 'Processing...', completed: false }
  ]

  useEffect(() => {
    if (isExecuting) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            // When progress reaches 100%, navigate to result page
            setTimeout(() => {
              const taskId = `#${Math.floor(Math.random() * 9000) + 1000}-XP`
              setTaskResult({ taskId, goal })
              setIsExecuting(false)
              setActiveTab('result')
              // Scroll to top for new page feel
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 800)
            return 100
          }
          return prev + 2
        })
      }, 100)

      // Update steps
      const stepInterval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            clearInterval(stepInterval)
            return prev
          }
          return prev + 1
        })
      }, 2000)

      return () => {
        clearInterval(interval)
        clearInterval(stepInterval)
      }
    }
  }, [isExecuting, goal])

  const handleExecute = () => {
    setIsExecuting(true)
    setProgress(0)
    setCurrentStep(0)
  }

  const handleCancelTask = () => {
    setIsExecuting(false)
    setProgress(0)
    setCurrentStep(0)
  }

  const handleNewTask = () => {
    setActiveTab('main')
    setTaskResult(null)
    setGoal('')
    setProgress(0)
    setCurrentStep(0)
    setSelectedHistory(null)
  }

  return (
    <div className="min-h-screen bg-white flex" style={{ fontFamily: 'TTbluescreens, "Times New Roman", Times, serif' }}>
      {/* Left Sidebar - ChatGPT Style */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white flex flex-col transition-all duration-300 overflow-hidden`}>
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
          {/* New Chat Button */}
          <button
            onClick={() => {
              setActiveTab('main')
              setSelectedHistory(null)
              setGoal('')
              setIsExecuting(false)
              setProgress(0)
              setCurrentStep(0)
              setTaskResult(null)
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition mb-4 border border-gray-700 hover:bg-gray-800 text-gray-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-medium">New Task</span>
          </button>

          {/* My Agents Section */}
          <div className="mb-6">
            <button
              onClick={() => setActiveTab('agents')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'agents' 
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

          {/* History Section */}
          <div>
            <div className="px-4 mb-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent History</h3>
            </div>
            <ul className="space-y-1">
              {historyItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setSelectedHistory(item.id)
                      setActiveTab('main')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition group ${
                      selectedHistory === item.id
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.date} • {item.time}</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
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
                <p className="text-xs text-gray-400">Online</p>
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
          {activeTab === 'main' && !isExecuting && (
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                  <svg className="w-4 h-4" style={{ color: '#335acf' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: '#335acf' }}>NEXT GEN AUTONOMOUS AGENTS</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900">
                What would you like to <span style={{ color: '#335acf' }}>achieve?</span>
              </h1>
              
              <p className="text-center text-gray-600 text-lg mb-12">
                Define your objective and let our agents handle the orchestration.
              </p>

              {/* Goal Input Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                  Goal Description
                </label>
                
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Enter your goal here... e.g., 'Deploy a multi-cloud Kubernetes cluster and set up automated scaling policies based on CPU usage'"
                  className="w-full h-40 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent resize-none focus:ring-blue-500"
                />
                
                <div className="flex justify-between items-center mt-4 mb-6">
                  <span className="text-xs text-gray-500">Press ⌘ + Enter to execute</span>
                  <span className="text-xs text-gray-500">{goal.length} characters</span>
                </div>

                <button 
                  onClick={handleExecute}
                  className="w-full py-4 text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#335acf' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Execute Agent
                </button>
              </div>

              {/* Status Indicators */}
              <div className="flex justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Engine Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#335acf' }}></div>
                  <span className="text-sm text-gray-600">Latency: 24ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Secure Protocol</span>
                </div>
              </div>
            </div>
          )}

          {/* Task in Progress View */}
          {activeTab === 'main' && isExecuting && (
            <div className="max-w-2xl mx-auto flex items-center justify-center min-h-[600px]">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Task in Progress</h2>
                  <p className="text-gray-600">AI Agent is executing your requested operations</p>
                </div>

                {/* Steps */}
                <div className="space-y-4 mb-12">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {index < currentStep ? (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#335acf' }}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : index === currentStep ? (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border-2" style={{ borderColor: '#335acf' }}>
                          <div className="w-4 h-4 rounded-full animate-spin border-2 border-transparent" style={{ borderTopColor: '#335acf' }}></div>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                        </div>
                      )}
                      <span className={`text-lg font-medium ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600 uppercase tracking-wide">Total Progress</span>
                    <span className="text-3xl font-bold" style={{ color: '#335acf' }}>{progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-300"
                      style={{ 
                        width: `${progress}%`,
                        background: 'linear-gradient(to right, #335acf, #5b7fe6)'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Cancel Button */}
                <button
                  onClick={handleCancelTask}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Cancel Task
                </button>
              </div>
            </div>
          )}

          {/* Task Result Page */}
          {activeTab === 'result' && taskResult && (
            <TaskResult
              taskId={taskResult.taskId}
              goal={taskResult.goal}
              onNewTask={handleNewTask}
            />
          )}

          {activeTab === 'agents' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Agents Yet</h3>
                <p className="text-gray-600">Your agents will appear here once you start creating them.</p>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No History Yet</h3>
                <p className="text-gray-600">Your execution history will appear here.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
