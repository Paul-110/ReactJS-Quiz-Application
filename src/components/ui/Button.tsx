import cn from 'classnames'
import { FC, ReactNode } from 'react'

interface ButtonTypes {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean
  bold?: boolean
  big?: boolean
  disabled?: boolean
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  bold,
  big,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex min-h-[40px] cursor-pointer items-center justify-center gap-4 rounded-lg text-[16px] transition-all duration-300 disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none sm:text-[18px] md:min-h-[50px] md:w-[195px] md:text-[20px] lg:text-[22px] xl:text-[24px]',
        outline
          ? 'text-outline-button-text bg-card-bg border-theme-color border'
          : 'text-button-text not-disabled:button-background border-none shadow-button hover:shadow-button-hover hover:-translate-y-1',
        bold ? 'font-bold' : 'font-normal',
        big ? 'w-[180px]' : 'w-[150px]',
        disabled ? 'bg-disabled-button text-secondary-text' : 'active:scale-[0.98]',
      )}
    >
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button
