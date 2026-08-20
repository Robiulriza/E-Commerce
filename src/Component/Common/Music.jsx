import React, { useEffect, useState } from "react";
import { countDownDateAndTime } from 'countdown-date-time';
import Speaker from '../../assets/Music.png'  
import Container from "./Container";
import Btn from "./Btn";

const Music = () => {
    const conduct_date = "2026-09-22 24:00:00";
  const [count, setCount] = useState({});

  useEffect(() => {
    setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown);
    }, 1000);
  }, []);
  return (
    <div className="mt-35">
      <Container className='relative'>
        <div>
          <img src={Speaker} alt="" />
        </div>
        <div className="flex items-center absolute top-73.75 left-13.5 gap-6">
          <div className="w-15.5 h-15.5 rounded-full bg-white flex flex-col justify-center items-center">  
            <h1 className="font-semibold">{count.days}</h1>
            <p className="text-[11px] leading-4.5">Days</p>
          </div>
          <div className="w-15.5 h-15.5 rounded-full bg-white flex flex-col justify-center items-center">  
            <h1 className="font-semibold">{count.hours}</h1>
            <p className="text-[11px] leading-4.5">Hours</p>
          </div>
          <div className="w-15.5 h-15.5 rounded-full bg-white flex flex-col justify-center items-center">  
            <h1 className="font-semibold">{count.minutes}</h1>
            <p className="text-[11px] leading-4.5">Minutes</p>
          </div>
          <div className="w-15.5 h-15.5 rounded-full bg-white flex flex-col justify-center items-center">  
            <h1 className="font-semibold">{count.seconds}</h1>
            <p className="text-[11px] leading-4.5">Seconds</p>
          </div>
        </div>
        <div>
          <Btn className="bg-[#00FF66]! absolute top-100 left-13.5 leading-6">Buy Now!</Btn>
        </div>

      </Container>
      
    </div>
  )
}

export default Music
