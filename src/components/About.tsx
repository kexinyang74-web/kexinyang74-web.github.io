import { about } from '../data/about'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-16">
      <Reveal>
        <h2 className="mb-2 text-2xl font-semibold">关于我</h2>
        <p className="mb-8 text-neutral-400">更详细的自我介绍，以及我正在使用的工具和技术。</p>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* 模块一：详细介绍 */}
        <Reveal className="space-y-4 leading-relaxed lg:col-span-3">
          {about.paragraphs.map((paragraph, index) => (
            // 第一段是核心介绍，用亮一点的字色突出，其余段落弱化
            <p key={index} className={index === 0 ? 'text-neutral-200' : 'text-neutral-400'}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        {/* 模块二：技能列表（延迟 150ms，跟在介绍后面出现） */}
        <Reveal className="space-y-6 lg:col-span-2" delay={150}>
          {about.skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-200">
                {/* 分类名前面的小渐变圆点，和 Hero 的渐变色呼应 */}
                <span
                  aria-hidden
                  className="size-2 rounded-full bg-linear-to-r from-fuchsia-400 to-cyan-300"
                />
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
