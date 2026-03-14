'use client'

import { useState } from 'react'
import type { Workflow, Agent } from '@/types/agent'

export default function AgentWorkflow() {
  const [goal, setGoal] = useState('')
  const [workflow, setWorkflow] = useState<Workflow | null>(null)

  const createWorkflow = () => {
    const mockAgents: Agent[] = [
      { id: '1', name: 'Data Analyzer', type: 'analyzer', status: 'running', reputation: 95, usageCount: 1240, capabilities: ['data-processing', 'analytics'] },
      { id: '2', name: 'Code Generator', type: 'generator', status: 'idle', reputation: 88, usageCount: 856, capabilities: ['code-gen', 'refactoring'] },
      { id: '3', name: 'Quality Checker', type: 'validator', status: 'idle', reputation: 92, usageCount: 2103, capabilities: ['testing', 'validation'] }
    ]

    setWorkflow({
      id: Date.now().toString(),
      goal,
      agents: mockAgents,
      status: 'running',
      progress: 35
    })
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">Workflow Composer</h2>
      
      <div className="mb-6">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal (e.g., 'Build a REST API with authentication')"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        <button
          onClick={createWorkflow}
          className="mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition"
        >
          Generate Workflow
        </button>
      </div>

      {workflow && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-purple-300 font-medium">Progress: {workflow.progress}%</span>
            <span className={`px-3 py-1 rounded-full text-sm ${workflow.status === 'running' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'}`}>
              {workflow.status}
            </span>
          </div>
          
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all" style={{ width: `${workflow.progress}%` }} />
          </div>

          <div className="space-y-3 mt-6">
            {workflow.agents.map((agent) => (
              <div key={agent.id} className="bg-white/5 rounded-lg p-4 border border-purple-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{agent.name}</h3>
                    <p className="text-sm text-gray-400">{agent.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold">★ {agent.reputation}</div>
                    <div className="text-xs text-gray-400">{agent.usageCount} uses</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
