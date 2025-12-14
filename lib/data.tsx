import { Github, Linkedin, Mail, Globe, Instagram } from "lucide-react"

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

export const projectsData = [
  {
    title: "求人サービス開発",
    description: "HR企業の開発インターンにて、他部門と連携しメインエンジニアとして技術選定、設計、実装を担当。",
    tags: ["better-auth", "Next.js", "supabase", "Vercel"],
    imageUrl: "/images/orcareer.png",
    link: ""
  },
  {
    title: "ハッカソンイベントの企画運営",
    description: "2025年インターン先で複数のハッカソンイベントを企画・運営。",
    tags: ["企画・運営", "AI活用"],
    imageUrl: "/images/AI-hackathon.png",
    link: ""
  },
  {
    title: "SalesforceデータからPDF自動生成",
    description: "Salesforceデータから請求書を自動作成しGoogleDriveに保存するシステム。",
    tags: ["GoogleAppsScript", "GoogleDrive", "Salesforce"],
    imageUrl: "/images/salesforce2pdf.png",
    link: ""
  },
  {
    title: "HPの製作代行",
    description: "テック企業のHP製作代行。",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/HP-seisaku.png",
    link: ""
  },
  {
    title: "Portfolio",
    description: "コンポーネント化とデザインに徹底的にこだわり、常にアプデ中。",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    imageUrl: "/images/portfolio.png",
    link: ""
  },
  {
    title: "HackU 2024",
    description: "2024年人生初のハッカソンでバックエンドを担当。チームメイトと30日間協力し掲示板サイトを作成。",
    tags: ["Django", "sqlite"],
    imageUrl: "/images/hacku.png",
    link: ""
  },
  {
    title: "天気情報アプリ",
    description: "リアルタイム天気情報を提供するアプリ。モダンな技術スタックを用いての最初の個人開発。",
    tags: ["Next.js", "OpenWeather API", "supabase", "Github Actions"],
    imageUrl: "/images/hochu-weather.png",
    link: ""
  },
  {
    title: "SNS開発",
    description: "掲示板型の多機能SNSアプリ。初めての個人開発経験。",
    tags: ["Django", "Django Channels", "sqlite"],
    imageUrl: "/images/hochuitter.jpg",
    link: ""
  },
  {
    title: "課題リマインダー",
    description: "webclassとGoogleClassroomから自動で課題を取得しGoogle Taskに保存するシステム。",
    tags: ["GoogleAppsScript", "GoogleTask", "SAML"],
    imageUrl: "/images/kadai-reminder.png",
    link: ""
  },
  {
    title: "ネットワーク構築",
    description: "CiscoPacketTracerを用いたネットワーク構築の遊び。ネスペの取得を目指している。",
    tags: ["CiscoPacketTracer", "Cisco"],
    imageUrl: "/images/network-studying.jpg",
    link: ""
  }
]

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

export const musicPlaylists = [
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6BLQf0A5yzSJVAI5Wo1ECC?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/4jjhdyoD1NymbcLZBMCVkE?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/34efqGQiIojggHIdWV13vv?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/0l073uFC6oBOIFoSI60gPK?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6qeI7Fjsyrhet1ba8x3B0F?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/1eNiVtQ6RWz2XqDDOYmTyW?utm_source=generator&theme=0"
  }
]

export const experiencesData = [
  {
    date: '2025.06 - 2025.12',
    title: '求人サービスの開発プロジェクト',
    description: '求人サービスのメインエンジニアとして、技術選定、設計、実装を担当。',
    type: 'Engineer',
  },
  {
    date: '2025.04',
    title: 'HR企業にてインターン開始',
    description: '自社サイトの作成や、理系学生向けのイベント設計と運営。',
    type: 'Internship',
  },
  {
    date: '2025.01',
    title: 'AIベンチャーにてインターン開始',
    description: 'エンジニアとしての初のインターン。CTOとして立ち上げ期における技術選定に関与し、製品開発に取り組む。',
    type: 'Internship',
  },
  {
    date: '2024.12',
    title: 'SNS開発',
    description: '初の個人開発でDjangoを使用しローカル動作するSNSを開発。',
    type: 'Solo Dev',
  },
  {
    date: '2024.11',
    title: 'HackU 2024',
    description: '初のハッカソンでバックエンドを担当。チームメイトと30日間協力し掲示板サイトを作成。',
    type: 'Hackathon',
  },
]
