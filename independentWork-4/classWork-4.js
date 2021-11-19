// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";

setTimeout(() => {
    console.log("request...");
    const responceData = {
        server: "aws",
        port: 8081,
        status: "working",
        modified: false
    };
    setTimeout(() => {
        responceData.modified = true;
        console.log("Data recived...", responceData);
    }, 2000);
}, 2000);

const promice = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("request...");
        const responceData = {
            server: "aws",
            port: 2021,
            status: "working",
            modified: false
        };
        resolve(responceData);
    }, 2000);
});

promice
    .then((data) => {
        setTimeout(() => {
            data.modified = true;
            console.log("Data recived...", data);
        }, 2000);
    })
    .catch((e) => console.error(e));

const delay = (ms) => {
    return new Promise((res) => {
        console.log("start delay...");
        return setTimeout(() => res(), ms);
    });
};

// delay(5000).then(()=>console.log('ok'));

// Promise.all([delay(5000),delay(8000)])
const url = "https://jsonplaceholder.typicode.com/todos";
const requestURl = "https://jsonplaceholder.typicode.com/users";

async function fetchData(url) {
    try {
        await delay(3000);
        console.log("...end delay");
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        return `ошибка ${e.name}`;
    }
}
fetchData(requestURl).then(console.log);

const fetchDataNew = (url) => {
    return delay(2000)
        .then(() => fetch(url))
        .then((response) => response.json());
};

fetchDataNew(url).then((data) => console.log(data));
const getUsers = (url, body={}) => {
    return fetch(url, body).then((response) => response.json());
};

const user = {
    id: 12,
    name: "Natalja Issar",
    username: "sgu6ena"
};
getUsers(requestURl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
}).then((data) => console.log(data));

getUsers(requestURl).then((data) => console.log(data));
