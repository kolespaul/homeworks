// Task #1

Array.prototype.myFilter = function(callback, thisUnnArg) {

    let res = [];
    thisUnnArg = this;

    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisUnnArg, this[i], i)) {
            res.push(this[i]);
        }
    }

    return res;
};


// Task #2


function createDebounceFunction(f, ms) {
    let timeout;

    return function() {
        const fnCall = () => {f.apply(this, arguments)}

        clearTimeout(timeout);

        timeout = setTimeout(fnCall, ms);
    };
  
}




