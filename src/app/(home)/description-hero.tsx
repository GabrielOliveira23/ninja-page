import { Icon } from '@/components/icon'
import { IconButton } from '@/components/icon-button'
import Image from 'next/image'

export default function DescriptionHero() {
  return (
    <article className="flex max-w-[1216px] mx-auto px-8 flex-col-reverse md:flex-row w-full md:justify-between md:items-center gap-12 py-24">
      <aside className="space-y-12 w-full md:w-[60%] ">
        <div className="space-y-2">
          <div className="md:text-h1-tablet lg:text-h1 font-bold mb-2">
            <h1 className="inline-block md:inline mr-3">Hello,</h1>
            <h1 className="inline-block">{`I'm Gabriel👋`}</h1>
          </div>
          <p className="text-body2">
            Lorem ipsum dolor sit amet consectetur. Amet nisl sem enim id. Sem
            fermentum lorem nam lectus elit sit arcu consectetur. Magna
            tristique aenean at enim enim ut pulvinar. Fames varius etiam dui
            tincidunt. Dictum quis ut phasellus sodales scelerisque tristique
            quam orci urna. Habitant hac in nunc pellentesque venenatis.
            {/* {`I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.`} */}
          </p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-4">
            <Icon name="location" size="md" />
            <span>Paraná, Brazil</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="w-2 h-2 mx-2 bg-emerald rounded-full inline-block" />
            <span>Available</span>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li className="flex items-center gap-1">
            <IconButton name="github" size="md" />
            <span>Projects</span>
          </li>
          <li className="flex items-center gap-1">
            <IconButton name="inbox" size="md" />
            <span>Contact</span>
          </li>
          <li className="flex items-center gap-1">
            <IconButton name="linkedin" size="md" />
            <span>Profile</span>
          </li>
        </ul>
      </aside>
      <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
          <Image
            src="/assets/images/profile.jpg"
            alt="Gabriel's picture"
            width={200}
            height={200}
            className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
          />
          <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />
        </div>
      </div>
    </article>
  )
}
