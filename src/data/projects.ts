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
