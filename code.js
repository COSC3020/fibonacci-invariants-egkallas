function fib(n) {

    if(n === 0){
        return 0;
    }
    else if(n === 1){
        return 1;
    }
    else{
        return fib(n-1) + fib(n-2);
    }

}

/*I realize this is supposed to return an array of the fib numbers, but I'm not sure how to do this recursively.
Can you give me any suggestions?*/
