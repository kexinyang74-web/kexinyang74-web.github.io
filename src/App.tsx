import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'projects', label: '项目展示' },
  { id: 'contact', label: '联系方式' },
] as const

function App() {
  return (
    <div className="min-h-screen">
      {/* 顶部导航 */}
      <header className="fixed inset-x-0 top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <span className="font-semibold">我的作品集</span>
          <ul className="flex gap-6 text-sm text-neutral-400">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-neutral-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-14">
        {/* 首页 Hero */}
        <Hero name="YKIN" tagline="一句话简介：我是正在学习编程的小白，正在努力成为一名全栈工程师" />

        {/* 关于我 */}
        <About />

        {/* 项目展示 */}
        <Projects />

        {/* 联系方式 */}
        <Contact />
      </main>

      <footer className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © 2026 我的作品集
      </footer>
    </div>
  )
}

export default App
