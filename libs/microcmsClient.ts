import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

// ... 既存のimportとclient定義の下に追記 ...
export const getBlogs = async () => {
    const data = await client.get({ endpoint: 'blogs' });
    return data;
  };

  export const getBlogDetail = async (id: string) => {
    const data = await client.get({ endpoint: 'blogs', contentId: id });
    return data;
  };

  // カテゴリ一覧取得
export const getCategories = async () => {
  const data = await client.get({ endpoint: 'categories' });
  return data;
};