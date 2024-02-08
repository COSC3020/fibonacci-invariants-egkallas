function fib(n) {

    if(n === 0){
        return [0];
    }
    else if(n === 1){
        return [0, 1];
    }
    else{
        fibArray = fib(n - 1);
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        return fibArray;
    }

}
