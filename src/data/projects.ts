/** 单个项目的信息 */
export interface Project {
  id: string
  /** 项目名称 */
  title: string
  /** 简短描述 */
  description: string
  /** 技术栈标签 */
  techStack: string[]
  /** 项目截图地址：把图片放进 public/ 目录后填路径，如 "/projects/todo.png"；不填则显示渐变占位图 */
  imageUrl?: string
  /** 项目链接（GitHub 仓库或线上地址），可选 */
  link?: string
}

/** 项目列表：以后新增项目，在这里照抄一条即可 */
export const projects: Project[] = [
  {
    id: 'bilibili-rag-qa',
    title: 'B站案例库 RAG 问答系统',
    description:
      '基于约10篇B站案例拆解笔记构建的RAG问答项目：使用LangChain与Chroma完成向量检索和来源展示，并通过30条固定评测对比Top-K参数，将自动引用命中率从90%提升至93%。',
    techStack: ['Python', 'LangChain', 'Chroma', 'RAG', 'DeepSeek'],
    link: 'https://kexinyang74-web.github.io/bilibili-rag-qa/',
  },
  {
    id: 'media-topic-assistant',
    title: '灵感小记 · 自媒体创作工作台',
    description:
      '基于FastAPI、SQLite与DeepSeek API构建本机创作工作台，将定位、素材、选题、稿件版本、制作排期与复盘串联，解决创作资料分散和上下文重复整理问题；覆盖8个助手、5种内容形式，并以75项后端自动化测试验证核心流程。',
    techStack: ['Python', 'FastAPI', 'DeepSeek API', 'SQLite', 'pytest'],
    link: 'https://kexinyang74-web.github.io/media-topic-assistant/',
  },
  {
    id: 'pomodoro',
    title: '番茄钟',
    description:
      '一款极简的专注计时与任务管理工具：支持专注、短休和长休模式，可自定义阶段时长并关联当前任务；数据保存在浏览器本地，还可作为 PWA 安装到手机或桌面。',
    techStack: ['Vue 3', 'Vite', 'PWA', 'localStorage'],
    link: 'https://kexinyang74-web.github.io/pomodoro/',
  },
  {
    id: 'ai-career-portfolio',
    title: '转行 AI 应用开发 · 6 个月学习操作系统',
    description:
      '一套持续更新的 AI 应用开发学习与实践记录：用 24 周执行计划、每日学习日志和进度看板组织学习，沉淀 Python 练习、AI 助手与 RAG 实践代码，通过 GitHub 展示学习过程与阶段成果。',
    techStack: ['Python', 'AI 应用开发', 'RAG', 'Obsidian', 'Markdown'],
    link: 'https://github.com/kexinyang74-web/ai-career-portfolio',
  },
  {
    id: 'fitness-meal-plan',
    title: '健身饮食计划',
    description:
      '一个移动端友好的健身饮食计划生成器：输入身体数据和食物偏好，自动生成一周三餐计划，支持表格展示和 Excel 下载。网页版完全基于本地 Python 计算，不调用大模型，不消耗 token。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/kexinyang74-web/fitness-meal-plan',
  },
  {
    id: 'portfolio',
    title: '个人作品集网站',
    description:
      '你现在看到的这个网站：用 React + TypeScript + Tailwind CSS 构建，深色主题、移动端适配、滚动渐入动画，代码推送到 GitHub 后由 GitHub Actions 和 Vercel 自动构建部署上线。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://kexinyang74-web.github.io',
  },
]
