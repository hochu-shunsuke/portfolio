import { Github, Mail, Instagram, Globe } from "lucide-react"

// ── プロフィール（Hero / About で使用）────────────────────────────
export const profile = {
  name: "寳中俊介",
  nameEn: "Hochu Shunsuke",
  role: "プロダクト志向のエンジニア",
  location: "Nagoya, Japan",
  avatar: "https://github.com/hochu-shunsuke.png",
  // Hero のリード文
  lead: "つくることが好きで、つくったものが誰かに届く瞬間のために手を動かしています。AIを道具に、0→1でプロダクトを形にします。",
}

// About セクションの本文（段落ごと）
export const aboutParagraphs = [
  "情報工学を学びながら、HR系スタートアップでメインエンジニアとして新卒就活サービスの立ち上げに携わっています。集客の課題からWebサービスへの転換を提案し、技術選定から実装まで一貫して担当。AIを活用しつつ、システム全体のロジックを把握して組み上げました。",
  "「想像したものを形にして、人に届ける」——絵を描いて人に楽しんでもらうのが好きだった子どもの頃から、つくって届ける感覚は変わりません。今はそのキャンバスがプロダクト開発になりました。",
  "個人では、情報の“届き方”そのものに関心があります。誰もがアクセスできる形に情報を組み直すことをテーマに、データの見せ方を問い直すプロダクトをつくっています。",
]

// ── ソーシャルリンク ────────────────────────────────────────────
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/hochu-shunsuke", icon: Github },
  { name: "Email", href: "mailto:hochu.shunsuke.dev@gmail.com", icon: Mail },
  { name: "Earth Trend", href: "https://earth-trend.com", icon: Globe },
  { name: "Instagram", href: "https://www.instagram.com/macho_hochu", icon: Instagram },
]

// ── プロジェクト ────────────────────────────────────────────────
// featured: true は Featured セクションで大きく表示。category はデータ保持用。
export const projectsData = [
  {
    title: "Earth Trend",
    subtitle: "世界のトレンドを、ひとつの生きた地図に",
    description:
      "世界がいま何を検索しているかをリアルタイムに可視化する個人開発の主軸プロジェクト。Googleトレンドとサジェストのデータを、無機質な表ではなく「世界の好奇心を覗く生きた地図」として表現（円の大きさ＝検索ボリューム、色＝新しさ、10分ごとに国別更新）。過剰にパーソナライズされたSNSや無味乾燥なデータ提示へのアンチテーゼとして、情報を多角的に見せ直す試み。日英西の多言語対応、GA4で分析し、地域ごとにX(Twitter)で広告動画を出稿して検証した。",
    tags: ["Next.js", "Google Trends", "GA4", "可視化", "多言語(日英西)", "X広告"],
    imageUrl: "/images/in-progress.png", // TODO: earth-trend.com のスクショに差し替え
    category: "marketing",
    featured: true,
    link: "https://earth-trend.com",
  },
  {
    title: "求人サービス開発",
    description:
      "HR系スタートアップでメインエンジニアとして、技術選定・設計・実装を担当。認証基盤・DB操作・Middleware制御など複数ライブラリを統合し、0→1で新規サービスを構築。",
    tags: ["Next.js", "better-auth", "Supabase", "Vercel"],
    imageUrl: "/images/orcareer.png",
    category: "engineering",
    link: "",
  },
  {
    title: "シミュレーションサイト × GA分析",
    description:
      "個人運用のシミュレーションサイトにGA4を導入し、購入経路（コンバージョンパス）を分析。データドリブンに導線を改善。",
    tags: ["GA4", "Conversion Path", "個人開発"],
    imageUrl: "/images/in-progress.png",
    category: "marketing",
    link: "",
  },
  {
    title: "ハッカソンイベントの企画・運営",
    description: "インターン先で複数のハッカソンイベントを企画・運営。AI活用をテーマに設計。",
    tags: ["企画・運営", "AI活用"],
    imageUrl: "/images/AI-hackathon.png",
    category: "engineering",
    link: "",
  },
  {
    title: "SalesforceデータからPDF自動生成",
    description: "Salesforceのデータから請求書を自動生成し、Google Driveに保存するシステム。",
    tags: ["Google Apps Script", "Google Drive", "Salesforce"],
    imageUrl: "/images/salesforce2pdf.png",
    category: "engineering",
    link: "",
  },
  {
    title: "課題リマインダー",
    description:
      "WebClassとGoogle Classroomから自動で課題を取得し、Google Taskに集約するシステム。身の回りの不便を技術で解消。",
    tags: ["Google Apps Script", "Google Task", "SAML"],
    imageUrl: "/images/kadai-reminder.png",
    category: "engineering",
    link: "",
  },
  {
    title: "天気情報アプリ",
    description: "リアルタイムの天気情報を提供するアプリ。",
    tags: ["Next.js", "OpenWeather API", "Supabase", "GitHub Actions"],
    imageUrl: "/images/hochu-weather.png",
    category: "engineering",
    link: "",
  },
  {
    title: "SNS開発",
    description: "初の個人開発で構築した、掲示板型の多機能SNSアプリ。",
    tags: ["Django", "Django Channels", "SQLite"],
    imageUrl: "/images/hochuitter.jpg",
    category: "engineering",
    link: "",
  },
  {
    title: "HackU 2024",
    description: "初のハッカソンでバックエンドを担当。チームで30日間協力しアンケートサイトを開発。",
    tags: ["Django", "SQLite"],
    imageUrl: "/images/hacku.png",
    category: "engineering",
    link: "",
  },
  {
    title: "HP制作代行",
    description: "テック企業のホームページ制作を代行。",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/HP-seisaku.png",
    category: "engineering",
    link: "",
  },
]

// ── 経歴（時系列）──────────────────────────────────────────────
export const experiencesData = [
  {
    date: "2025.06 – 2025.12",
    title: "求人サービスの開発プロジェクト",
    description: "メインエンジニアとして技術選定・設計・実装を担当。",
    type: "Engineer",
  },
  {
    date: "2025.04",
    title: "HR系スタートアップでインターン開始",
    description: "自社サイトの制作や、理系学生向けイベントの設計・運営。",
    type: "Internship",
  },
  {
    date: "2025",
    title: "ビジネスコンテスト出場", // TODO: 正確な月を設定
    description: "事業アイデアの立案から市場分析、ピッチまでを経験。",
    type: "Business",
  },
  {
    date: "2025.01",
    title: "AIベンチャーでインターン開始",
    description: "初のエンジニアインターン。立ち上げ期の技術選定に関与し製品開発に取り組む。",
    type: "Internship",
  },
  {
    date: "2024",
    title: "Earth Trend / GA分析", // TODO: 正確な月を設定
    description: "個人開発でGoogleトレンドの可視化サイトを公開。GA4で分析し多言語・地域別に検証。",
    type: "Solo Dev",
  },
  {
    date: "2024.12",
    title: "SNS開発",
    description: "初の個人開発でDjangoを用いてSNSを構築。",
    type: "Solo Dev",
  },
  {
    date: "2024.11",
    title: "HackU 2024",
    description: "初のハッカソンでバックエンドを担当し、30日間でWebサービスを開発。",
    type: "Hackathon",
  },
]

// ── スキル ──────────────────────────────────────────────────────
export const skillGroups = [
  {
    title: "主力",
    items: ["Next.js", "TypeScript", "Python"],
  },
  {
    title: "言語・フレームワーク",
    items: ["React", "JavaScript", "Ruby on Rails", "Django", "Go", "Java / Spring", "C / C++"],
  },
  {
    title: "インフラ・データ",
    items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "SQL", "Supabase"],
  },
  {
    title: "分析・ツール",
    items: ["Google Analytics (GA4)", "Search Console", "Sentry", "Vercel", "Google Apps Script"],
  },
]
