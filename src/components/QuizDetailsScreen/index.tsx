import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import PageCenter from '../ui/PageCenter'

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  const goToTopicsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <div className="text-app-logo mb-6 text-center md:mb-8">
          <AppLogo className="invert dark:invert-0 mx-auto h-10 w-auto md:h-16" />
        </div>
        <h2 className="text-theme-color text-4xl font-bold tracking-wide">ReactJS QUIZ</h2>

        <div className="border-border my-6 w-full rounded-xl border p-6">
          <h3 className="text-primary-text mb-5 text-center text-2xl font-semibold">
            About the Quiz
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="border-border rounded-lg border p-4">
              <p className="text-secondary-text text-sm">Topic</p>
              <p className="text-primary-text text-lg font-bold">{selectedQuizTopic}</p>
            </div>
            <div className="border-border rounded-lg border p-4">
              <p className="text-secondary-text text-sm">Questions</p>
              <p className="text-primary-text text-lg font-bold">{totalQuestions}</p>
            </div>
            <div className="border-border rounded-lg border p-4">
              <p className="text-secondary-text text-sm">Total Score</p>
              <p className="text-primary-text text-lg font-bold">{totalScore}</p>
            </div>
            <div className="border-border rounded-lg border p-4">
              <p className="text-secondary-text text-sm">Time</p>
              <p className="text-primary-text text-lg font-bold">{convertSeconds(totalTime)}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            text="Back"
            onClick={goToTopicsScreen}
            outline
          />
          <Button
            text="Start"
            icon={<StartIcon className="invert dark:invert-0" />}
            iconPosition="left"
            onClick={goToQuestionScreen}
            bold
          />
        </div>
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
