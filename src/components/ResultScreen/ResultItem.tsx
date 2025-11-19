import cn from 'classnames'
import { FC } from 'react'
import { Result } from '../../types'
import CodeSnippet from '../ui/CodeSnippet'
import Flex from '../ui/Flex'
import QuizImage from '../ui/QuizImage'
import RightAnswer from './RightAnswer'

interface ResultItemProps {
  resultItem: Result
  index: number
}

const ResultItem: FC<ResultItemProps> = ({ resultItem, index }) => {
  const {
    question,
    choices,
    code,
    image,
    correctAnswers,
    selectedAnswer,
    score,
    isMatch,
  } = resultItem

  return (
    <div
      key={question}
      className="border-border mt-10 flex flex-col justify-between rounded-lg border p-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-md md:flex-row md:p-6"
    >
      <div className="w-[90%]">
        <Flex gap="4px">
          <h6 className="text-primary-text text-[16px] font-medium leading-[1.3] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">{`${index + 1}. `}</h6>
          <span className="text-primary-text mb-[10px] text-[16px] font-medium leading-[1.3] sm:text-[18px] md:mb-5 md:text-[20px] lg:text-[22px] xl:text-[24px]">
            {question}
          </span>
        </Flex>
        <div>
          {code && <CodeSnippet code={code} language="javascript" />}
          {image && <QuizImage image={image} />}
          <ul>
            {choices.map((ans: string, i: number) => {
              const label = String.fromCharCode(65 + i)
              const correct =
                selectedAnswer.includes(ans) && correctAnswers.includes(ans)
              const wrong =
                selectedAnswer.includes(ans) && !correctAnswers.includes(ans)

              return (
                <li
                  key={ans}
                  className={cn(
                    'border-border bg-answer-bg text-secondary-text mt-[13px] w-full rounded-2xl border p-4 text-[16px] font-normal transition-all duration-200 hover:scale-[1.02] hover:border-theme-color/50 sm:mt-[14px] sm:text-[17px] md:mt-[15px] md:w-[90%] md:text-[18px] md:font-semibold lg:mt-[16px]',
                    { 'border-success bg-success-light border': correct },
                    { 'border-danger bg-danger-light border': wrong },
                  )}
                >
                  <span className="mr-[14px]">{label}.</span>
                  {ans}
                </li>
              )
            })}
          </ul>
          {!isMatch && (
            <RightAnswer correctAnswers={correctAnswers} choices={choices} />
          )}
        </div>
      </div>
      <span
        className={cn('mt-[10px] mr-[10px] flex justify-end text-base font-medium md:mt-1 md:mr-0 md:inline', isMatch ? 'text-success' : 'text-danger')}
      >{`Score ${isMatch ? score : 0}`}</span>
    </div>
  )
}

export default ResultItem