export interface Work {
  slug: string
  name: string
  category: string
  year: string
  description: string
  image: string
  /** layout hint for the magazine-style grid in Works.tsx */
  span: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'
}

// Swap `image` with your own file in /public/profile/ to update a photo.
export const works: Work[] = [
  {
    slug: 'hakata-bijo',
    name: 'はかたびじょ',
    category: 'SNS / Regular Member',
    year: 'Ongoing',
    description:
      '福岡・博多の魅力を発信する人気SNSアカウント・情報メディア「はかたびじょ」のレギュラーメンバーとして活動中。',
    image: '/profile/photo-06.jpg',
    span: 'g',
  },
  {
    slug: 'tv-appearances',
    name: 'テレビ出演',
    category: 'TV / 企業告知',
    year: '2024–2025',
    description: '福岡の「アサデス。」や「ももち浜ストア」など、各TV局に企業告知で出演。',
    image: '/profile/photo-01.jpg',
    span: 'a',
  },
  {
    slug: 'ai-mirai-yohou',
    name: 'ai未来予報',
    category: 'Radio',
    year: '2026',
    description: 'ホリエモンAI学校 マナビバ校 広報担当として、CROSS FM「ai未来予報」に不定期で週1回ほど出演。',
    image: '/profile/photo-05.jpg',
    span: 'b',
  },
  {
    slug: 'ouoza-tenjin-guide',
    name: '雄鷹座の天神イベントガイド',
    category: 'Radio / Regular',
    year: '2025–2026',
    description: 'コミュニティFM天神にてレギュラー出演中。',
    image: '/profile/photo-07.jpg',
    span: 'c',
  },
  {
    slug: 'nanafuku-unaru',
    name: '奈々福唸る。夏',
    category: 'MC',
    year: '2026',
    description: '浪曲独演会 in 福岡の司会進行を担当。',
    image: '/profile/photo-03.jpg',
    span: 'd',
  },
  {
    slug: 'board-girl-contest',
    name: 'board girl contest in 表参道',
    category: 'Award',
    year: '2022',
    description: 'グランプリを受賞し、表参道駅に巨大広告掲載。',
    image: '/profile/photo-02.jpg',
    span: 'e',
  },
  {
    slug: 'magic-show',
    name: 'マジックショー',
    category: 'Magic Show',
    year: '2026',
    description: 'マジックショーアシスタントとして、九州各地のイベントに出演。イオンのイベントなど。',
    image: '/profile/photo-06.jpg',
    span: 'f',
  },
]
