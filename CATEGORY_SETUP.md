# カテゴリ設定ガイド

このファイルでは、ブログサイトのカテゴリ設定について説明します。

## 設定ファイル

カテゴリ設定は `libs/categoryConfig.ts` で管理されています。

## カテゴリ設定項目

各カテゴリには以下の項目を設定できます：

- `id`: カテゴリの識別子（URLで使用）
- `name`: 表示名
- `description`: カテゴリの説明文（オプション）
- `color`: カテゴリの色（HEX形式）
- `icon`: カテゴリのアイコン（絵文字）

## 現在のカテゴリ設定

```typescript
{
  id: "technology",
  name: "Technology",
  description: "最新のテクノロジー情報",
  color: "#3B82F6", // blue
  icon: "💻"
},
{
  id: "business",
  name: "Business",
  description: "ビジネスとキャリア",
  color: "#10B981", // green
  icon: "💼"
},
{
  id: "lifestyle",
  name: "Lifestyle",
  description: "ライフスタイルと働き方",
  color: "#F59E0B", // amber
  icon: "🌟"
},
{
  id: "pre mama",
  name: "Pre Mama",
  description: "妊娠・出産",
  color: "#EC4899", // pink
  icon: "🤱"
}
```

## 機能

### 1. カテゴリ色
- 各カテゴリに独自の色を設定
- カテゴリカード、記事カード、カテゴリページで色が適用される
- 背景色は色の20%透明度、ボーダーは40%透明度で自動調整

### 2. カテゴリ説明
- カテゴリページで説明文を表示
- カテゴリカードでも説明文を表示（オプション）

### 3. カテゴリアイコン
- 各カテゴリに視覚的なアイコンを設定
- 絵文字を使用して簡単にアイコンを追加可能
- カテゴリカード、記事カード、カテゴリページでアイコンが表示される

## 使用方法

### カテゴリ情報の取得

```typescript
import { getCategoryInfo } from '../libs/categoryConfig';

// カテゴリIDから情報を取得
const categoryInfo = getCategoryInfo('technology');
console.log(categoryInfo?.name); // "Technology"
console.log(categoryInfo?.color); // "#3B82F6"
console.log(categoryInfo?.icon); // "💻"
```

### 全カテゴリIDの取得

```typescript
import { getAllCategoryIds } from '../libs/categoryConfig';

const categoryIds = getAllCategoryIds();
// ["technology", "business", "lifestyle", "pre mama"]
```

## カテゴリの追加・変更

新しいカテゴリを追加する場合：

1. `categoryConfig` 配列に新しいオブジェクトを追加
2. 必要な項目（id, name, description, color, icon）を設定
3. 開発サーバーを再起動

## 注意事項

- `id` は一意である必要があります
- `color` はHEX形式（#RRGGBB）で指定してください
- `icon` は絵文字を使用することを推奨します
- `description` はオプションですが、設定することを推奨します

### カテゴリの変更方法

1. **名前の変更**
   ```typescript
   {
     id: "technology", // 変更しない
     name: "Tech News", // 変更する
     description: "最新のテクノロジー情報",
     color: "#3B82F6"
   }
   ```

2. **IDの変更**
   - 設定ファイルのIDを変更
   - microCMSのカテゴリIDも変更
   - 既存記事のカテゴリ設定を更新

### カテゴリの削除方法

1. **設定ファイルから削除**
   - `categoryConfig` 配列から該当項目を削除

2. **microCMSから削除**
   - 管理画面でカテゴリを削除
   - 既存記事のカテゴリ設定を更新

### 注意事項

- **IDの一意性**: カテゴリIDは一意である必要があります
- **microCMSとの同期**: 設定ファイルとmicroCMSのカテゴリを同期させる
- **既存記事**: カテゴリを変更する際は既存記事の設定も更新する

### カスタマイズ例

#### 日本語カテゴリ名
```typescript
{
  id: "technology",
  name: "テクノロジー",
  description: "最新のテクノロジー情報をお届け",
  color: "#3B82F6"
}
```

#### 新しいカテゴリの追加
```typescript
{
  id: "career",
  name: "キャリア",
  description: "キャリアアップと転職情報",
  color: "#EF4444" // red
}
``` 