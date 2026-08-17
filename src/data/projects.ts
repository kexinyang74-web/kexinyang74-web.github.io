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
    id: 'fitness-meal-plan',
    title: '健身饮食计划',
    description: '一个移动端友好的健身饮食计划生成器：输入身体数据和食物偏好，自动生成一周三餐计划，支持表格展示和 Excel 下载。网页版完全基于本地 Python 计算，不调用大模型，不消耗 token。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/kexinyang74-web/fitness-meal-plan',
  },
  {
    id: 'weather-app',
    title: '天气查询应用',
    description: '输入城市名查询实时天气和未来三天预报，界面自动适配深色模式。',
    techStack: ['React', 'Vite', '天气 API'],
    link: 'https://github.com/yourname/weather-app',
  },
  {
    id: 'dashboard',
    title: '数据可视化仪表盘',
    description: '把销售数据做成可交互的图表仪表盘，支持按时间和维度筛选。',
    techStack: ['React', 'ECharts', 'TypeScript'],
  },
  {
    id: 'personal-blog',
    title: '个人博客',
    description: '用 Markdown 写文章的静态博客，支持代码高亮和评论功能。',
    techStack: ['VitePress', 'Markdown', 'Vercel'],
    link: 'https://github.com/yourname/blog',
  },
  {
    id: 'snake-game',
    title: '贪吃蛇小游戏',
    description: 'Canvas 实现的经典贪吃蛇，加了音效和本地排行榜。',
    techStack: ['TypeScript', 'Canvas API'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI 聊天助手',
    description: '接入大模型 API 的对话框应用，支持流式回复和多轮历史记录。',
    techStack: ['React', 'Node.js', 'OpenAI API'],
    link: 'https://github.com/yourname/ai-chatbot',
  },
]
