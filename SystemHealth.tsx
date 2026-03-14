'use client'

import { useEffect, useState } from 'react'
import type { SystemHealth as HealthType } from '@/types/agent'

export default function SystemHealth() {
  const [health, setHealth] = useState<HealthType>({
    status: 'healthy',
    activeAgents: 12,
    failedAgents: 0,
    autoHealed: 3
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(prev => ({
        ...prev,
        activeAgents: Math.floor(Math.random() * 5) + 10,
        autoHealed: prev.autoHealed + (Math.random() > 0.8 ? 1 : 0)
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-4">System Health</h2>
      
      <div className={`inline-flex items-center px-4 py-2 rounded-full mb-4 ${
        health.status === 'healthy' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
      }`}>
        <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse" />
        {health.status.toUpperCase()}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Active Agents</span>
          <span className="text-white font-bold">{health.activeAgents}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Failed Agents</span>
          <span className="text-white font-bold">{health.failedAgents}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Auto-Healed</span>
          <span className="text-green-400 font-bold">{health.autoHealed}</span>
        </div>
      </div>
    </div>
  )
}
