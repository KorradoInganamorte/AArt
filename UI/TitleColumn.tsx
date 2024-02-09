type Props = {
    title: string
    mb?: string
}

const TitleColumn = ({ title, mb }: Props) => {
  return (
      <p className={`text-2xl text-gray-item-card mb-[${mb}rem]`}>{title}:</p>
  )
}

export default TitleColumn