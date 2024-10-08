'use client'

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
import { motion } from 'framer-motion'
import { useRef } from 'react'

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
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Coding',
    emoji: '💻',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Development',
    emoji: '🚇',
    left: '45%',
    top: '70%',
  },
]

export const About = () => {
  const constrainRef = useRef(null)
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Who We Are"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books hsaping my prespacitive"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my journey from a self-taught developer to a full-stack
                developer."
                className="px-6 py-6 "
              />

              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoImoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
