import { getBlogs } from '../libs/microcmsClient';
import { getCategoryInfo } from '../libs/categoryConfig';
import Image from 'next/image';
import Link from 'next/link';
import Profile from './components/Profile';
import Header from './components/Header';
import Categories from './components/Categories';

export default async function Home() {
  const data = await getBlogs();
  console.log(data);

  return (
    <main>
       {/* サイトヘッダー */}
       <Header />

      {/* カテゴリ一覧 */}
      <Categories />

      <section className="articles">
        <h2 className="section-title">新着記事</h2>
        <ul className="card-list">
          {data.contents.map((blog: any) => (
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
      </section>

      {/* プロフィールセクション */}
      <Profile />

    </main>
  );
}