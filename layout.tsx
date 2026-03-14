import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InnovationAI Agent Manager',
  description: 'Multi-agent workflow platform with self-healing capabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
