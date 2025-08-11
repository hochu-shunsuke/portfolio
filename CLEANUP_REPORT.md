# プロジェクト整理リポート

## 使用されているUIコンポーネント

### 実際に使用中
- **button.tsx** (hero-section, profile-card, project-card, contact-section で使用)
- **card.tsx** (project-card で使用)
- **scroll-button.tsx** (scrollable-section, tech-stack で使用)
- **scroll-indicator.tsx** (scrollable-section で使用)
- **scrollable-section.tsx** (projects-section, interests-section で使用)

### 間接的に使用
- **label.tsx** (form.tsx で使用)
- **input.tsx** (sidebar.tsx で使用)
- **separator.tsx** (sidebar.tsx で使用)
- **sheet.tsx** (sidebar.tsx で使用)
- **skeleton.tsx** (sidebar.tsx で使用)
- **dialog.tsx** (command.tsx で使用)
- **toggle.tsx** (toggle-group.tsx で使用)

## 不要なファイル（削除候補）

### UIコンポーネント（使用されていない）
- accordion.tsx
- alert.tsx
- alert-dialog.tsx
- aspect-ratio.tsx
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- calendar.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- custom-scroll-area.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- sidebar.tsx
- slider.tsx
- sonner.tsx
- switch.tsx
- table.tsx
- tabs.tsx
- textarea.tsx
- toast.tsx
- toaster.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx
- use-mobile.tsx
- use-toast.ts

### フック（使用されていない）
- hooks/use-mouse-drag.ts (削除済み)
- hooks/use-toast.ts
- hooks/use-mobile.tsx

### 重複ファイル
- components/ui/use-mobile.tsx (hooks/use-mobile.tsx と重複)
- components/ui/use-toast.ts (hooks/use-toast.ts と重複)

### プレースホルダー画像
- public/placeholder.svg
- public/placeholder.jpg
- public/placeholder-user.jpg
- public/placeholder-logo.png
- public/placeholder-logo.svg

## コード改善提案

### 1. 重複ファイルの整理
### 2. 不要なUIコンポーネントの削除
### 3. プレースホルダー画像の削除
### 4. package.json の不要な依存関係確認
