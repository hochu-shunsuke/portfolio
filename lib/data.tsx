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
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hochu-shunsuke",
    icon: Linkedin,
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
    description: "HR企業の開発インターンにて，他部門と連携し技術選定，設計，実装，デプロイまで担当．",
    tags: ["better-auth", "Next.js", "supabase", "Vercel", "jwt"],
    imageUrl: "/images/orcareer.png",
    link: ""
  },
  {
    title: "ハッカソンイベントの企画運営",
    description: "2025年インターン先で複数のハッカソンイベントを企画・運営．",
    tags: ["企画・運営", "AI活用"],
    imageUrl: "/images/AI-hackathon.png",
    link: "https://connpass.com/event/358377/"
  },
  {
    title: "SalesforceデータからPDF自動生成",
    description: "Salesforceデータから請求書を自動作成しGoogleDriveに保存するシステム．",
    tags: ["GoogleAppsScript", "GoogleDrive", "Salesforce"],
    imageUrl: "/images/salesforce2pdf.png",
    link: ""
  },
  {
    title: "HPの製作代行",
    description: "テック企業のHPの製作代行．",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/HP-seisaku.png",
    link: ""
  },
  {
    title: "HackU 2024",
    description: "2024年人生初のハッカソンでバックエンドを担当．チームメイトと30日間協力して完成．",
    tags: ["Django", "sqlite"],
    imageUrl: "/images/hacku.png",
    link: ""
  },
  {
    title: "天気情報アプリ",
    description: "リアルタイム天気情報を提供するアプリ．モダンな開発の練習．",
    tags: ["Next.js", "OpenWeather API", "supabase", "Github Actions"],
    imageUrl: "/images/hochu-weather.png",
    link: ""
  },
  {
    title: "ネットワーク構築",
    description: "CiscoPacketTracerを用いた実践的なネットワーク構築．ネスペの取得を目指す．",
    tags: ["CiscoPacketTracer", "Cisco"],
    imageUrl: "/images/network-studying.jpg",
    link: ""
  },
  {
    title: "SNS開発",
    description: "Twitter x 掲示板の多機能SNSアプリ．豊富なカスタマイズ性．スケーラビリティの強化中．",
    tags: ["Django", "Django Channels", "sqlite"],
    imageUrl: "/images/hochuitter.jpg",
    link: ""
  },
  {
    title: "課題リマインダー",
    description: "webclassとGoogleClassroomから自動で課題を取得しGoogle Taskに保存するシステム．",
    tags: ["GoogleAppsScript", "GoogleTask", "SAML"],
    imageUrl: "/images/kadai-reminder.png",
    link: ""
  },
  {
    title: "Portfolio",
    description: "AIツールを使って短期間で効率的に実装．AI活用を強みとしている．",
    tags: ["Next.js", "TypeScript", "vercel", "AI"],
    imageUrl: "/images/hochu-portfolio.png",
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
