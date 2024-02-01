"use client"

import FilterBtn from "@/UI/FilterBtn"
import Card from "@/components/Card"

const PhoneComponent = () => {
  return (
    <div>
      <h1>VerticalPhoneComponent</h1>
    </div>
  );
};

const VerticalPhoneComponent = () => {
  return (
    <div>
      <h1>VerticalPhoneComponent</h1>
    </div>
  );
};

const HorizontalPhoneComponent = () => {
  return (
    <div>
      <h1>HorizontalPhoneComponent</h1>
    </div>
  );
};

const TabletComponent = () => {
  return (
    <div>
      <h1>TabletComponent</h1>
    </div>
  );
};

const LaptopSMComponent = () => {
  return (
    <div>
      <h1>LaptopSMComponent</h1>
    </div>
  );
};

const LaptopComponent = () => {
  return (
    <div>
      <h1>LaptopComponent</h1>
    </div>
  );
};

const MonitorComponent = () => {
  return (
    <div>
      <h1>MonitorComponent</h1>
    </div>
  );
};

const ScreenComponent = () => {
  return (
    <div>
      <h1>ScreenComponent</h1>
    </div>
  );
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export default function Home() {
  const lists = ["Все", "В тренде", "Новые"]

  const animePannels = [
    {
    imgSource: "berserk.webp",
    textPannels: "Берсерк (1997-1998)"
  }, {
    imgSource: "evangelion.jpg",
    textPannels: "Евангелион (1995-1996)"
  }, {
    imgSource: "evangelion death.jpg",
    textPannels: "Евангелион: Смерть и Перерождение (1997)" 
  }, {
    imgSource: "the end of evangelion.jpg",
    textPannels: "Конец Евангелиона (1997)" 
  }, {
    imgSource: "evangelion 1.11.webp",
    textPannels: "Евангелион 1.11: Ты (не) один (2007)" 
  }, {
    imgSource: "evangelion 2.22.webp",
    textPannels: "Евангелион 2.22: Ты (не) пройдешь (2009)" 
  }, {
    imgSource: "evangelion 3.33.webp",
    textPannels: "Евангелион 3.33: Ты (не) исправишь (2012)" 
  }, {
    imgSource: "evangelion 4.44.webp",
    textPannels: "Евангелион 3.0 + 1.01: Как-то раз (2021)" 
  },
]

  return (
    <div className="container_page">
      <div className="mb-[.8rem] verticalphone:mb-[2rem] mt-[1.2rem]"><FilterBtn lists={lists} /></div>

      <div className="film-layout">
        {animePannels.map((pannel, i) => (
          <Card id={i} img={pannel.imgSource} text={pannel.textPannels} />
        ))}
      </div>

    </div>
  )
}
