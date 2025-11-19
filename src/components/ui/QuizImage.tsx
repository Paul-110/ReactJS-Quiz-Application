import { FC } from 'react'

interface QuizImageProps {
  image: string
}

const QuizImage: FC<QuizImageProps> = ({ image }) => (
  <img
    src={image}
    alt="picture quiz"
    className="shadow-card mb-5 w-full rounded-[10px] object-cover"
  />
)

export default QuizImage
