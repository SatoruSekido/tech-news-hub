# Google AdSense 収益化ガイド

## 前提条件

サイトが以下の状態になってから申請してください：

- ✅ Vercelにデプロイ済み
- ✅ 実際のニュース記事が50件以上表示されている
- ✅ 自動更新が動作している（GitHub Actionsで定期更新）
- ⏰ サイト運用開始から1〜2週間経過（推奨）

**重要：** AdSense審査は通常2〜4週間かかります。コンテンツが少ないと不承認になる可能性があります。

## ステップ1: Google AdSenseアカウント作成

1. https://www.google.com/adsense にアクセス
2. 「ご利用開始」をクリック
3. Googleアカウントでログイン
4. 必要情報を入力：
   - ウェブサイトURL: `https://tech-news-hub.vercel.app`
   - 国または地域: 日本
   - 利用規約に同意

## ステップ2: サイトをAdSenseに接続

### 2-1. AdSenseコード取得

AdSenseダッシュボードで表示される以下のようなコードをコピー：

\`\`\`html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
\`\`\`

### 2-2. コードをサイトに追加

[app/layout.tsx](app/layout.tsx) を編集：

\`\`\`tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* AdSense審査用コード */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### 2-3. デプロイ

\`\`\`bash
git add app/layout.tsx
git commit -m "🎯 Add Google AdSense code"
git push
\`\`\`

Vercelが自動デプロイします（約1〜2分）。

### 2-4. AdSenseで確認

AdSenseダッシュボードに戻り、「サイトにコードが見つかりました」と表示されたらOK。

## ステップ3: 審査待機

- 審査期間: 通常2〜4週間
- 審査中もサイトは通常通り運営を続けてください
- コンテンツを増やし続けることが重要

## ステップ4: 承認後の広告設定

### 4-1. 広告ユニット作成

AdSenseダッシュボードで：
1. 「広告」→「広告ユニットごと」
2. 「ディスプレイ広告」を選択
3. 名前: 「トップ広告」
4. 広告サイズ: レスポンシブ
5. 「作成」→広告コードをコピー

### 4-2. サイトに広告を配置

[app/page.tsx](app/page.tsx) の広告プレースホルダーを実際の広告コードに置き換え：

\`\`\`tsx
{/* 現在のプレースホルダー */}
<div className="ad-placeholder">
  Google AdSense広告エリア（申請後に実装）
</div>

{/* 以下に置き換え */}
<ins className="adsbygoogle"
     style={{display: 'block'}}
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="YYYYYYYYYY"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
\`\`\`

**注意:** サイトには2箇所広告エリアがあるので、両方設定することで収益最大化。

### 4-3. 広告コンポーネント化（推奨）

`components/AdSense.tsx` を作成：

\`\`\`tsx
'use client'

import { useEffect } from 'react'

export default function AdSense({
  adSlot
}: {
  adSlot: string
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
\`\`\`

[app/page.tsx](app/page.tsx) で使用：

\`\`\`tsx
import AdSense from '@/components/AdSense'

// プレースホルダーを以下に置き換え
<AdSense adSlot="YYYYYYYYYY" />
\`\`\`

## 収益目安

### 想定トラフィック
- 月間PV: 10,000〜50,000（開始6ヶ月目標）
- クリック率: 1〜3%
- クリック単価: 20〜100円

### 収益予測
- **月間1万PV:** 2,000〜5,000円
- **月間3万PV:** 6,000〜15,000円
- **月間5万PV:** 10,000〜25,000円

## 収益化を加速させるコツ

### 1. SEO最適化
- タイトルにキーワードを含める
- メタディスクリプションを充実
- サイトマップ追加

### 2. SNS連携
- X（Twitter）で毎日投稿
- はてなブックマーク対応

### 3. コンテンツ拡充
- カテゴリ追加（AI、Web開発、モバイルなど）
- 人気記事ランキング追加
- 検索機能追加

### 4. 更新頻度アップ
GitHub Actionsの更新頻度を変更（`.github/workflows/update-feeds.yml`）：

\`\`\`yaml
on:
  schedule:
    # 3時間ごとに変更
    - cron: '0 */3 * * *'
\`\`\`

## トラブルシューティング

### 審査が不承認になった場合

**主な理由:**
1. コンテンツ不足（記事数が少ない）
2. 独自コンテンツが少ない（RSSのコピーのみと判断された）
3. ポリシー違反（アダルト、暴力など）

**対策:**
1. 記事数を100件以上に増やす
2. 記事にコメント機能やタグ機能を追加
3. オリジナル記事を追加する
4. 1ヶ月待ってから再申請

### 広告が表示されない

1. AdSenseコードが正しく設置されているか確認
2. ブラウザの広告ブロッカーを無効化
3. 承認から24〜48時間待つ
4. AdSenseのポリシーセンターでエラーを確認

## 次のステップ

収益化が軌道に乗ったら：
1. 独自ドメイン取得（年間1,000円程度）
2. Google Analyticsで詳細分析
3. A/Bテストで広告配置最適化
4. 他のアフィリエイト追加（Amazon、楽天など）

---

**質問がある場合は、AdSenseヘルプセンターを参照:**
https://support.google.com/adsense
