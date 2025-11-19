const CenterCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card-bg flex min-h-[600px] min-w-full flex-col items-center justify-center rounded-sm px-3 pt-12 pb-14 md:min-w-[753px]">
      {children}
    </div>
  )
}

export default CenterCardContainer
