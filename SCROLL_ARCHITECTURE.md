# Portfolio - Scroll Architecture

## 概要
プロジェクトとミュージックセクションのスクロール機能を統合し、再利用可能なコンポーネントとして設計。

## アーキテクチャ

### 1. 統合スクロールフック (`useUnifiedScroll`)
**場所**: `hooks/use-unified-scroll.ts`

**機能**:
- ボタンによるスクロール制御
- マウスドラッグによるスクロール制御（オプション）
- スクロール位置の状態管理
- 矢印ボタンの表示/非表示制御
- 現在のアイテムインデックス計算

**設定オプション**:
```typescript
interface UseUnifiedScrollProps {
  itemCount: number        // アイテム総数
  itemWidth?: number       // 各アイテムの幅 (デフォルト: 320px)
  scrollAmount?: number    // スクロール量 (デフォルト: 300px)
  enableDrag?: boolean     // ドラッグ機能の有効/無効 (デフォルト: false)
  onScroll?: () => void    // スクロール時のコールバック
}
```

### 2. スクロール可能セクション (`ScrollableSection`)
**場所**: `components/ui/scrollable-section.tsx`

**機能**:
- 左右のスクロールボタン
- スクロールコンテナ
- スクロールインジケーター
- ドラッグ機能（設定により有効/無効）

**props**:
```typescript
interface ScrollableSectionProps {
  itemCount: number        // アイテム総数
  itemWidth?: number       // 各アイテムの幅
  scrollAmount?: number    // スクロール量
  enableDrag?: boolean     // ドラッグ機能
  showIndicator?: boolean  // インジケーター表示
  children: ReactNode      // 子要素
  className?: string       // 追加のCSS
}
```

### 3. 実装例

#### プロジェクトセクション
```typescript
<ScrollableSection
  itemCount={projectsData.length}
  itemWidth={350}
  scrollAmount={300}
  enableDrag={true}         // ドラッグ有効
  showIndicator={true}
>
  {/* プロジェクトカードの配列 */}
</ScrollableSection>
```

#### ミュージックセクション
```typescript
<ScrollableSection
  itemCount={musicPlaylists.length}
  itemWidth={370}
  scrollAmount={300}
  enableDrag={false}        // ドラッグ無効
  showIndicator={true}
>
  {/* 音楽カードの配列 */}
</ScrollableSection>
```

## 利点

1. **コードの重複排除**: 共通のスクロール機能を一箇所に集約
2. **設定可能性**: プロップスにより各セクションに最適化
3. **拡張性**: 新しいスクロールセクションの追加が容易
4. **保守性**: バグ修正や機能追加が一箇所で対応可能
5. **型安全性**: TypeScriptによる型定義

## 旧ファイルからの移行

### 削除されたファイル:
- `hooks/use-scroll-section.ts` → `hooks/use-unified-scroll.ts`に統合
- `hooks/use-mouse-drag.tsx` → `hooks/use-unified-scroll.ts`に統合

### 更新されたファイル:
- `components/projects-section.tsx`: 75行 → 45行（約40%削減）
- `components/interests-section.tsx`: 80行 → 40行（約50%削減）

## 今後の拡張

新しいスクロール可能セクションを追加する場合：

1. データ配列を準備
2. `ScrollableSection`コンポーネントを使用
3. 適切なpropsを設定

```typescript
// 新しいセクションの例
<ScrollableSection
  itemCount={newItems.length}
  itemWidth={適切な幅}
  enableDrag={ドラッグ必要性}
>
  {/* 新しいアイテムの配列 */}
</ScrollableSection>
```
