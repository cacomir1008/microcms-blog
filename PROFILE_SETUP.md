# プロフィール設定ガイド

## 📝 プロフィール情報の編集方法

プロフィール情報は `libs/profileConfig.ts` ファイルで管理されています。

### 設定可能な項目

```typescript
export const profileConfig: ProfileInfo = {
  name: "Scopeway編集部",           // 名前
  bio: "働く視野が広がる...",       // 自己紹介文
  avatar: "/profile-avatar.jpg",    // プロフィール画像（オプション）
  links: {
    twitter: "https://twitter.com/scopeway",     // X (Twitter)
    instagram: "https://instagram.com/scopeway", // Instagram
    linkedin: "https://linkedin.com/in/scopeway", // LinkedIn
    github: "https://github.com/scopeway",       // GitHub
    website: "https://scopeway.com",             // ウェブサイト
  }
};
```

### プロフィール画像の設定

1. **画像ファイルを配置**
   - `public/` フォルダに画像ファイルを配置
   - 例: `public/profile-avatar.jpg`

2. **設定ファイルでパスを指定**
   ```typescript
   avatar: "/profile-avatar.jpg"
   ```

3. **画像がない場合**
   - `avatar` を削除または `undefined` に設定
   - 自動的に名前の頭文字が表示されます

### SNSリンクの設定

- 使用したいSNSのコメントアウトを外す
- 使用しないSNSはコメントアウトしたままにする
- リンクは `target="_blank"` で新しいタブで開きます

### 変更の反映

設定を変更すると、以下のページで自動的に反映されます：
- トップページ
- 記事詳細ページ
- カテゴリページ

## 🎨 カスタマイズ例

### 個人ブログの場合
```typescript
export const profileConfig: ProfileInfo = {
  name: "田中太郎",
  bio: "フロントエンドエンジニアとして働いています。React、TypeScript、Next.jsが好きです。",
  avatar: "/my-photo.jpg",
  links: {
    twitter: "https://twitter.com/tanaka_taro",
    github: "https://github.com/tanaka-taro",
    website: "https://tanaka-taro.dev",
  }
};
```

### 企業ブログの場合
```typescript
export const profileConfig: ProfileInfo = {
  name: "株式会社テック",
  bio: "最新のテクノロジー情報をお届けする企業ブログです。",
  avatar: "/company-logo.jpg",
  links: {
    twitter: "https://twitter.com/tech_company",
    linkedin: "https://linkedin.com/company/tech-company",
    website: "https://tech-company.com",
  }
};
``` 