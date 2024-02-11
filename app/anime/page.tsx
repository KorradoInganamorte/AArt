import FilterBtn from "@/UI/button/FilterBtn"
import Card from "@/components/card/Card"

const page = () => {
  const lists = ["Все", "В тренде", "Новые", "Классические"]

  return (
    <div className="container_page">
      <div className="mb-[1.2rem] mt-[1.2rem]"><FilterBtn lists={lists} /></div>
      <Card></Card>
    </div>
  )
}

export default page