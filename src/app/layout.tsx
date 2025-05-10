import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import { ThirdwebProvider } from "thirdweb/react"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$PUCUK Token Airdrop",
  description: "Claim your $PUCUK tokens - A community-driven meme token on TEA Chain",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0a0711]">{children}</div>
      </body>
    </html>
    </ThirdwebProvider>
  )
}
