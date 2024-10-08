import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react'

const words = [
  'Performant',
  'Accessible',
  'Responsive',
  'Interactive',
  'Dynamic',
  'Scalable',
  'Secure',
  'Maintainable',
  'User Friendly',
  'Search Optimized',
  'Usable',
  'Intuitive',
  'Beautiful',
  'Reliable',
]
export const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none py-3 pr-4 gap-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 text-sm font-extrabold uppercase">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
