import './globals.css'

export const metadata = {
  title: '鍼灸国試対策アプリ',
  description: 'スマホで学ぶ解剖学',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
