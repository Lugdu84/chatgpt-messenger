import '../styles/globals.css'
import React from 'react'
import SideBar from '@/components/SideBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head />
      <body>
        <div className="flex">
          <SideBar />
          <div className="bg-[#343541] flex-1"> {children}</div>
        </div>
      </body>
    </html>
  )
}
