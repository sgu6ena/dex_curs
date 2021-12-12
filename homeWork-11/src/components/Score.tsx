const Score = ({C1Score, C2Score}:{C1Score:number|null; C2Score:number|null}) => {
    return (
        <div className={'score'} style={{
            color: C1Score && C2Score ? '#CC122D' : 'grey',
            background: C1Score && C2Score ?'white':"transparent",
        }}>
            { C1Score && C2Score ? `${C1Score} : ${C2Score}` : '-:-'}
        </div>
    )
}

export default Score;