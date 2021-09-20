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

// Объяснение: JS проходится по коду сверху вниз, событие, которое объявлено выше в коде (обработчик события #1) выполнится первым. 
После нажатия на кнопку, в колл стек попадает функция обработчика события. 
Далее попадает promise события#1. 
Далее callback функция промиса #1 then() передаётся в WEB api и попадает в очередь micro tasks. 
Далее выполняется console.log (“listener 1”), он выводит в консоль сообщение и удаляется из стека вызовов. 
Далее стек вызовов очищается от promise.
Далее стек вызовов очищается от функции обработчика события.
Когда стек вызовов пуст - начинается обработка очереди micro task. 
В очереди находится коллбек промиса, он выполняется, выводит сообщение console.log(“microtask1”) и удаляется. 
Далее в колл стек попадает обработчик события#2, он отработает точно по такой же схеме. 



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

// Объяснение: Здесь будет другая ситуация. Функция button.click() служит для симуляции нажатия на кнопку, то есть обработчик события сработает не после клика на кнопку, а после вызова этой функции. 
Именно button.click() первой попадает в колл стек.
Далее в колл стек попадает функция обработчика события.
После в колл стек попадает promise события#1. 
Далее callback функция промиса then() передаётся в WEB api и попадает в очередь micro tasks.
Далее выполняется console.log (“listener1”), выводит в консоль сообщение и удаляется из стека вызовов. 
Далее стек вызовов очищается от promise.
Далее стек вызовов очищается от функции обработчика события.
Но! Функция button.click() не удаляется из колл стека, она еще не закончила исполнение. Так как стек вызовов  не пуст - выполнение micro task не произойдёт. В этом и будет отличие от первого случая.
Далее в колл стек попадает promise события#2 и выполнится.
Далее callback функция промиса then() передаётся в WEB api и попадает в очередь micro tasks.
Далее выполняется console.log (“listener2”), выводит в консоль сообщение и удаляется из стека вызовов. 
Далее стек вызовов очищается от promise.
Далее стек вызовов очищается от функции обработчика события.
Далее стек вызовов очищается от функции button.click().
Так как стек вызовов пуст - пришло время задач из очереди micro task, они выполняться в последовательности first in - first out. То есть таск, который пришёл в очередь первым - выполнится первым. Получаем console.log(“microtask1”) и после этого console.log(“microtask2”).
