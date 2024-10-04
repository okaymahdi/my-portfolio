import { About } from '@/sections/About'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Tape } from '@/sections/Tape'

import { Testimonial } from '@/sections/Testimonial'

export default function Home() {
  
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonial />
      <About />
    </div>
  )
}
