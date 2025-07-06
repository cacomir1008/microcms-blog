/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
    unoptimized: true, // Cloudflare Pages用に画像最適化を無効化
  },
  output: 'export', // 静的サイト生成
  trailingSlash: true, // Cloudflare Pages用に末尾スラッシュを追加
  assetPrefix: '/', // アセットのプレフィックスを設定
};

module.exports = nextConfig;