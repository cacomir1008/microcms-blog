export interface ProfileInfo {
  name: string;
  bio: string;
  avatar?: string;
  links: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export const profileConfig: ProfileInfo = {
  name: "Kaori Ishimaru",
  bio: "働く視野が広がる、テックと知恵のワークスタイルメディア。最新のテクノロジー動向から、働き方の知恵まで、あなたのキャリアに役立つ情報をお届けします。起業→M&A→Reelu | ex Marriott International インバウンド×ホスピタリティ×テクノロジーでスタートアップの事業成長に携わってます。AYA世代/日経XWomanアンバサダー",
  avatar: "/profile-avatar.jpg", // プロフィール画像のパス（オプション）
  links: {
    twitter: "https://x.com/caori_sh",
    instagram: "https://www.instagram.com/caorish_jp/",
    // linkedin: "https://linkedin.com/in/scopeway",
    // github: "https://github.com/scopeway",
    // website: "https://scopeway.com",
  }
}; 