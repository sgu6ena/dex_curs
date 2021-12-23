import "./styles.css";
import Input from "./components/Input";
import Result from "./components/Result";
import { Provider, useSelector } from "react-redux";
import store from "./components/store";

export default function App() {
  const Log = () => {
    const value = useSelector((state) => state);
    return value.results.map((item, idx) => <Result text={item} key={idx} />);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Result text=" Корпорация Майкрософт (Microsoft Corporation). Все права защищены." />
        <br />
        <Log />
        <Input />
      </div>
    </Provider>
  );
}
