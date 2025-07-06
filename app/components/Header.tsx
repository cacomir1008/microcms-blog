import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="site-title">
          <h1>Scopeway</h1>
          <p>働く視野が広がる、テックと知恵のワークスタイルメディア</p>
        </Link>
      </div>
    </header>
  );
} 