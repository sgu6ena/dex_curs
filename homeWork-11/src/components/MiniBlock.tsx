import TurnerName from "./TurnerName";
import React from "react";
import Logo from "./Logo";
import Score from "./Score";
import DateAndPlace from "./DateAndPlace";

const Data = require("../data");


const MiniBlock = (props: { id: number }) => {

    const data = Data.filter(item => props.id === item.id)[0]

    return (
        <div className={'block miniblock'}

        >
            <TurnerName text={data.name}/>
            <div className={'d-flex'}>
                <Logo name={data.commandFirst.name}
                      path={data.commandFirst.logo}/>
                <Score C1Score={data.commandFirst.score} C2Score={data.commandSecond.score}/>
                <Logo name={data.commandSecond.name}
                      path={data.commandSecond.logo}/>
            </div>
            <div className={'d-flex'}>
                <DateAndPlace date={data.date} place={data.place}/>
                <a href="#" className={'btn-light arrow'} title={"перейти к описанию матча"}></a>
            </div>


        </div>
    );
};

export default MiniBlock;