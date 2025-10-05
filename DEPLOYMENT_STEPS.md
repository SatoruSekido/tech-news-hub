# デプロイ手順（初回）

このガイドに従って、サイトを公開します。所要時間: 約10分

## 準備確認

- ✅ GitHubアカウント: SatoruSekido
- ✅ Vercelアカウント: GitHubでサインアップ済
- ✅ プロジェクトフォルダ: `/Users/user/Desktop/auto_deploy_project`

## ステップ1: GitHubリポジトリ作成（5分）

### 1-1. ターミナルで以下を実行

\`\`\`bash
cd /Users/user/Desktop/auto_deploy_project

# Git初期化
git init

# 全ファイルを追加
git add .

# 初回コミット
git commit -m "🚀 Initial commit: Tech News Hub"
\`\`\`

### 1-2. GitHubでリポジトリ作成

1. ブラウザで https://github.com/new を開く
2. 以下を入力：
   - **Repository name:** `tech-news-hub`
   - **Description:** 技術ニュース自動集約サイト
   - **Public/Private:** Public（AdSense審査にはPublicが推奨）
   - **その他のオプション:** すべてチェックを外す
3. 「Create repository」をクリック

### 1-3. リモートリポジトリに接続してプッシュ

ターミナルで以下を実行：

\`\`\`bash
# リモートリポジトリを追加
git remote add origin https://github.com/SatoruSekido/tech-news-hub.git

# ブランチ名をmainに変更
git branch -M main

# プッシュ
git push -u origin main
\`\`\`

**パスワード入力を求められた場合:**
- GitHubの個人アクセストークンが必要です
- https://github.com/settings/tokens で「Generate new token (classic)」
- スコープは「repo」のみ選択
- 生成されたトークンをパスワードとして入力

## ステップ2: 初回ニュースデータ生成（2分）

\`\`\`bash
# 依存関係をインストール
npm install

# ニュースフィードを取得
npm run update-feeds

# 生成されたデータをコミット
git add data/news.json
git commit -m "📰 Add initial news data"
git push
\`\`\`

## ステップ3: Vercelデプロイ（3分）

### 3-1. Vercelでプロジェクトをインポート

1. https://vercel.com にアクセス
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」セクションで `SatoruSekido/tech-news-hub` を探す
4. 「Import」をクリック

### 3-2. プロジェクト設定

以下の設定を確認（通常は自動検出されます）:

- **Framework Preset:** Next.js
- **Root Directory:** ./
- **Build Command:** `next build`
- **Output Directory:** 自動

他の設定は変更不要。

### 3-3. デプロイ実行

「Deploy」ボタンをクリック

デプロイ完了まで1〜2分待ちます。

## ステップ4: サイト確認

デプロイ完了後、以下のようなURLが発行されます：

\`\`\`
https://tech-news-hub.vercel.app
\`\`\`

または

\`\`\`
https://tech-news-hub-xxxxxxxxx.vercel.app
\`\`\`

ブラウザで開いてサイトを確認してください。

### 確認ポイント

- ✅ ページが正しく表示される
- ✅ ニュース記事が表示される（50件前後）
- ✅ レスポンシブデザインが機能する（スマホサイズに縮めてみる）
- ✅ 各記事のリンクが機能する

## ステップ5: 自動更新の確認

### 5-1. GitHub Actionsを有効化

1. GitHubリポジトリページを開く: https://github.com/SatoruSekido/tech-news-hub
2. 「Actions」タブをクリック
3. 「I understand my workflows, go ahead and enable them」をクリック

### 5-2. 手動実行でテスト

1. 「Update News Feeds」ワークフローをクリック
2. 「Run workflow」→「Run workflow」をクリック
3. 1〜2分待つ
4. 緑のチェックマークが表示されれば成功

### 5-3. Vercelで自動再デプロイを確認

1. https://vercel.com/dashboard を開く
2. `tech-news-hub` プロジェクトをクリック
3. 「Deployments」タブで新しいデプロイが始まっているか確認

**以降、6時間ごとに自動でニュースが更新されます。**

## 完了！

サイトが正常に動作していることを確認したら、次のステップへ：

1. **1〜2週間運用:** コンテンツを蓄積
2. **Google AdSense申請:** `ADSENSE_GUIDE.md` を参照
3. **収益化開始:** 広告を設置

## トラブルシューティング

### GitHubへのプッシュが失敗する

\`\`\`bash
# 認証方法を確認
git config --global credential.helper osxkeychain

# または、SSH接続に切り替え
# https://docs.github.com/ja/authentication/connecting-to-github-with-ssh
\`\`\`

### Vercelデプロイが失敗する

1. Vercelのエラーログを確認
2. `package.json` の依存関係を確認
3. ローカルで `npm run build` を実行してエラーを確認

\`\`\`bash
npm run build
\`\`\`

### ニュースが表示されない

1. `data/news.json` が存在するか確認
2. `npm run update-feeds` を再実行
3. GitHubにプッシュされているか確認

### GitHub Actionsが動かない

1. リポジトリがPublicであることを確認
2. Actionsタブで有効化されているか確認
3. ワークフローファイルのパスを確認: `.github/workflows/update-feeds.yml`

---

**サポートが必要な場合:**
- README.md を参照
- GitHubのIssuesで質問
