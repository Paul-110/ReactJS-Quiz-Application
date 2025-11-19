import { FC } from 'react'
import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { refreshPage } from '../../utils/helpers'
import Button from '../ui/Button'
import Flex from '../ui/Flex'
import ResultOverview from './ResultOverview'
import ResultItem from './ResultItem'

const ResultScreen: FC = () => {
  const { result, setCurrentScreen } = useQuiz() // Destructure setCurrentScreen

  const onClickRetry = () => {
    refreshPage()
  }

  const goToTopicsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen) // Navigate to QuizTopicsScreen
  }

  return (
    <div className="mx-auto w-[90%] max-w-[900px] py-8 md:py-12">
      <div className="text-app-logo mb-6 text-center md:mb-8">
        <AppLogo className="invert dark:invert-0 mx-auto h-10 w-auto md:h-16" />
      </div>
      <div className="bg-card-bg shadow-card hover:shadow-card-hover mx-auto mt-0 mb-8 rounded-xl p-4 transition-shadow duration-300 animate-[fade-in_0.5s_ease-out_forwards] md:p-10">
        <ResultOverview result={result} />
        {result.map((resultItem, index) => (
          <ResultItem key={resultItem.question} resultItem={resultItem} index={index} />
        ))}
      </div>
      <Flex flxEnd gap="1rem"> {/* Added gap for spacing between buttons */}
        <Button
          text="Back to Topics"
          onClick={goToTopicsScreen}
          outline // Use outline style for secondary action
        />
        <Button
          text="RETRY"
          onClick={onClickRetry}
          icon={<Refresh className="invert dark:invert-0" />}
          iconPosition="left"
          bold
        />
      </Flex>
    </div>
  )
}

export default ResultScreen
