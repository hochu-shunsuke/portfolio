import { Github, Mail, Globe, Instagram } from "lucide-react"

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hochu-shunsuke",
    icon: Github,
    iconSize: { mobile: "h-3 w-3", desktop: "h-4 w-4" }
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/macho_hochu",
    icon: Instagram,
    iconSize: { mobile: "h-4 w-4", desktop: "h-5 w-5" }
  },
  {
    name: "Email",
    href: "mailto:hochu.shunsuke.dev@gmail.com",
    icon: Mail,
    iconSize: { mobile: "h-4 w-4", desktop: "h-5 w-5" }
  },
  {
    name: "Website",
    href: "https://hochu-portfolio.vercel.app",
    icon: Globe,
    iconSize: { mobile: "h-4 w-4", desktop: "h-5 w-5" }
  }
]

// category: プロジェクトの軸。'engineering' = AIエンジニア軸 / 'marketing' = マーケ・分析軸
export const projectsData = [
  {
    title: "求人サービス開発",
    description: "HR企業の開発インターンにて、他部門と連携しメインエンジニアとして技術選定、設計、実装を担当。",
    tags: ["better-auth", "Next.js", "supabase", "Vercel"],
    imageUrl: "/images/orcareer.png",
    category: "engineering",
    link: ""
  },
  {
    // TODO: 公開URL・正式名称・スクショ画像を差し替え
    title: "トレンド情報サイト（個人開発）",
    description: "トレンド情報をまとめた個人開発サイトにアナリティクスを導入。流入経路とユーザー行動を分析し、コンテンツ改善に活かしている。",
    tags: ["Next.js", "Google Analytics", "SEO"],
    imageUrl: "/images/in-progress.png",
    category: "marketing",
    link: ""
  },
  {
    // TODO: 公開URL・正式名称・スクショ画像を差し替え
    title: "シミュレーションサイト × GA分析",
    description: "シミュレーションサイトを個人で運用し、GA4で購入経路（コンバージョンパス）を分析。データドリブンに導線を改善。",
    tags: ["GA4", "Conversion Path", "個人開発"],
    imageUrl: "/images/in-progress.png",
    category: "marketing",
    link: ""
  },
  {
    title: "ハッカソンイベントの企画運営",
    description: "2025年インターン先で複数のハッカソンイベントを企画・運営。",
    tags: ["企画・運営", "AI活用"],
    imageUrl: "/images/AI-hackathon.png",
    category: "engineering",
    link: ""
  },
  {
    title: "SalesforceデータからPDF自動生成",
    description: "Salesforceデータから請求書を自動作成しGoogleDriveに保存するシステム。",
    tags: ["GoogleAppsScript", "GoogleDrive", "Salesforce"],
    imageUrl: "/images/salesforce2pdf.png",
    category: "engineering",
    link: ""
  },
  {
    title: "HPの製作代行",
    description: "テック企業のHP製作代行。",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/HP-seisaku.png",
    category: "engineering",
    link: ""
  },
  {
    title: "Portfolio",
    description: "コンポーネント化とデザインにこだわり、常にアプデ中。",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    imageUrl: "/images/portfolio.png",
    category: "engineering",
    link: ""
  },
  {
    title: "HackU 2024",
    description: "初のハッカソンでバックエンドを担当。メンバーと1ヶ月間協力しアンケートサイトを開発。",
    tags: ["Django", "sqlite"],
    imageUrl: "/images/hacku.png",
    category: "engineering",
    link: ""
  },
  {
    title: "天気情報アプリ",
    description: "リアルタイム天気情報を提供するアプリ。",
    tags: ["Next.js", "OpenWeather API", "supabase", "Github Actions"],
    imageUrl: "/images/hochu-weather.png",
    category: "engineering",
    link: ""
  },
  {
    title: "SNS開発",
    description: "掲示板型の多機能SNSアプリ。",
    tags: ["Django", "Django Channels", "sqlite"],
    imageUrl: "/images/hochuitter.jpg",
    category: "engineering",
    link: ""
  },
  {
    title: "課題リマインダー",
    description: "webclassとGoogleClassroomから自動で課題を取得しGoogle Taskに保存するシステム。",
    tags: ["GoogleAppsScript", "GoogleTask", "SAML"],
    imageUrl: "/images/kadai-reminder.png",
    category: "engineering",
    link: ""
  }
]

// 軸の色・ラベル定義。Experience・Projects で共有
// engineering = AIエンジニア軸 / marketing = マーケ・分析軸 / global = 海外・原体験軸
export type CategoryKey = 'engineering' | 'marketing' | 'global'

export const categoryMeta: Record<CategoryKey, {
  label: string
  dot: string
  badge: string
}> = {
  engineering: {
    label: 'Engineering',
    dot: 'bg-sky-400',
    badge: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  },
  marketing: {
    label: 'Marketing',
    dot: 'bg-emerald-400',
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  },
  global: {
    label: 'Global',
    dot: 'bg-amber-400',
    badge: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  },
}

export const techStackItems = [
  { name: "Next.js", logo: "/icons/nextjs.svg" },
  { name: "better-auth", logo: "/icons/better-auth.svg" },
  { name: "supabase", logo: "/icons/supabase.svg" },
  { name: "TypeScript", logo: "/icons/typescript.svg" },
  { name: "Auth0", logo: "/icons/auth0.svg" },
  { name: "Python", logo: "/icons/python.svg" },
  { name: "Django", logo: "/icons/django.svg" },
  { name: "Go", logo: "/icons/go.svg" },
  { name: "Dify", logo: "/icons/dify.svg" },
  { name: "GAS", logo: "/icons/GAS.svg" },
]

// category: 経歴の軸。'engineering' = AIエンジニア軸 / 'marketing' = マーケ・分析軸
export const experiencesData = [
  {
    date: '2025.06 - 2025.12',
    title: '求人サービスの開発プロジェクト',
    description: '求人サービスのメインエンジニアとして、技術選定、設計、実装を担当。',
    type: 'Engineer',
    category: 'engineering',
  },
  {
    date: '2025.04',
    title: 'HR企業にてインターン開始',
    description: '自社サイトの作成や、理系学生向けのイベント設計と運営。',
    type: 'Internship',
    category: 'engineering',
  },
  {
    // TODO: 正確な日付を設定（大学2年次・並び順に影響します）
    date: '2025.XX',
    title: 'インド一人旅',
    description: '大学2年次に1週間インドを一人旅。計画通りに進まないトラブルの連続を、即興判断と現地の人々への飛び込みで打開。幼少期に2年間インドで過ごし、インフラ未整備が生活に直結する課題を肌で感じた原体験が、海外・新興国に関わりたいという志の出所になっている。',
    type: 'Solo Trip',
    category: 'global',
  },
  {
    // TODO: 正確な日付を設定（並び順に影響します）
    date: '2025.XX',
    title: 'ビジネスコンテスト出場',
    description: 'ビジネスコンテストに出場し、事業アイデアの立案から市場分析、ピッチまでを経験。',
    type: 'Business',
    category: 'marketing',
  },
  {
    date: '2025.01',
    title: 'AIベンチャーにてインターン開始',
    description: 'エンジニアとしての初のインターン。CTOとして立ち上げ期における技術選定に関与し、製品開発に取り組む。',
    type: 'Internship',
    category: 'engineering',
  },
  {
    // TODO: 正確な日付を設定（並び順に影響します）
    date: '2024.XX',
    title: 'GA分析・トレンドサイト運用',
    description: '個人開発のトレンドサイトやシミュレーションサイトにGA4を導入し、流入経路や購入経路（コンバージョンパス）を分析。趣味として継続中。',
    type: 'Marketing',
    category: 'marketing',
  },
  {
    date: '2024.12',
    title: 'SNS開発',
    description: '初の個人開発でDjangoを使用しローカル動作するSNSを開発。',
    type: 'Solo Dev',
    category: 'engineering',
  },
  {
    date: '2024.11',
    title: 'HackU 2024',
    description: '初のハッカソンでバックエンドを担当。チームメイトと30日間協力し掲示板サイトを作成。',
    type: 'Hackathon',
    category: 'engineering',
  },
]
