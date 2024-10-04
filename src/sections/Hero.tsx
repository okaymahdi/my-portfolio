import ArrowDown from '@/assets/icons/arrow-down.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import StarIcon from '@/assets/icons/star.svg'
import grainImage from '@/assets/images/grain.jpg'
import memojiImage from '@/assets/images/memoji-computer.png'
import { HeroOrbit } from '@/components/HeroOrbit/HeroOrbit'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        {/* hero background image */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* hero ring section */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* star 01 */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        {/* star 02 */}
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        {/* star 03 */}
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* star 04 */}
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        {/* star 05 */}
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        {/* star 06 */}
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        {/* star 07 */}
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* star 08 */}
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        {/* star 09 */}
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        {/* star 10 */}
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      {/* hero content container */}
      <div className="container">
        {/* top content */}
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            width={100}
            alt="person peeking from behid laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full mr-2"></div>
            <h2 className="text-sm font-medium">Avalable for New Projects</h2>
          </div>
        </div>

        {/* middle content */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-secondary text-3xl md:text-5xl text-center tracking-wide mt-8">
            Bulding Exeptional User Exparieances
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
            praesentium soluta dolores blanditiis ut fugit atque tempora quam
            porro iste quae iusto a reprehenderit, deleniti voluptates
            repudiandae rerum temporibus.
          </p>
        </div>

        {/* buttom content */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👏</span>
            <span className="font-semibold">Let`s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
