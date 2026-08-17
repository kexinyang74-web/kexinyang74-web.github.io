import { contactLinks, type ContactLink } from '../data/contact'
import Reveal from './Reveal'

/** 根据 id 返回对应的内联 SVG 图标，不认识的 id 显示通用地球图标 */
function LinkIcon({ id }: { id: ContactLink['id'] }) {
  if (id === 'email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  if (id === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  }
  if (id === 'x') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <Reveal>
        <h2 className="mb-2 text-2xl font-semibold">联系方式</h2>
        <p className="mb-8 text-neutral-400">有兴趣聊聊？欢迎通过以下任何一种方式找到我。</p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactLinks.map((link, index) => (
          <Reveal key={link.id} delay={(index % 4) * 100} className="h-full">
            <a
              href={link.url}
              // 网页链接新标签页打开，mailto 邮箱链接原地打开
              {...(link.url.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex h-full flex-col items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-neutral-600"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-linear-to-br from-fuchsia-500/15 via-violet-500/15 to-cyan-400/15 text-violet-300 transition group-hover:scale-110">
                <LinkIcon id={link.id} />
              </span>
              <span className="font-medium">{link.label}</span>
              {link.handle && <span className="text-sm text-neutral-500">{link.handle}</span>}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
