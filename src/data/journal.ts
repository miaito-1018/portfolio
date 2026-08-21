export interface JournalEntry {
  date: string
  title: string
  excerpt: string
}

export const journalEntries: JournalEntry[] = [
  {
    date: '2026.06.20',
    title: '「奈々福唸る。」を終えて',
    excerpt:
      '浪曲独演会 in 福岡の司会進行という、初めての大役をいただいた。声だけで空気をつくる浪曲師の方の隣で、自分の声の使い方をあらためて考えさせられた夜でした。',
  },
  {
    date: '2026.04.02',
    title: 'ラジオという新しい声',
    excerpt:
      'CROSS FM「ホリエモンAI学校 ai未来予報」がスタート。画面に映らない分、言葉ひとつひとつの精度が試される。台本のない話をどれだけ楽しめるか、これからの挑戦です。',
  },
  {
    date: '2026.01.15',
    title: '壇上に立つということ',
    excerpt:
      '幼少期のアクロバットが、まさかマジックショーのアシスタントで役に立つとは。人前に立つ仕事はどれも似ているようで、実は一つひとつ違う筋肉を使っている気がします。',
  },
]
