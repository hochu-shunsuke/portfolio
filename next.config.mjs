/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // クライアントサイドの機能を制限
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    // 開発環境でもプロダクションビルドと同様の最適化を行う
    removeConsole: true,
  },
}

export default nextConfig
