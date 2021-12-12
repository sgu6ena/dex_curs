const Rates = (props) => {
    const c1=()=>{
        alert(`Вы поставили 1 биткоин на ПОБЕДУ ПЕРВОЙ команды с коэффициетом ${props.coefficients[0]}`);
    }
    const c2=()=>{
        alert(`Вы поставили 1 биткоин на победу ВТОРОЙ команды с коэффициетом ${props.coefficients[2]}`);
    }
    const x=()=>{
        alert(`Вы поставили 1 биткоин на НИЧЬЮ команды с коэффициетом ${props.coefficients[0]}`);
    }
    return (
        <div className={'rates'}>
            <div>
                <button className={'rates-coef'} onClick={(() => c1())}
                        title='победа 1 команды'
                > {props.coefficients[0]}
                </button>
                П1
            </div>
            <div>
                <button className={'rates-coef'} onClick={(() => x())}
                        title='ничья'
                > {props.coefficients[1]}
                </button>
                Х
            </div>
            <div>
                <button className={'rates-coef'} style={{background: '#27AF11'}}
                        onClick={(() => c2())}  title='победа 2 команды'
                > {props.coefficients[2]}
                </button>
                П2
            </div>
        </div>
    )
}

export default Rates;