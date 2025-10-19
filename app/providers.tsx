"use client"

import { type ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

// 早期に実行されるように，コンポーネントの外で定義
if (typeof window !== "undefined" && !(window as any).ethereum) {
  // Web3非対応環境用のモックオブジェクト
  const mockEthereum = {
    _selectedAddress: undefined,
    isMetaMask: false,
    // selectedAddressのgetter/setter
    get selectedAddress() {
      return this._selectedAddress;
    },
    set selectedAddress(value) {
      this._selectedAddress = undefined; // 常にundefinedを設定
    },
    // その他必要なプロパティ
    enable: () => Promise.reject(new Error("MetaMask not available")),
    request: () => Promise.reject(new Error("MetaMask not available")),
    send: () => Promise.reject(new Error("MetaMask not available")),
    sendAsync: () => Promise.reject(new Error("MetaMask not available"))
  };

  Object.defineProperty(window, "ethereum", {
    value: mockEthereum,
    writable: false,
    configurable: true
  });
}

export function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
