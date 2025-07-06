import { getBlogs } from '../../../libs/microcmsClient';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '../../components/Profile';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import { getCategoryInfo } from '../../../libs/categoryConfig';

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const data = await getBlogs();
  const categoryInfo = getCategoryInfo(params.category);
  
  // カテゴリに一致する記事をフィルタリング
  const filteredBlogs = data.contents.filter((blog: any) => {
    if (Array.isArray(blog.category)) {
      return blog.category.includes(params.category);
    }
    return blog.category === params.category;
  });

  if (!categoryInfo) {
    return <div>カテゴリが見つかりません</div>;
  }

  return (
    <main>
      {/* サイトヘッダー */}
      <Header />

      {/* カテゴリ一覧 */}
      <Categories />

      <section className="category-header">
        <div className="category-header-content">
          <div className="category-header-icon">{categoryInfo.icon}</div>
          <div className="category-header-text">
            <h1 className="category-title" style={{ color: categoryInfo.color }}>
              {categoryInfo.name}
            </h1>
            {categoryInfo.description && (
              <p className="category-description-large">{categoryInfo.description}</p>
            )}
          </div>
        </div>
      </section>

      <section className="articles">
        <h2 className="section-title">記事一覧</h2>
        {filteredBlogs.length === 0 ? (
          <p className="no-articles">このカテゴリの記事はまだありません。</p>
        ) : (
          <ul className="card-list">
            {filteredBlogs.map((blog: any) => (
              <li key={blog.id} className="card">
                <Link href={`/blogs/${blog.id}`} className="card-link">
                  {blog.eyecatch?.url && (
                    <Image
                      src={blog.eyecatch.url}
                      alt={blog.title}
                      width={320}
                      height={180}
                      className="card-image"
                      style={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body">
                    <div className="card-category">
                      {Array.isArray(blog.category)
                        ? blog.category.map((cat: string) => {
                            const categoryInfo = getCategoryInfo(cat);
                            return (
                              <span 
                                key={cat} 
                                className="card-cat"
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
                                className="card-cat"
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
                    <h3 className="card-title">{blog.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* プロフィールセクション */}
      <Profile />
    </main>
  );
}