import Link from "next/link"

import { robotoMedium } from "@/public/fonts"

const Page = () => {
  return (
    <>
        <div className="container_page h-[100vh]">
            <p className={`${robotoMedium} text-2xl text-white mt-[2.8rem] mb-[1.6rem]`}>Пользователям:</p>
            <section>
                <p className="text-2xl text-white mb-[1.2rem]">- Если вы хотите добавить своё любимое аниме на наш сайт, пишите в telegram нашему разработчику -  <Link className="text-blue" href={"https://t.me/authorDEV"}>Telegram</Link></p>
                <p className="text-2xl text-white mb-[1.2rem]">- Если у вас возникли вопросы касаемо работы и устройства сайта, пишите в telegram нашему разработчику -  <Link className="text-blue" href={"https://t.me/authorDEV"}>Telegram</Link></p>
                <p className="text-2xl text-white mb-[1.2rem]">- Если вы нашли баг на сайте или некоректную работу стилей, изображений, пишите в telegram нашему разработчику -  <Link className="text-blue" href={"https://t.me/authorDEV"}>Telegram</Link></p>
                <p className="text-2xl text-white">- Если вы у вас есть предложение по улучшению работы сайта и/или дизайна, пишите в telegram нашему разработчику -  <Link className="text-blue" href={"https://t.me/authorDEV"}>Telegram</Link></p>
            </section>

            <p className={`${robotoMedium} text-2xl text-white mt-[2.8rem] mb-[1.6rem]`}>Разработчикам:</p>
            <section>
                <p className="text-2xl text-white mb-[1.2rem]">- Весь исходный код можно на GitHub - <Link className="text-blue" href={"https://github.com/KorradoInganamorte/AArt"}>GitHub</Link></p>
                <p className="text-2xl text-white mb-[1.2rem]">- Если у вас есть предложения по улучшению кода (скорость работы сайта, читаемость, производительность), пишите в telegram нашему разработчику - <Link className="text-blue" href={"https://t.me/authorDEV"}>Telegram</Link> или же в GitHub репозитория - <Link className="text-blue" href={"https://github.com/KorradoInganamorte/AArt"}>GitHub</Link></p>
                <p className="text-2xl text-white mb-[1.2rem]">- Если вы нашли баг в исходном коде, пишите в telegram нашему разработчику - <Link className="text-blue" href={"https://t.me/authorDEV"}>Telegram</Link> или же в GitHub репозитория - <Link className="text-blue" href={"https://github.com/KorradoInganamorte/AArt"}>GitHub</Link></p>
            </section>
        </div>
    </>
  )
}

export default Page