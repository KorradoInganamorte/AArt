const SkeletonFilmBlock = () => {
  return (
    <div className="film-block w-[82vw] mx-auto flex bg-black rounded-[1rem] px-[1.4rem] py-[1.4rem]">

      <div className="w-[33.6rem] h-[45.5rem] p-[.6rem] bg-gray-hover-card mr-[3.2rem] rounded-[.5rem]"></div>

      <div className="flex flex-col justify-between w-[65%]">
        
        <div className="mb-[2.4rem]">
          <div className="w-[32.5rem] h-[3.4rem] bg-gray-hover-card mb-[1.4rem] rounded-[.2rem]"></div>
          <div className="w-[100%] h-[25.6rem] bg-gray-hover-card rounded-[.5rem] mb-[1.2rem]"></div>
          <div className="w-[21.6rem] h-[2rem] bg-gray-hover-card rounded-[.2rem] mb-[1rem]"></div>
          <div className="w-[21.6rem] h-[2rem] bg-gray-hover-card rounded-[.2rem]"></div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
              <div className="w-[28.4rem] h-[2.4rem] bg-gray-hover-card rounded-[.2rem] mb-[1.6rem]"></div>
              <div className="w-[28.4rem] h-[2.4rem] bg-gray-hover-card rounded-[.2rem]"></div>
          </div>
          <div className="w-[22rem] h-[4.6rem] bg-gray-hover-card rounded-[.5rem]"></div>
        </div>

      </div>

    </div>
  )
}

export default SkeletonFilmBlock