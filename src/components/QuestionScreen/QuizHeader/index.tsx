import Flex from '../../ui/Flex'
import { FC } from 'react'
import { addLeadingZero, formatTime } from '../../../utils/helpers'
import { useQuiz } from '../../../context/QuizContext'
import { ScreenTypes } from '../../../types'
import Button from '../../ui/Button'
import Counter from './Counter'

interface QuizHeaderProps {
  activeQuestion: number
  totalQuestions: number
  timer: number
}

const QuizHeader: FC<QuizHeaderProps> = ({ activeQuestion, totalQuestions, timer }) => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const goToTopicsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  const progress = (timer / quizDetails.totalTime) * 100

  return (
    <Flex spaceBetween itemsCenter>
      <div>
        <span className="text-theme-color text-[40px] font-medium sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px]">
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className="text-secondary-text text-[20px] font-medium sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
          /{addLeadingZero(totalQuestions)}
        </span>
      </div>
      <div className="relative flex h-20 w-20 items-center justify-center">
        <svg className="absolute h-full w-full -rotate-90 transform">
          <circle
            cx="50%"
            cy="50%"
            r="35"
            stroke="currentColor"
            strokeWidth="4"
            className="text-border"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r="35"
            stroke="currentColor"
            strokeWidth="4"
            className="text-theme-color transition-all duration-500 ease-linear"
            fill="transparent"
            strokeDasharray={219.9}
            strokeDashoffset={219.9 - (progress / 100) * 219.9}
          />
        </svg>
        <Counter time={formatTime(timer)} />
      </div>
      <div className="w-[150px] md:w-[195px]">
        <Button text="Quit" onClick={goToTopicsScreen} outline big={false} />
      </div>
    </Flex>
  )
}

export default QuizHeader
