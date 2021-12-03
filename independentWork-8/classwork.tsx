import React, { ReactNode } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent

class ClassComponent extends React.Component<{ text: string }> {
    render() {
        return <div>{this.props.text}</div>;
    }
}
//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent
class FuncComponent extends React.Component<{ text: string }> {
    render() {
        return <div>{this.props.text}</div>;
    }
}
//TODO: Перепешите компоненты выше на prop text
// в text передайте старые значения

//TODO: Создайте компонент ConditionalComponent
// который показыать GoogleLogoComponent по значению prop'a flag
class ConditionalComponent extends React.Component<{ flag: boolean }> {
    render() {
        return <div>{this.props.flag ? <GoogleLogoComponent /> : ""}</div>;
    }
}
//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick
class ComponentWithFunction extends React.Component<{
    func: () => void;
    text: string;
}> {
    render() {
        return <button onClick={this.props.func}>{this.props.text}</button>;
    }
}
//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div
class ComponentWithChild extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent

const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
    render() {
        return "123";
    }
}

class ComponentWithRenders extends React.Component<{
    func: React.ComponentType;
    child: React.ComponentType;
}> {
    render() {
        return (
            <div>
                <this.props.func />
                {<this.props.child />}
            </div>
        );
    }
}
//TODO: Добавьте component RenderAll
// Добавьте prop timer и выведите его

export class RenderAll extends React.Component {
    render() {
        return [
            <ClassComponent text="ClassComponent" />,
            <FuncComponent text="FuncComponent" />,
            <ConditionalComponent flag={true} />,
            <ComponentWithFunction func={func} text="click" />,
            <ComponentWithChild>
                <ComponentWithFunction func={func} text="click again" />
            </ComponentWithChild>,
            <ComponentWithRenders func={renderFunc} child={TestComponent} />
        ];
    }
}
