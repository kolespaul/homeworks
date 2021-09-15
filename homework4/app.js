// Task #1

function concatStrings(strOne, separator) {
    let result = strOne.split();

    return function concatStringsTwo(strTwo) {
        if (typeof strTwo === 'string' || strTwo === '') {
            result = [...result, strTwo];
            return concatStringsTwo;
        } else if (typeof separator === 'string' || separator === '') {
            let a = result.join(separator);
            return a;
        } else {
            let a = result.join('');
            return a;
        }
    };

}



// Task #2

class Calculator {
    constructor(a, b) {
        if(typeof a !== 'number' || typeof b !== 'number' || arguments.length !== 2) {
            throw new Error('Error');
        }

        this.a = a;
        this.b = b;
        this.setX = this.setX.bind(this);
        this.setY = this.setY.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    setX(a) {
        if(typeof a !== 'number' || a === undefined) {
            throw new Error('Error');
        }
        this.a = a;
    }
    setY(b) {
        if(typeof b !== 'number' || b === undefined) {
            throw new Error('Error');
        }
        this.b = b;
    }
    logSum() {
        let sum = this.a + this.b;
        console.log(sum);
    }
    logMul() {
        let mul = this.a * this.b;
        console.log(mul);
    }
    logSub() {
        let sub = this.a - this.b;
        console.log(sub);
    }
    logDiv() {
        if(this.b === 0) {
            throw new Error('Error');
        }
        let div = this.a / this.b;
        console.log(div);
    }
}