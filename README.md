# Tech News Hub - 技術ニュース自動集約サイト

アフィリエイト収益化を目的とした、技術ニュースを自動更新するサイトです。

## 機能

- 📰 複数の技術系RSSフィードから自動でニュース取得
- 🔄 GitHub Actionsで6時間ごとに自動更新
- 📱 レスポンシブデザイン（PC・スマホ対応）
- ⚡ Next.js静的サイト生成で高速表示
- 💰 Google AdSense対応準備済み

## 取得先サイト

- Zenn（日本の技術記事）
- Qiita（日本の技術記事）
- DEV.to（海外の技術記事）
- Publickey（IT業界ニュース）

## デプロイ手順

### 1. GitHubリポジトリ作成

```bash
# プロジェクトディレクトリで実行
cd /Users/user/Desktop/auto_deploy_project

# Gitリポジトリ初期化
git init
git add .
git commit -m "🚀 Initial commit: Tech News Hub"

# GitHubリポジトリ作成（以下のURLにアクセス）
# https://github.com/new
# リポジトリ名: tech-news-hub
# Public/Private: Public
# その他のオプション: チェックを入れない

# リモートリポジトリを追加してプッシュ
git remote add origin https://github.com/SatoruSekido/tech-news-hub.git
git branch -M main
git push -u origin main
```

### 2. Vercelデプロイ

1. https://vercel.com にアクセス
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」から `tech-news-hub` を選択
4. Framework Preset: Next.js（自動検出）
5. 「Deploy」をクリック

**デプロイ完了後、URLが発行されます（例: `https://tech-news-hub.vercel.app`）**

### 3. 初回ニュース更新

ローカルで一度実行してデータを生成：

```bash
npm install
npm run update-feeds
git add data/news.json
git commit -m "📰 Add initial news data"
git push
```

Vercelが自動で再デプロイし、サイトが更新されます。

## ローカル開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで http://localhost:3000 を開く
```

## 自動更新の仕組み

GitHub Actionsが6時間ごとに：
1. RSSフィードから最新ニュースを取得
2. `data/news.json` を更新
3. GitHubにコミット
4. Vercelが自動デプロイ（5分以内）

## Google AdSense設定（サイト公開後）

詳細は `ADSENSE_GUIDE.md` を参照してください。

## ライセンス

MIT
