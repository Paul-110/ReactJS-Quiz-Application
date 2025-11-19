import cn from 'classnames'
import { ReactNode } from 'react'

interface CenterCardContainerProps {
  children: ReactNode
  className?: string
}

const CenterCardContainer = ({ children, className }: CenterCardContainerProps) => {
  return (
    <div
      className={cn(
        'bg-card-bg flex min-h-[600px] w-full flex-col items-center justify-center rounded-xl px-3 pt-12 pb-14 md:w-auto md:min-w-[753px]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default CenterCardContainer
