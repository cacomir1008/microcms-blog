export interface CategoryInfo {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon: string;
}

export const categoryConfig: CategoryInfo[] = [
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
];

// カテゴリIDからカテゴリ情報を取得する関数
export function getCategoryInfo(categoryId: string): CategoryInfo | undefined {
  return categoryConfig.find(cat => cat.id === categoryId);
}

// 全カテゴリのIDリストを取得する関数
export function getAllCategoryIds(): string[] {
  return categoryConfig.map(cat => cat.id);
} 