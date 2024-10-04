export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="font-semibold text-center uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-secondary font-bold text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  )
}
