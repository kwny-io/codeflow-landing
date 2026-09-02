# CodeFlow Landing — 交互式网页设计学习项目 🚀

> 一个用 **React + Vite + Tailwind CSS** 从零搭建的**完整产品落地页（Landing Page）**。
> 适合想学「现代前端 + 交互式网页设计」的新手：组件化、响应式、毛玻璃/渐变视觉、
> 鼠标特效、暗色主题，一个项目全都能看到。

🇬🇧 [English](#english) · 🇨🇳 [中文](#chinese)

---

<a name="english"></a>
## 🇬🇧 English

### What is this?

This is a **fully responsive marketing landing page** for a fictional product
("CodeFlow AI"), built from scratch with the modern frontend stack. It's a
great study reference for beginners because it packs most everyday UI patterns
into one page:

- A **Hero** section with a mouse-follow light effect and live code snippets
- **Features**, **Pricing**, **Testimonials** and a **Footer** section
- A **sticky navbar** with a mobile hamburger menu
- A consistent **dark theme** with blue/purple gradients throughout

### 🛠 Tech Stack

| Layer | Tool |
|-------|------|
| Framework | **React 19** |
| Build tool | **Vite** |
| Styling | **Tailwind CSS 4** |
| Icons | **lucide-react** |
| Syntax highlight | **react-syntax-highlighter** |

### 🚀 How to run it locally

```bash
# 1. install dependencies
npm install

# 2. start the dev server (hot reload)
npm run dev

# 3. open the printed URL, usually http://localhost:5173
```

To build the production bundle:
```bash
npm run build
npm run preview
```

### 🧠 What you learn (for beginners)

1. **Component thinking** — the page is split into small components
   (`Navbar`, `Hero`, `Features`, `Pricing`, `Testimonials`, `Footer`), each
   focused on one job.
2. **Props & data-driven UI** — sections render from arrays (data) instead of
   hard-coded markup, e.g. `Features.tsx` maps a list into cards.
3. **Responsive design** — Tailwind breakpoints (`sm:` `md:` `lg:`) make the
   layout adapt from phone to desktop.
4. **State & hooks** — `useState`/`useEffect` power the mobile menu and the
   mouse-follow glow.
5. **Deployment** — a GitHub Actions workflow builds and publishes the site to
   GitHub Pages automatically on every push.

### 🌐 Live demo

Deployed to GitHub Pages — open in your browser:
**[https://kwny-io.github.io/codeflow-landing/](https://kwny-io.github.io/codeflow-landing/)**

---

<a name="chinese"></a>
## 🇨🇳 中文

### 这是什么？

这是一个用现代前端技术栈**从零搭建的、功能完整的响应式产品落地页**（虚构产品
"CodeFlow AI"）。它特别适合前端新手用来学习，因为一页里几乎涵盖了日常 UI 开发的
所有常用手法：

- **Hero 首屏**：带鼠标跟随光效 + 实时代码高亮展示
- **Features / Pricing / Testimonials / Footer** 完整区块
- **固定导航栏** + 移动端汉堡菜单
- 全站统一的 **暗色主题** + 蓝紫渐变

### 🛠 技术栈

| 层级 | 工具 |
|------|------|
| 框架 | **React 19** |
| 构建 | **Vite** |
| 样式 | **Tailwind CSS 4** |
| 图标 | **lucide-react** |
| 代码高亮 | **react-syntax-highlighter** |

### 🚀 本地运行

```bash
npm install      # 1. 安装依赖
npm run dev      # 2. 启动开发服务器（热更新）
# 3. 打开提示的地址，一般是 http://localhost:5173
```

打包生产版本：
```bash
npm run build
npm run preview
```

### 🧠 新手能从中学到什么

1. **组件化思维** —— 页面被拆成独立小组件（`Navbar` / `Hero` / `Features` /
   `Pricing` / `Testimonials` / `Footer`），每个只干一件事。
2. **Props 与数据驱动 UI** —— 区块由数组渲染，而不是写死的标记，比如
   `Features.tsx` 把列表 map 成卡片。
3. **响应式设计** —— 利用 Tailwind 断点（`sm:` `md:` `lg:`）让布局在手机和
   桌面间自适应。
4. **State 与 Hooks** —— `useState`/`useEffect` 实现移动端菜单和鼠标跟随光效。
5. **部署** —— 通过 GitHub Actions 工作流，每次 `push` 自动构建并发布到
   GitHub Pages。

### 🌐 在线 Demo

本仓库已部署到 GitHub Pages，浏览器打开即可查看效果：
**[https://kwny-io.github.io/codeflow-landing/](https://kwny-io.github.io/codeflow-landing/)**
