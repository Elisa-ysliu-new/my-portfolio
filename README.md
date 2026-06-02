# Elisa · UI/UX 設計師個人網站

文青風格的新晉 UI/UX 設計師作品集，使用 Next.js（App Router）、TypeScript 與 Tailwind CSS 建置。

## 頁面結構

| 路由 | 說明 |
|------|------|
| `/` | 主頁 |
| `/about` | 關於我 |
| `/portfolio` | 作品集 |

## 本地開發

```bash
npm install
npm run dev
```

在瀏覽器開啟 [http://localhost:3000](http://localhost:3000)。

## 建置與預覽

```bash
npm run build
npm start
```

## 自訂內容

- 網站文案與導覽：`src/data/site.ts`
- 作品集專案：`src/data/projects.ts`

替換姓名、Email、作品連結與圖片後即可作為你的個人網站使用。

## 部署至 Vercel

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 匯入該儲存庫
3. 使用預設的 Next.js 設定即可自動建置與部署

## 技術棧

- Next.js 16（App Router）
- React 19
- Tailwind CSS v4
- Noto Serif TC / Noto Sans TC（Google Fonts）
