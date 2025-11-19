import cn from 'classnames'
import { FC, ReactNode } from 'react'

interface PageCenterProps {
  light?: boolean
  theme?: boolean
  justifyCenter?: boolean
  children: ReactNode
}

const PageCenter: FC<PageCenterProps> = ({ light, justifyCenter, children }) => {
  return (
    <div
      className={cn(
        `flex min-h-dvh flex-col items-center p-5 pb-10 pt-10`,
        {
          'justify-center': justifyCenter,
        },
        light ? 'background' : 'theme-gradient',
      )}
    >
      {children}
    </div>
  )
}

export default PageCenter
