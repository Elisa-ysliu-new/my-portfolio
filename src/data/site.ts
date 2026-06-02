export const site = {
  name: "Elisa",
  title: "UI/UX 設計師",
  tagline: "用設計點綴生活",
  description:
    "專注於清晰、溫暖且以人為本的數位體驗。我相信好的設計不只帶來視覺享受，更是兼具解決問題的功能。",
  email: "hello@example.com",
  linkedin: "https://linkedin.com",
  behance: "https://behance.net",

  home: {
    intro:
      "你好，我是 Elisa。熱衷於從使用者角度出發，打造簡約且具功能性的數位體驗——致力優化每一像素的精準度與使用者流暢度。",
    ctaPrimary: "查看作品",
    ctaSecondary: "認識我",
  },

  about: {
    heading: "關於我",
    paragraphs: [
      "我從視覺傳達的背景出發，逐步走進使用者研究與互動設計。對我而言，設計不是裝飾，而是幫助他人更輕鬆地完成想做的事。",
      "我擅長傾聽——無論是訪談中的細微猶豫，還是數據裡的反覆路徑。這些線索，會變成更貼近真實需求的原型與流程。",
      "目前我正持續累積作品集，也開放實習與專案合作。若你正在尋找一位認真、好溝通、願意一起把事情做好的設計夥伴，歡迎與我聯繫。",
    ],
    philosophy: {
      heading: "設計理念",
      items: [
        {
          title: "以人為本",
          description: "先理解情境與動機，再動手畫面。每個像素都應服務於真實需求。",
        },
        {
          title: "清晰優先",
          description: "減少不必要的選擇，讓資訊層級一目了然，降低使用者的認知負擔。",
        },
        {
          title: "持續驗證",
          description: "原型是對話的開始。透過測試與迭代，讓設計越來越接近答案。",
        },
      ],
    },
    process: {
      heading: "設計流程",
      steps: ["研究", "定義", "原型", "測試", "迭代"],
    },
    skills: [
      "Figma",
      "使用者訪談",
      "Wireframe",
      "Prototype",
      "Usability Testing",
      "Design System",
      "資訊架構",
      "視覺設計",
    ],
    timeline: [
      {
        year: "2025",
        title: "UI/UX 設計專題",
        description: "完成兩個完整 App 專案，從研究到高保真原型與可用性測試。",
      },
      {
        year: "2024",
        title: "設計實習",
        description: "參與電商產品改版，負責結帳流程優化與元件庫整理。",
      },
      {
        year: "2023",
        title: "自學與社群",
        description: "加入設計讀書會，定期分享案例與工具實作心得。",
      },
    ],
  },

  portfolio: {
    heading: "作品集",
    subheading: "精選專案——從問題出發，到可落地的體驗方案。",
  },

  nav: [
    { href: "/", label: "主頁" },
    { href: "/about", label: "關於我" },
    { href: "/portfolio", label: "作品集" },
  ],
} as const;
