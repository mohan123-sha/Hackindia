'use client'

interface TaskResultProps {
  taskId: string
  goal: string
  onNewTask: () => void
}

export default function TaskResult({ taskId, goal, onNewTask }: TaskResultProps) {
  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
        {/* Agent Avatar */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center border-4 border-purple-500 shadow-lg">
              <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Research Agent</h2>
        
        {/* Status Badges */}
        <div className="flex justify-center items-center gap-3 mb-8 flex-wrap">
          <span className="px-4 py-2 bg-purple-100 rounded-full text-sm font-bold" style={{ color: '#6366f1' }}>
            ANALYSIS COMPLETE
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Task ID: {taskId}
          </span>
        </div>

        {/* User Goal */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Your Goal:</h4>
          <p className="text-gray-800">{goal}</p>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-xl mb-6">
          <div className="border-l-4 pl-4 py-2" style={{ borderColor: '#335acf' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis Insights</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Data processed across <span className="font-semibold" style={{ color: '#6366f1' }}>50+ global sources</span> including real-time financial feeds and proprietary consumer sentiment databases.
              </p>
              
              <p>
                Key <span className="italic font-medium">growth drivers</span> identified include emerging 2D/3D hybrid interfaces and micro-interaction personalization.
              </p>
              
              <p>
                Findings regarding <span className="font-bold text-gray-900">UI trends</span> suggest a pivot toward "Glassmorphism 2.0" where accessibility takes precedence over transparency levels.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onNewTask}
            className="w-full py-4 text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg text-lg"
            style={{ backgroundColor: '#6366f1' }}
          >
            Run Another Task
          </button>
          <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition text-lg">
            Export as PDF
          </button>
        </div>
      </div>
    </div>
  )
}
