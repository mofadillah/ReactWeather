function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === "number" && typeof b === "number") {
            var sum = parseInt(a) + parseInt(b);
            resolve(sum);
        } else {
            reject('some variable are not number');
        }
    })
}

addPromise(10, 2).then(
    function (sum) {
        console.log('Success', sum);
    },
    function (err) {
        console.log('error', err);
    });