function getSmth(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('result');
        },1000)
    })
}

async function func(){
    console.log('1');
    let result = await getSmth();
    console.log('2');
    console.log(result);
}

func();