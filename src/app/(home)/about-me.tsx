import { Tag } from '@/components/tag'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <article className="flex max-w-[1216px] mx-auto px-8 flex-col w-full md:justify-between md:items-center gap-6 py-24">
      <div className="flex justify-center md:items-start">
        <Tag>About Me</Tag>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse gap-12">
        <aside className="space-y-12 w-full md:w-[50%] ">
          <div className="space-y-4">
            <h3 className="lg:text-h3 mb-6">
              Curious about me? Here you have it:
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet nisl sem enim id. Sem
              fermentum lorem nam lectus elit sit arcu consectetur. Magna
              tristique aenean at enim enim ut pulvinar. Fames varius etiam dui
              tincidunt. Dictum quis ut phasellus sodales scelerisque tristique
              quam orci urna. Habitant hac in nunc pellentesque venenatis. Lorem
              ipsum dolor sit amet consectetur. Amet nisl sem enim id. Sem
              fermentum lorem nam lectus elit sit arcu consectetur. Magna
              tristique aenean at enim enim ut pulvinar. Fames varius etiam dui
              tincidunt. Dictum quis ut phasellus sodales scelerisque tristique
              quam orci urna. Habitant hac in nunc pellentesque venenatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet nisl sem enim id. Sem
              fermentum lorem nam lectus elit sit arcu consectetur. Magna
              tristique aenean at enim enim ut pulvinar. Fames varius etiam dui
              tincidunt. Dictum quis ut phasellus sodales scelerisque tristique
              quam orci urna. Habitant hac in nunc pellentesque venenatis. Lorem
              ipsum dolor sit amet consectetur. Amet nisl sem enim id. Sem
              fermentum lorem nam lectus elit sit arcu consectetur. Magna
              tristique aenean at enim enim ut pulvinar. Fames varius etiam dui
              tincidunt. Dictum quis ut phasellus sodales scelerisque tristique
              quam orci urna. Habitant hac in nunc pellentesque venenatis.
            </p>
          </div>
        </aside>
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-start">
          <div className="relative h-[300px] w-[280px] md:h-[480px] md:w-[400px]">
            <Image
              src="/assets/images/ninja.png"
              alt="Gabriel's picture"
              width={400}
              height={480}
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:right-5 md:left-10 md:top-0 md:h-[480px] md:w-[400px] object-cover"
            />
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:top-10 md:right-0 md:h-[480px] md:w-[400px]" />
          </div>
        </div>
      </div>
    </article>
  )
}
