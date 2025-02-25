import { Card } from '@/components/card'
import { Tag } from '@/components/tag'
import Image from 'next/image'

type Experience = {
  company: string
  companyImg: string
  position: string
  date: string
  attribuitions: string[]
}

const experiences = [
  {
    company: 'DevHops',
    companyImg: '/assets/images/devhops.png',
    position: 'Front-end Developer Intern',
    date: 'Sep 2022 - Mar 2023',
    attribuitions: [
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
] as Experience[]

export default function MyExperiences() {
  return (
    <article className="flex max-w-[1216px] mx-auto px-4 md:px-8 flex-col w-full md:justify-between md:items-center gap-6 py-24">
      <div className="flex justify-center md:items-start">
        <Tag>Experiences</Tag>
      </div>
      <span className="text-subtitle-mobile lg:text-subtitle font-normal text-center">
        Here is a quick summary of my experiences:
      </span>
      <ExperiencesList />
    </article>
  )
}

function ExperiencesList() {
  return experiences.map(
    ({ company, companyImg, position, date, attribuitions }) => {
      return (
        <Card key={company} className="justify-between p-8 gap-4">
          <div className="order-1 md:order-1">
            <Image
              src={companyImg}
              width={800}
              height={800}
              quality={100}
              alt={company}
              className="object-cover w-[150px] rounded-lg"
            />
          </div>

          <span className="order-2 md:order-3 text-gray-700">{date}</span>

          <aside className="flex flex-col gap-4 max-w-[384px] order-3 md:order-2">
            <span className="text-subtitle-mobile lg:text-subtitle font-semibold">
              {position}
            </span>
            <ul className="list-disc list-inside flex flex-col gap-1">
              {attribuitions.map((value, index) => {
                return (
                  <li key={`${value.split(' ')}-${index}`}>
                    <span>{value}</span>
                  </li>
                )
              })}
            </ul>
          </aside>
        </Card>
      )
    }
  )
}
