function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-[15px] font-bold tracking-wide text-maroon">{title}</h2>
      <div className="mt-2 h-0.5 w-10 bg-gold" />
    </div>
  )
}

export default SectionHeading
