Хуки позволяют определять и использовать состояние и другие возможности React без создания классов.

---
* **Основные хуки**
  * useState
  * useEffect
  * useContext
   

* **Дополнительные хуки**
  * useReducer
  * useCallback
  * useMemo
  * useRef
  * useImperativeHandle
  * useLayoutEffect
  * useDebugValue
---
  
* Хуки вызываются **только на верхнем уровне** (top-level) компонента. Они НЕ вызываются внутри циклов, условных конструкций, внутри стандартных функций javascript.
* Хуки можно вызывать **только из функциональных компонентов** React, либо из других хуков. Но их нельзя вызывать из классов-компонентов.

Функциональные компоненты можно определять как _обычные функции_:

```js
function ClickButtonHook(props){
const [count, setCount] = React.useState(0);

    const press= () => setCount(count + props.increment);
    return <div>
            <button onClick={press}>Count</button>
            <div>Counter: {count}<br /> Increment: {props.increment}</div>
    </div>;
}
```

Либо в виде _стрелочных функций_:
```js
const ClickButtonHook = (props)=>{
const [count, setCount] = React.useState(0);

    const press= () => setCount(count + props.increment);
    return <div>
            <button onClick={press}>Count</button>
            <div>Counter: {count}<br /> Increment: {props.increment}</div>
    </div>;
}
```

---
### Как методы жизненного цикла соответствуют хукам
* `constructor` Функциональному компоненту не нужен конструктор. Вы можете инициализировать состояние, используя вызов useState. Если вычисления состояния затратны, вы можете передать функцию в useState.
* `getDerivedStateFromProps` Запланировать обновление при рендере.
* `shouldComponentUpdate` - React.memo 
* `render` -  Это тело функционального компонента.
* `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` - Хук useEffect заменяет все их комбинации (включая более редкие случаи).
* `getSnapshotBeforeUpdate`, `componentDidCatch` и `getDerivedStateFromError` - В данный момент не существует хуков-аналогов для этих методов, но они будут скоро добавлены.

___

## useState
 предназначен для управления состоянием компонентов
```js
const [count, setCount] = useState(0);
const [текущееЗначение, функцияДляОбновлениЗначения] = useState(начальноеЗначение);
```

```js
<button onClick ={ () => setCount(count+1) }> +1 </button>
```
___

## useEffect

Предназначен для перехвата различного рода изменений в компонентах, которые нельзя обработать внутри компонентов
Запускает эффекты **после КАЖДОГО рендера**, включая первый 


```js
 const [count, setCount] = useState(0);
 useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
 });
```

Некоторым эффектам нужен сброс, поэтому они возвращают соответствующую функцию.


---
## useContext 

Позволяет подписываться на контекст React   
Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение контекста для этого контекста. Текущее значение контекста определяется пропом value ближайшего <MyContext.Provider> над вызывающим компонентом в дереве.

Когда ближайший `<MyContext.Provider>` над компонентом обновляется, этот хук вызовет повторный рендер с последним значением контекста, переданным этому провайдеру `MyContext`. Даже если родительский компонент использует `React.memo` или реализует `shouldComponentUpdate`, то повторный рендер будет выполняться, начиная c компонента, использующего `useContext`.

---

 * **useReducer** -  позволяет управлять локальным состоянием сложных компонентов

 * **useCallback** -  позволяет управлять функциями обратного вызова

 * **useMemo** -  предназначен для управления мемоизированными (грубо говоря кэшированными) значениями

 * **useRef** -  возвращать некоторое изменяемое значение, например, ссылку на html-элементы DOM, которыми затем можно управлять в коде JavaScript

 * **useImperativeHandle** -  настраивает объект, который передается родительскому компоненту при использовании ref

 * **useLayoutEffect** -  аналогичен хуку useEffect(), но вызывается синхронно после всех изменений в структуре DOM

 * **useDebugValue** -  предназначен для отображения некоторого значения в целях отладки

