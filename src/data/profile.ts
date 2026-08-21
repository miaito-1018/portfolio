export const facts: [string, string][] = [
  ['Birthday', '2001.10.18'],
  ['Based in', '福岡 / Fukuoka'],
  ['Born', '大分 / Oita'],
  ['Height', '152cm'],
  ['Size (B/W/H)', '88 / 55 / 86'],
  ['Blood type', 'A型'],
]

export interface NowItem {
  label: string
  value: string
}

export const nowItems: NowItem[] = [
  {
    label: 'On air',
    value: 'コミュニティFM天神「雄鷹座の天神イベントガイド」レギュラー出演中',
  },
  {
    label: 'On air',
    value: 'ホリエモンAI学校(株)広報担当として、CROSS FM「ai未来予報」に不定期で週1回ほど出演',
  },
  {
    label: 'Special skill',
    value: '幼少期の器械体操で培ったアクロバット',
  },
]

export const socials: { label: string; href: string }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/mi_to_20/' },
  { label: 'X (Twitter)', href: 'https://x.com/1992K_' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@asease1018' },
]
