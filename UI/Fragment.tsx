type Props = {
    url: string
}

const Fragment = ({ url }: Props) => {
  return (
    <div className="flex items-center justify-center w-max h-min bg-gray rounded-[.5rem] last:mb-[15.8rem]">
        <img className="w-[30.9rem] h-[23.2rem] py-[.8rem] px-[1rem]" src={`/images/${url}`} alt="fragment from Anime" />
    </div>
  )
}

export default Fragment