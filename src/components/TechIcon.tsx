export const TechIcon = ({ iconType }: { iconType: React.ElementType }) => {
  const Icon = iconType
  return (
    <>
      <Icon className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute" viewBox="0 0 100 100">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  )
}
