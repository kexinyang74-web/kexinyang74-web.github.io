/** 一条联系方式 */
export interface ContactLink {
  /** 标识，决定显示哪个图标：email / github / x，其他显示通用地球图标 */
  id: string
  /** 显示名，如「邮箱」「GitHub」 */
  label: string
  /** 跳转地址：邮箱用 mailto: 开头，网页用 https:// 开头 */
  url: string
  /** 补充说明，如用户名 @yourname */
  handle?: string
}

/** 联系方式列表：换成你自己的地址即可 */
export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: '邮箱',
    url: 'mailto:3307598126@qq.com',
    handle: '3307598126@qq.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/kexinyang74-web/',
    handle: '@kexinyang74-web',
  },
  {
    id: 'x',
    label: 'X(Twitter)',
    url: 'https://x.com/yourname',
    handle: '@yourname',
  },
  {
    id: 'zhihu',
    label: '知乎',
    url: 'https://www.zhihu.com/people/yourname',
    handle: '@yourname',
  },
]
