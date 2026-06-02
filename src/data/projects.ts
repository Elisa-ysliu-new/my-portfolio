export type Project = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "morning-brew",
    title: "晨間咖啡 App",
    description:
      "為忙碌的上班族設計的點餐與取餐體驗，縮短從開啟 App 到完成訂單的步驟。",
    outcome: "結帳流程步驟減少 40%，測試滿意度達 4.6 / 5。",
    tags: ["Mobile", "UX Research", "Prototype"],
    href: "https://figma.com",
    gradient: "from-[#E8DFD4] via-[#D4C4B0] to-[#B8A088]",
    featured: true,
  },
  {
    id: "slow-travel",
    title: "慢旅行程規劃",
    description:
      "以「少而精」為核心的旅遊規劃工具，幫助使用者專注在當下，而非塞滿行程。",
    outcome: "資訊架構重構後，任務完成率提升 28%。",
    tags: ["Web App", "IA", "Visual Design"],
    href: "https://figma.com",
    gradient: "from-[#D8E4DC] via-[#B8C9B0] to-[#8FA68A]",
    featured: true,
  },
  {
    id: "library-seat",
    title: "圖書館座位預約",
    description:
      "校園圖書館的座位預約系統改版，解決尖峰時段找不到座位與資訊混亂的問題。",
    outcome: "預約成功率提升，客服相關問題減少約 35%。",
    tags: ["Service Design", "Wireframe", "Testing"],
    href: "https://figma.com",
    gradient: "from-[#E4E0DC] via-[#C9C4BE] to-[#A39E96]",
  },
  {
    id: "habit-light",
    title: "習慣小光",
    description:
      "輕量級習慣養成 App，用溫和提醒與正向回饋，降低使用者放棄的挫折感。",
    outcome: "七日留存率較舊版提升 22%，介面評分更一致。",
    tags: ["Mobile", "UI Design", "Micro-interaction"],
    href: "https://figma.com",
    gradient: "from-[#F0E6D8] via-[#E8D4B8] to-[#D4A574]",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
