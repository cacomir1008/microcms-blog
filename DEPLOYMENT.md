# Cloudflare Pages デプロイガイド

このブログサイトをCloudflare Pagesにデプロイする手順を説明します。

## 前提条件

1. **GitHubアカウント** - ソースコードをホストするため
2. **Cloudflareアカウント** - 無料で作成可能
3. **microCMSアカウント** - コンテンツ管理用

## デプロイ手順

### 1. GitHubリポジトリの準備

```bash
# 現在のディレクトリでGitリポジトリを初期化（既に初期化済みの場合はスキップ）
git init

# ファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: microCMS blog with Next.js"

# GitHubでリポジトリを作成後、リモートリポジトリを追加
git remote add origin https://github.com/yourusername/microcms-blog.git

# プッシュ
git push -u origin main
```

### 2. Cloudflare Pagesでの設定

1. **Cloudflare Dashboardにアクセス**
   - https://dash.cloudflare.com にアクセス
   - アカウントを作成またはログイン

2. **Pagesプロジェクトを作成**
   - 「Pages」→「Create a project」
   - 「Connect to Git」を選択

3. **GitHubリポジトリを接続**
   - GitHubアカウントを認証
   - `microcms-blog` リポジトリを選択

4. **ビルド設定**
   - **Project name**: `microcms-blog` (または任意の名前)
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `my-blog` (プロジェクトのルートディレクトリ)

5. **環境変数の設定**
   - 「Environment variables」セクションで以下を追加：
     - `MICROCMS_API_KEY`: microCMSのAPIキー
     - `MICROCMS_SERVICE_DOMAIN`: microCMSのサービスドメイン

6. **デプロイ**
   - 「Save and Deploy」をクリック
   - ビルドが完了するまで待機（通常5-10分）

### 3. カスタムドメインの設定（オプション）

1. **ドメインの追加**
   - プロジェクトページで「Custom domains」
   - ドメインを追加してDNS設定を確認

2. **SSL証明書**
   - Cloudflareが自動的にSSL証明書を発行

## 設定ファイルの説明

### wrangler.toml
Cloudflare Pages用の設定ファイル

### next.config.ts
- `output: 'export'`: 静的サイト生成
- `unoptimized: true`: 画像最適化を無効化（Cloudflare Pages用）
- `trailingSlash: true`: URL末尾にスラッシュを追加

## トラブルシューティング

### ビルドエラー
- Node.jsのバージョンを確認（18以上推奨）
- 依存関係のインストールを確認
- 環境変数が正しく設定されているか確認

### 画像が表示されない
- microCMSの画像ドメインが正しく設定されているか確認
- `next.config.ts`の`domains`設定を確認

### 404エラー
- `trailingSlash: true`の設定を確認
- Cloudflare Pagesのリダイレクト設定を確認

## 更新手順

コードを更新した場合：

```bash
# 変更をコミット
git add .
git commit -m "Update: 変更内容の説明"
git push origin main
```

Cloudflare Pagesが自動的に再デプロイを実行します。

## 参考リンク

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [microCMS Documentation](https://document.microcms.io/) 