let promise = new Promise( (resolve, reject) => {
    console.log('1');
    setTimeout(() => {
        resolve('result')
       
    }, 3000);
})


promise
    .then(
    (result) => {

        console.log('2');

        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(result + '!')
               
            }, 2000);
        })
    })   
    .then(
        (result) => {
        console.log('3');
        
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(result + '?')
               
            }, 1000);
        })
    })
    .then(
        (result) => {
            console.log(result);
    })  
