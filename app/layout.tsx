import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech News Hub - 最新技術ニュースまとめ',
  description: 'プログラミング、AI、Web開発などの最新技術ニュースを毎日自動更新。エンジニア向けニュースアグリゲーター',
  keywords: ['技術ニュース', 'プログラミング', 'AI', 'Web開発', 'エンジニア'],
  openGraph: {
    title: 'Tech News Hub',
    description: '最新技術ニュースを毎日自動更新',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
