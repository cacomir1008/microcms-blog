import React from 'react';
import Link from 'next/link';
import { categoryConfig } from '../../libs/categoryConfig';

export default function Categories() {
  return (
    <section className="categories">
      <h2 className="section-title">カテゴリ</h2>
      <div className="category-grid">
        {categoryConfig.map((category) => (
          <Link 
            key={category.id} 
            href={`/categories/${category.id}`}
            className="category-card"
            style={{ 
              '--category-color': category.color 
            } as React.CSSProperties}
          >
            <div className="category-icon">{category.icon}</div>
            <div className="category-content">
              <h3 className="category-name">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 