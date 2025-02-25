import { Icon } from '@/components/icon'
import { IconButton } from '@/components/icon-button'
import { Tag } from '@/components/tag'

export default function Contact() {
  return (
    <article className="flex max-w-[1216px] mx-auto px-4 md:px-8 flex-col w-full md:justify-between md:items-center gap-6 py-24">
      <div className="flex justify-center md:items-start">
        <Tag>Get in touch</Tag>
      </div>
      <span className="text-subtitle-mobile lg:text-subtitle font-normal text-center">
        {`What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.`}
      </span>
      <div className="flex gap-4 w-full justify-center">
        <Icon name="inbox" size="md" />
        <span>gabriel.leomartins231@gmail.com</span>
        <Icon name="copy" size="md" />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <span className="flex justify-center">
          You also may find me on these plataforms
        </span>
        <div className="flex gap-1 justify-center">
          <IconButton name="github" size="md" />
          <IconButton name='linkedin' size="md" />
        </div>
      </div>
    </article>
  )
}
