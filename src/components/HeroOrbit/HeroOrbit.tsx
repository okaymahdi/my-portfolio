import { PropsWithChildren } from 'react'

export const HeroOrbit = ({
  children,
  size,
  rotation = 0,
}: PropsWithChildren<{ size?: number; rotation?: number }>) => {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation || 0}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className="inline-flex"
            style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
