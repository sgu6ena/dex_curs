import React, { FC, useEffect } from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
    isLoading: boolean;
    content: T;
};

const useProjects = (): loadedData<IProject[]> => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [content, setContent] = React.useState([]);

    function getProjects(): void {
        setIsLoading(true);
        fetchProjects()
            .then((response: IProject[]) => setContent(response))
            .then(() => setIsLoading(false))
    }

    useEffect(() => {
        getProjects();
    }, [content]);

    return {
        isLoading,
        content
    };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
    remove: (todoId: number) => void;
};


const useTodos = (projectId: number | null): deletableLoadedTata<ITodo[]> => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [content, setContent] = React.useState([]);

    function getTodos(): void {
        setIsLoading(true);
        fetchTotos(projectId)
            .then((response) =>setContent(response))
            .then(() => setIsLoading(false))
    }

    const deletableLoadedTata = (id: number) => {
        setContent((content) => content.filter((todo) => todo.id !== id));
    };

    useEffect(() => {
        getTodos();
    }, [projectId]);

    return {
        isLoading,
        content,
        remove: deletableLoadedTata
    };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
    onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
    console.log("FilterComponent render");
    const inputEl = React.useRef("");
    return (
        <div>
            Фильтр:&nbsp;
            <input ref={inputEl} type="text" />
            <button onClick={() => onFilter(inputEl.current.value)}>поиск</button>
        </div>
    );
};

export { useProjects, useTodos, FilterComponent };