'use client'

export default function AgentMarketplace() {
  const topAgents = [
    { name: 'SQL Expert', reputation: 98, trend: '+12%' },
    { name: 'API Builder', reputation: 95, trend: '+8%' },
    { name: 'UI Designer', reputation: 93, trend: '+15%' }
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-4">Top Agents</h2>
      
      <div className="space-y-3">
        {topAgents.map((agent, idx) => (
          <div key={idx} className="bg-white/5 rounded-lg p-3 border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">{agent.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-400 text-sm">★ {agent.reputation}</span>
                  <span className="text-green-400 text-xs">{agent.trend}</span>
                </div>
              </div>
              <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition">
                Use
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
