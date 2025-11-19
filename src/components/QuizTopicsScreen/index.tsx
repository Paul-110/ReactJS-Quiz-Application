import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { ScreenTypes } from '../../types'

import cn from 'classnames'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <div className="text-app-logo mb-8 text-center md:mb-12">
          <AppLogo className="invert dark:invert-0 mx-auto h-[110px] w-[75px] md:h-auto md:w-[158px]" />
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold">
          WELCOME TO <HighlightedText> ReactJS QUIZ</HighlightedText>
        </h2>
        <p className="text-secondary-text text-center text-lg leading-7">
          Select topic below to start your Quiz.
        </p>
        <div className="my-8 flex max-w-full flex-wrap justify-center gap-4 md:max-w-[70%] md:gap-5">
          {quizTopics.map(({ title, icon, disabled }, index) => (
            <button
              key={title}
              onClick={() => selectQuizTopic(title)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={cn(
                'flex items-center rounded-xl p-3 opacity-0 transition-all duration-300 ease-out [-webkit-tap-highlight-color:_transparent] [tap-highlight-color:_transparent] animate-[stagger-in_0.5s_ease-out_forwards] md:px-3 md:py-4',
                disabled ? 'bg-disabled-card cursor-not-allowed opacity-60' : 'bg-select-topic-bg cursor-pointer',
                quizTopic === title
                  ? `border-theme-color scale-105 border-2 shadow-lg`
                  : `border-disabled-button border hover:border-theme-color/50 hover:scale-105 hover:shadow-md`
              )}
              disabled={disabled}
            >
              {icon}
              <span className="ml-3 text-base font-medium md:text-lg md:font-semibold">
                {title}
              </span>
            </button>
          ))}
        </div>

        {quizTopic && (
          <div className="animate-[fade-in_0.5s_ease-out]">
            <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
          </div>
        )}
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen
