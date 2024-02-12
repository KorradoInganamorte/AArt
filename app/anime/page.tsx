import dynamic from "next/dynamic"

const FilterBtn = dynamic(() => import("@/UI/button/FilterBtn"))
const Card = dynamic(() => import("@/components/card/Card"))

const page = () => {
  const lists = ["Все", "В тренде", "Новые", "Классические"]

  return (
    <div className="container_page">
      <div className="mb-[1.2rem] mt-[1.2rem]">
        <FilterBtn lists={lists} />
      </div>

      <Card></Card>
    </div>
  )
}

export default page