import bookImage from '@/assets/images/book-cover.png'
import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader/SectionHeader'
import Image from 'next/image'

import ChromeDevToolsIcon from '@/assets/icons/chrome.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import GithubIcon from '@/assets/icons/github.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import ReactIcon from '@/assets/icons/react.svg'
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import mapImage from '@/assets/images/map.png'
import smileMemoImoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from './CardHeader'
import { ToolboxItems } from './ToolboxItems'

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeDevToolsIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Traveling',
    emoji: '🚜',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
  {
    title: 'Coding',
    emoji: '💻',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
]

export const About = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Who We Are"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books hsaping my prespacitive"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my journey from a self-taught developer to a full-stack
                developer."
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={smileMemoImoji} alt="Smile Memoji" />
          </Card>
        </div>
      </div>
    </div>
  )
}
