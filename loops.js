function whileLoop(n){
    while(n > 0){
        console.log(--n)
    }
    return "done"
}

function doWhileLoop(array){
    i = 0
    function maybeTrue() {
        return Math.random() >= 0.5
    }
    do{
        array.pop()

    }while(array.length === 0 || maybeTrue())
    return array
}

function forLoop(array){
    for(var i = 0 ; i < 25; i ++){
        array[i] = i === 0 ? "I am 1 strange loop.":`I am ${i+1} strange loops.`}
        return array
    }
