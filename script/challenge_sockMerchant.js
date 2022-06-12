function sockMerchant(n, ar){
    //https://www.hackerrank.com/challenges/sock-Merchant/problem
    var ncol = 0;
    var npairs = 0;
    var prevs = null;
    ar.sort();
    ar.forEach((s) =>{
        if (prevs == null) { //first
            ncol++;
        } else if (s == prevs) { //same color
            ncol++;    
        } else { //next col
            var p = Math.floor(ncol / 2);
            npairs = npairs + p;
            ncol = 1;
        }
        prevs = s;
    })
    var p = Math.floor(ncol / 2);
    npairs = npairs + p;
    return npairs;
}

function run_sockMerchant(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = sockMerchant(input_num_array.lenght, input_num_array);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}