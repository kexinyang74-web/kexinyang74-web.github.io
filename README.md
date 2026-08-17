# 个人作品集网站

一个 React + TypeScript + Vite + Tailwind CSS 的个人作品集网站，深色主题、移动端适配、滚动渐入动画。

> 内容集中在 `src/data/` 目录的三个文件里，改文案不需要动组件代码。

## 技术栈

| 技术 | 版本 | 作用 |
|---|---|---|
| React | 19 | 界面框架 |
| TypeScript | — | 类型检查，写错字段名会直接报错提醒 |
| Vite | 8 | 开发服务器 + 打包工具 |
| Tailwind CSS | 4 | 样式（v4 通过 Vite 插件集成，无需配置文件） |

## 快速开始

```powershell
npm install     # 第一次使用或拉取新代码后：安装依赖
npm run dev     # 启动开发服务器，浏览器打开 http://localhost:5173
```

## 常用命令

| 命令 | 做什么 | 什么时候用 |
|---|---|---|
| `npm run dev` | 启动本地开发服务器 | 日常开发，改代码浏览器自动刷新 |
| `npm run build` | 类型检查 + 打包到 `dist/` | 确认没写错，或准备上线前 |
| `npm run preview` | 预览打包后的效果 | 模拟上线后的效果 |

## 项目结构

```
├── index.html              # 入口页面（标题在这里改）
├── public/                 # 图片放这里（头像、项目截图）
├── src/
│   ├── data/               # ★ 内容都在这里，改文案只动这三个文件
│   │   ├── about.ts        #   自我介绍、技能分组
│   │   ├── projects.ts     #   项目列表
│   │   └── contact.ts      #   联系方式
│   ├── components/         # 页面板块组件（想调样式才动）
│   │   ├── Hero.tsx        #   首页：大标题 + 简介 + 头像
│   │   ├── About.tsx       #   关于我：介绍 + 技能列表
│   │   ├── Projects.tsx    #   项目展示：卡片列表
│   │   ├── Contact.tsx     #   联系方式：图标卡片
│   │   └── Reveal.tsx      #   滚动渐入动画（通用组件）
│   ├── App.tsx             # 页面骨架 + Hero 的名字/简介
│   └── index.css           # Tailwind 入口 + 全局样式
├── vite.config.ts          # 工具配置，不用动
└── tsconfig*.json          # TypeScript 配置，不用动
```

## 怎么改内容

### 1. 名字和首页简介

编辑 `src/App.tsx` 里这一行：

```tsx
<Hero name="你的名字" tagline="一句话简介" />
```

### 2. 自我介绍 / 技能

编辑 `src/data/about.ts`：`paragraphs` 数组一个元素一段话；`skillGroups` 里加技能就是往数组加字符串。

### 3. 增删项目

编辑 `src/data/projects.ts`，照抄一条改字段：

```ts
{
  id: 'new-project',                 // 唯一编号，别重复
  title: '新项目名字',
  description: '一两句话描述这个项目。',
  techStack: ['React', 'Vite'],      // 技术栈标签
  link: 'https://github.com/xxx',    // 可选：项目链接，不填就没有
  imageUrl: '/projects/xxx.png',     // 可选：截图路径，不填显示占位图
},
```

### 4. 联系方式

编辑 `src/data/contact.ts`。`id` 填 `email` / `github` / `x` 显示对应图标，填别的显示通用地球图标。**用不到的条目整段删掉即可**（从 `{` 到 `},`）。

## 放真实图片

1. 图片放进 `public/` 目录，如 `public/avatar.png`、`public/projects/todo.png`
2. 填路径（开头要有 `/`）：

| 图片 | 在哪里填 | 填什么 |
|---|---|---|
| 头像 | `src/App.tsx` 的 Hero | `avatarUrl="/avatar.png"` |
| 项目截图 | `src/data/projects.ts` 对应项目 | `imageUrl: '/projects/todo.png'` |

## 新手避坑

- **中文只能写在单引号 `'...'` 里面**。改文字时先把光标点进引号中间再打字，落在引号外、方括号 `{ } [ ]` 里的文字都会让 TypeScript 报错。
- 常见报错：漏逗号 / 漏引号（报错会标出哪一行）、字段名拼错（提示「只能指定已知属性」= 检查拼写）。
- 报错不可怕：按提示行号找到位置，改到不报错为止。

## 部署上线（简要）

`npm run build` 产出 `dist/` 静态文件夹，托管到任意静态托管平台即可，Vite 项目推荐：

- **Vercel / Netlify**：连接 GitHub 仓库后自动构建部署，最省事
- **GitHub Pages**：免费，配合 `vite.config.ts` 里设置 `base` 使用
