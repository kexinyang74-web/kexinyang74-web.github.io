import { projects, type Project } from '../data/projects'
import Reveal from './Reveal'

// 占位图渐变配色，按卡片顺序循环使用。
// 注意：Tailwind 只扫描源码里出现的完整类名来生成样式，
// 所以完整类名必须写死在这个数组里，不能在运行时拼接字符串。
const placeholderGradients = [
  'from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20',
  'from-cyan-400/20 via-sky-500/20 to-indigo-500/20',
  'from-amber-400/20 via-orange-500/20 to-rose-500/20',
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const gradient = placeholderGradients[index % placeholderGradients.length]

  // 卡片内容：有链接和无链接两种外壳共用，避免重复写两遍
  const cardContent = (
    <>
      {/* 截图区域：有图显示图片，没图显示渐变占位 */}
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={`${project.title}的截图`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className={`flex aspect-video items-center justify-center bg-linear-to-br ${gradient}`}>
          <span className="text-5xl font-bold text-neutral-500/80">{project.title.slice(0, 1)}</span>
        </div>
      )}

      <div className="p-5">
        <h3 className="mb-2 flex items-center gap-1 font-medium">
          {project.title}
          {/* 有链接时，标题旁显示一个悬停才出现的外跳箭头 */}
          {project.link && (
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-4 -translate-x-1 translate-y-1 text-violet-400 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          )}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-neutral-400">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  )

  const cardClass =
    'group h-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition duration-300 hover:-translate-y-1.5 hover:border-neutral-600 hover:shadow-lg hover:shadow-violet-500/10'

  // 有链接时整张卡片是 <a>，点击任意位置都能跳转；没链接就用普通 <div>
  return project.link ? (
    <a href={project.link} target="_blank" rel="noreferrer" className={cardClass}>
      {cardContent}
    </a>
  ) : (
    <div className={cardClass}>{cardContent}</div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <Reveal>
        <h2 className="mb-2 text-2xl font-semibold">项目展示</h2>
        <p className="mb-8 text-neutral-400">一些我做过的项目和练手作品，持续更新中。</p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          // 每行 3 张卡片，按 0 / 100 / 200ms 错峰浮现
          <Reveal key={project.id} delay={(index % 3) * 100}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
