// Task #1

function makeObjectDeepCopy(obj) {
    let clone = {};

    for (let key in obj) {
        clone[key] = obj[key];

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            clone[key] = makeObjectDeepCopy(clone[key]);
        }
    }
    return clone;
}



// Task #2

function selectFromInterval(arr, firstNum, lastNum) {
    if (!Array.isArray(arr) || arr.find(item => isNaN(item))) {
        throw new Error('Ошибка!');
    }
    if (isNaN(firstNum) || isNaN(lastNum)) {
        throw new Error('Ошибка!');
    }

    let resultArr = [];

    if (firstNum < lastNum) {
        resultArr = arr.slice(firstNum, lastNum + 1);
    } else {
        resultArr = arr.slice(lastNum, firstNum + 1);
        resultArr = resultArr.reverse();
    }

    return resultArr;
}



// Task #3

const myIterable = {
    from: 1,
    to: 4,

    [Symbol.iterator]() {
        this.current = this.from;
        this.last = this.to;

        if (this.last < this.current) {
            throw new Error('Ошибка!');
        }
        if (this.current == null || this.last == null || isNaN(this.current) || isNaN(this.last)) {
            throw new Error('Ошибка!');
        }

        return this;
    },

    next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
    }
};
