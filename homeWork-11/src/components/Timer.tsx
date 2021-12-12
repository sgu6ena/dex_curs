import React, { useState, useEffect } from 'react';

const Timer = ({date}:{date:number}) => {
    const d:Date = new Date(date*1000);
    const [hours,setHours] = useState( Math.floor((d-new Date())/(1000*60*60)));
    const [minutes, setMinutes] = useState( Math.floor((d-new Date()-hours*60*60*1000)/(1000*60)));
    const [seconds,setSeconds] = useState(Math.floor((d-new Date()-hours*60*60*1000-minutes*60*1000 )/(1000)));

    setTimeout(()=>setSeconds(Math.floor((d-new Date()-hours*60*60*1000-minutes*60*1000 )/(1000))) ,1000)
    useEffect (() => {

        setHours( Math.floor((d-new Date())/(1000*60*60)));
        setMinutes(Math.floor((d-new Date()-hours*60*60*1000)/(1000*60)));
        setSeconds(Math.floor((d-new Date()-hours*60*60*1000-minutes*60*1000 )/(1000)));
    },[seconds,hours, minutes])

    return (
        <div className={'timer'}>
            {hours<10?'0':''}{hours} : {minutes<10?'0':''}{minutes} : {seconds<10?'0':''}{seconds}
        </div>
    )
}

export default Timer;