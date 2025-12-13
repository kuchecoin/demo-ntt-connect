import './globals.css'

export const metadata = {
  title: 'ASSDAQ Bridge',
  description: 'Cross-chain ASSDAQ transfers with Wormhole NTT',
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
