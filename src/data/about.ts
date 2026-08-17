/** 一组技能，按类别归拢 */
export interface SkillGroup {
  /** 分类名，如「前端开发」「正在学习」 */
  category: string
  /** 该分类下的技能列表 */
  skills: string[]
}

/** 关于我页面的全部内容 */
export interface AboutInfo {
  /** 详细介绍，数组里每个元素是一段 */
  paragraphs: string[]
  /** 技能分组 */
  skillGroups: SkillGroup[]
}

/** 内容数据：改文字、增删技能只需要动这个文件 */
export const about: AboutInfo = {
  paragraphs: [
    '你好!我是YKIN,一名正在学习编程的小白，正在努力成为一名全栈工程师。我相信好的工具和网站能让生活更轻松，也享受从一行代码长成一个完整作品的过程。',
    '平时喜欢折腾新工具和开源项目，遇到感兴趣的功能就自己动手实现一遍。业余时间会做些 side project 练手，你现在看到的这个网站就是其中之一。',
    '如果你对我的项目感兴趣，或者想聊聊技术、一起做点什么都欢迎联系我，联系方式就在页面下方。',
  ],
  skillGroups: [
    {
      category: '前端开发',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML / CSS'],
    },
    {
      category: '后端 & 工具',
      skills: ['Node.js', 'Git', 'VSCode', 'npm'],
    },
    {
      category: '正在学习',
      skills: ['Next.js', '动画设计', '无障碍访问'],
    },
  ],
}
