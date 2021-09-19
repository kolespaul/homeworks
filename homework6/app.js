// Task #1

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
});

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
});
  
// Ответ: выведется 1)Listener 1, 2)Microtask 1, 3) Listener 2, 4) Microtask 2
// который вызовет 2 разных события,,,,,,,,,,,
// Объяснение: Когда пользователь кликнет по кнопке button сработает сначала 
// первый обработчик события, который выведет в консоль task "console.log('Listener 1');", 
// а после микротаск в виде "console.log('Microtask 1'));" из промиса. 



// Task #2

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
});

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
});

button.click();

// Ответ: выведется 1)Listener 1, 2)Listener 2, 3) Microtask 1, 4) Microtask 2

// Объяснение: Когда пользователь кликнет по кнопке button сработает обработчик 
// события, который вызовет 1 событие