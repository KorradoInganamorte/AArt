import CardFAQ from "@/components/card/CardFAQ"
import { poppinsMedium, robotoMedium } from "@/public/fonts"

const Page = () => {
  const clientList = [
    {
      image: "Warning",
      title: "Я нашел баг на сайте",
      description: "Если вы нашли баг на сайте или некоректную работу стилей, изображений, пишите в telegram нашему разработчику -  @istominPS.",
      time: true
    },
    {
      image: "Question",
      title: "У меня есть вопросы по сайту",
      description: "Если у вас возникли вопросы по работе сайта или его контенту, пишите в telegram нашему разработчику -  @istominPS.",
      time: true
    },
    {
      image: "ExclamationMark",
      title: "У меня есть предложения по улучшению",
      description: "Если вы у вас есть предложение по улучшению сайта, пишите в telegram нашему разработчику -  @istominPS.",
      time: true
    },
    {
      image: "Star",
      title: "Я хочу добавить свое аниме",
      description: "Если вы хотите добавить своё любимое аниме на наш сайт, пишите в telegram нашему разработчику -  @istominPS.",
      time: true
    },
  ]

  const developList = [
    {
      image: "Code",
      title: "Где найти исходный код",
      description: "Весь исходный код можно на GitHub",
      time: false
    },
    {
      image: "Code",
      title: "У меня есть предложения по улучшению кода",
      description: "Если у вас есть предложения по улучшению кода (скорость работы сайта, читаемость, производительность), пишите в telegram нашему разработчику",
      time: true
    },
    {
      image: "Warning",
      title: "Я нашел баг в коде",
      description: "Если вы нашли баг в исходном коде, пишите в telegram нашему разработчику -  @istominPS или же в GitHub",
      time: true
    },
  ]

  return (
      <div className="container_page">
        <h2 className={`${poppinsMedium} text-white text-5xl mb-[1.8rem]`}>FAQs</h2>
        <h3 className={`${robotoMedium} text-white text-3xl mb-[1.6rem]`}>Пользователям</h3>
        <div className="flex mb-[3.4rem]">
          {clientList.map((list, i) => (
            <CardFAQ key={i} image={list.image} title={list.title} description={list.description} time={list.time} />
          ))}
        </div>

        <h3 className={`${robotoMedium} text-white text-3xl mb-[1.6rem]`}>Разработчикам</h3>
        <div className="flex">
          {developList.map((list, i) => (
            <CardFAQ key={i} image={list.image} title={list.title} description={list.description} time={list.time} />
          ))}
        </div>
      </div>
  )
}

export default Page