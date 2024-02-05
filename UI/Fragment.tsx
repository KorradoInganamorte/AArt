type Props = {
    url: string
}

const Fragment = ({ url }: Props) => {
  return (
    <div className="flex items-center justify-center w-max h-min bg-dark-gray hover:bg-gray/60 rounded-[.5rem] ease-in-out transition-colors group">
        <img className="w-[32.8rem] h-[23.8rem] pb-[.6rem] rounded-[.5rem] group-hover:w-[36.3rem] group-hover:h-[26.3rem] group-hover:z-[1] transition-all" src={`/images/${url}`} alt="fragment from Anime" />
    </div>
  )
}

export default Fragment