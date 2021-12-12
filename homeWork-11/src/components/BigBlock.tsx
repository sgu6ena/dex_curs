import TurnerName from "./TurnerName";
import React from "react";
import Logo from "./Logo";
import Timer from "./Timer";
import DateAndPlace from "./DateAndPlace";
import Rates from "./Rates";

const Data = require("../data");

const BigBlock = ({id}: { id: number }) => {

    const data = Data.filter(item => id === item.id)[0]

    return (

            <div className={'block bigblock'}>
                <TurnerName text={data.name}/>
                <div className={'d-flex'}>
                    <Logo name='Спартак' path={'https://upload.wikimedia.org/wikipedia/ru/8/83/Spartak_logo_2013.png'}/>
                    <Timer date={data.date}/>
                    <Logo name='Локомотив' path={'https://upload.wikimedia.org/wikipedia/ru/c/c5/FC_Lokomotiv.png'}/>
                </div>
                <div className={'d-flex flex-wrap'}>
                    <DateAndPlace date={data.date} place={data.place}/>
                    <Rates coefficients={data.coefficients}/>
                    <div className={'btn-wrapper'}>
                        <button className={'btn bilet'} onClick={()=>alert('А все уже все, а надо было раньше')}> Купить билет </button>
                    </div>

                </div><button className={'watch'} onClick={()=>alert('Данная трансляция недоступна в вашем регионе')}>Смотреть трансляцию матча</button>
            </div>


    );
};


export default BigBlock;