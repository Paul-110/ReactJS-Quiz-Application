import { Moon, Sun } from '../../config/icons'
import { FC } from 'react'

interface ToggleThemeProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  value: string
  checked: boolean
  currentTheme: string
}

const ToggleTheme: FC<ToggleThemeProps> = ({
  onChange,
  id,
  value,
  checked,
  currentTheme,
}) => {
  return (
    <label
      htmlFor={id}
      className="text-theme-text absolute top-3 right-6 flex cursor-pointer items-center text-base font-bold"
    >
      Mode:
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        value={value}
        checked={checked}
        // Make the input cover the span, but be invisible, while remaining interactive
        className="peer group absolute h-full w-full cursor-pointer opacity-0"
      />
      <span className="after:bg-primary-text peer-checked:after:bg-card-bg peer-checked:bg-theme-color relative ml-2 inline-block h-[26px] w-[52px] cursor-pointer rounded-[50px] bg-gray-300 after:absolute after:top-[3px] after:left-[5px] after:inline-block after:h-[21px] after:w-[21px] after:items-center after:justify-center after:rounded-[50%] after:content-[''] after:transition-all after:duration-300 peer-checked:after:translate-x-[23px]">
        {currentTheme === 'light' ? (
          <Sun className="invert animate-slide-off absolute top-[5px] left-[7px] z-[1]" />
        ) : (
          <Moon className="animate-slide-on absolute top-[5px] left-[7px] z-[1]" />
        )}
      </span>
    </label>
  )
}

export default ToggleTheme
