import { Card } from '@/components/card'
import { IconButton } from '@/components/icon-button'
import { Tag } from '@/components/tag'
import Image from 'next/image'

const projects = [
  {
    title: 'Projeto 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    image: '/assets/images/nlw.png',
    tools: [
      'React',
      'Next.js',
      'Typescript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Tailwindcss',
      'Drizzle ORM',
      'Git',
    ],
  },
  {
    title: 'Projeto 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    image: '/assets/images/nlw.png',
    tools: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Projeto 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    image: '/assets/images/nlw.png',
    tools: ['Docker', 'PostgreSQL', 'GraphQL'],
  },
]

export default function MyProjects() {
  return (
    <article className="flex max-w-[1216px] mx-auto px-4 md:px-8 flex-col w-full md:justify-between md:items-center gap-6 py-24">
      <div className="flex justify-center md:items-start">
        <Tag>Projects</Tag>
      </div>
      <span className="text-subtitle-mobile lg:text-subtitle font-normal text-center">
        {"Some noteworthy projects I've worked on:"}
      </span>
      <ProjectList />
    </article>
  )
}

function ProjectList() {
  return (
    <Card className="md:flex-col gap-12 bg-transparent">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`flex flex-col md:flex-row w-full ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div
            className={`flex w-full items-center justify-center p-8 md:p-12 bg-gray-200 max-sm:rounded-t-xl md:${
              index % 2 !== 0 ? 'rounded-e-xl' : 'rounded-s-xl'
            }`}
          >
            <Image
              alt={project.title}
              className="overflow-hidden rounded-lg w-full h-auto object-cover"
              src={project.image}
              width={800} // Aumente para melhor qualidade
              height={800} // Mantenha proporcional
              quality={100} // Garante a melhor qualidade possível
              priority // Carregamento prioritário (opcional, para imagens acima da dobra)
            />
          </div>

          <aside
            className={`flex flex-col w-full items-start justify-center p-8 md:p-12 bg-gray-100 max-sm:rounded-b-xl gap-6 md:${
              index % 2 !== 0 ? 'rounded-s-xl' : 'rounded-e-xl'
            }`}
          >
            <p className="text-subtitle-mobile lg:text-subtitle font-semibold">
              {project.title}
            </p>
            <p>{project.description}</p>
            <ul className="flex flex-row flex-wrap gap-2">
              {project.tools.map(tool => (
                <li key={tool}>
                  <Tag>{tool}</Tag>
                </li>
              ))}
            </ul>
            <IconButton
              className="hover:bg-gray-50 active:bg-gray-100"
              name="external-link"
              size="lg"
            />
          </aside>
        </div>
      ))}
    </Card>
  )
}
