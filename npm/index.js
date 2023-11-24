// Function that returns a promise to simulate an asynchronous operation
function asyncOperation(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve(message);
            } else {
                reject("Error: Operation failed");
            }
        }, delay);
    });
}

asyncOperation("First Operation", 1000)
    .then(result => {
        console.log(result);
        return asyncOperation("Second Operation", 1500);
    })
    .then(result => {
        console.log(result);
        return asyncOperation("Third Operation", 1200);
    })
    .then(result => {
        console.log(result);
    
    })
    .catch(error => {
        console.error(error);
    });
