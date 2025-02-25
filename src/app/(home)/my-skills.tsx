import { Tag } from '@/components/tag'
import Image from 'next/image'

const technologies = [
  { name: 'Javascript', src: '/assets/tools-icons/javascript.svg' },
  { name: 'Typescript', src: '/assets/tools-icons/typescript.svg' },
  { name: 'React', src: '/assets/tools-icons/react.svg' },
  { name: 'Next.js', src: '/assets/tools-icons/nextjs.svg' },
  { name: 'Node.js', src: '/assets/tools-icons/nodejs.svg' },
  { name: 'Docker', src: '/assets/tools-icons/docker.svg' },
  { name: 'PostgreSQL', src: '/assets/tools-icons/postgresql.svg' },
  { name: 'MongoDB', src: '/assets/tools-icons/mongodb.svg' },
  { name: 'Firebase', src: '/assets/tools-icons/firebase.svg' },
  { name: 'Git', src: '/assets/tools-icons/git.svg' },
  { name: 'Tailwind', src: '/assets/tools-icons/tailwindcss.svg' },
  {
    name: 'Styled Components',
    src: '/assets/tools-icons/styledcomponents.svg',
  },
]

export default function MySkills() {
  return (
    <article className="flex max-w-[1216px] mx-auto px-4 md:px-8 flex-col w-full md:justify-between md:items-center gap-6 py-24">
      <div className="flex justify-center md:items-start">
        <Tag>Skills</Tag>
      </div>
      <span className="text-subtitle-mobile lg:text-subtitle font-normal text-center">
        The skills, tools and technologies I am good at:
      </span>
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {technologies.map(tech => (
          <li key={tech.name} className="flex flex-col items-center gap-2">
            <Image
              alt={tech.name}
              className="w-[60px] h-[60px]"
              src={tech.src}
              width={60}
              height={60}
            />
            <span className="text-center">{tech.name}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
