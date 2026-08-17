interface HeroProps {
  /** 名字，会以渐变色高亮显示 */
  name: string
  /** 一句话简介 */
  tagline: string
  /** 头像图片地址，不传则显示占位头像 */
  avatarUrl?: string
}

export default function Hero({ name, tagline, avatarUrl }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center gap-8 overflow-hidden px-4 py-24 text-center"
    >
      {/* 背景光晕：纯装饰，屏幕阅读器忽略 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 left-1/4 size-72 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* 头像：外圈渐变描边，内圈图片或占位 */}
      <div className="animate-fade-up rounded-full bg-linear-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 p-1 shadow-lg shadow-violet-500/25">
        {avatarUrl ? (
          <img src={avatarUrl} alt={`${name}的头像`} className="size-28 rounded-full object-cover sm:size-32" />
        ) : (
          <div className="flex size-28 items-center justify-center rounded-full bg-neutral-900 text-4xl sm:size-32">
            👤
          </div>
        )}
      </div>

      <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <p className="mb-3 text-sm tracking-widest text-violet-300">欢迎来到我的作品集</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          你好，我是
          <span className="bg-linear-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
      </div>

      <p
        className="animate-fade-up max-w-xl text-lg text-neutral-400 sm:text-xl"
        style={{ animationDelay: '0.2s' }}
      >
        {tagline}
      </p>
    </section>
  )
}
