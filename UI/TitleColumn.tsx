type Props = {
    title: string
}

const TitleColumn = ({ title }: Props) => {
  return (
      <p className="text-lg text-[#D7D7D7] mb-[2rem]">{title}:</p>
  )
}

export default TitleColumn