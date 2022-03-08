//Write a function redundantReturn 
//that takes in a string str 
//returns a function that returns str

function redundantReturn(str){
    let myVar = `${str}`
    function newFunc() {
        console.log("myVar", myVar);
    }
    return newFunc
}

const myCall = redundantReturn ("message")
myCall ();


