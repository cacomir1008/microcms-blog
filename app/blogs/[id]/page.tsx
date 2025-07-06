import { getBlogDetail } from '../../../libs/microcmsClient';
import { getBlogs } from '../../../libs/microcmsClient';
import { getCategoryInfo } from '../../../libs/categoryConfig';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Profile from '../../components/Profile';
import Header from '../../components/Header';
import Categories from '../../components/Categories';

// 静的パラメータを生成
export async function generateStaticParams() {
  const data = await getBlogs();
  return data.contents.map((blog: any) => ({
    id: blog.id,
  }));
}

// 動的メタデータ生成
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata>{
  const { id } = await params;
  const blog = await getBlogDetail(id);
  
  return {
    title: `${blog.title} | Scopeway`,
    description: blog.description || '働く視野が広がる、テックと知恵のワークスタイルメディア',
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.eyecatch?.url ? [blog.eyecatch.url] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: blog.eyecatch?.url ? [blog.eyecatch.url] : [],
    },
  };
}

export default async function BlogDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blog = await getBlogDetail(id);

  return (
    <main className="blog-detail">
      {/* サイトヘッダー */}
      <Header />

      {/* カテゴリ一覧 */}
      <Categories />

      {/* ヘッダーセクション */}
      <header className="blog-header">
        <div className="header-top">
          <Link href="/" className="back-to-top">
            <span className="back-arrow">←</span>
            TOPに戻る
          </Link>
        </div>
        
        <div className="blog-meta">
          <div className="blog-categories">
            {Array.isArray(blog.category)
              ? blog.category.map((cat: string) => {
                  const categoryInfo = getCategoryInfo(cat);
                  return (
                    <span 
                      key={cat} 
                      className="blog-cat"
                      style={{ 
                        backgroundColor: categoryInfo?.color + '20',
                        color: categoryInfo?.color,
                        border: `1px solid ${categoryInfo?.color}40`
                      }}
                    >
                      {categoryInfo?.icon} {categoryInfo?.name || cat}
                    </span>
                  );
                })
              : (() => {
                  const categoryInfo = getCategoryInfo(blog.category);
                  return (
                    <span 
                      className="blog-cat"
                      style={{ 
                        backgroundColor: categoryInfo?.color + '20',
                        color: categoryInfo?.color,
                        border: `1px solid ${categoryInfo?.color}40`
                      }}
                    >
                      {categoryInfo?.icon} {categoryInfo?.name || blog.category}
                    </span>
                  );
                })()
            }
          </div>
          <h1 className="blog-title">{blog.title}</h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <article className="blog-content">
        {/* アイキャッチ画像 */}
        {blog.eyecatch?.url && (
          <div className="eyecatch-container">
            <Image
              src={blog.eyecatch.url}
              alt={blog.title}
              width={400}
              height={225}
              className="eyecatch-image"
              priority
            />
          </div>
        )}

        {/* 記事本文 */}
        <div className="content-body">
          <div 
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
      </article>

      {/* プロフィールセクション */}
      <Profile />

      {/* 関連記事セクション */}
      <section className="related-articles">
        <h2 className="section-title">関連記事</h2>
        <div className="back-to-top-bottom">
          <Link href="/" className="back-to-top-btn">
            ← 記事一覧に戻る
          </Link>
        </div>
      </section>
    </main>
  );
}