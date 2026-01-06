export const metadata = {
  title: '鍼灸国家試験対策',
  description: '穴埋め問題トレーニング',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
