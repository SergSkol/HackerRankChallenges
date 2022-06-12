function utopianTree(n) {
    // Write your code here
    var h = 0;
    for(let i=0;i<n+1;i++){
        if(i%2==0){h++}//summer
        else{h=h*2}//spring
    }
    return h;
}

var res = utopianTree(5);
console.log(res);