function bonAppetit(bill, k, b) {
    // https://www.hackerrank.com/challenges/bon-appetit
    var res = "";
    var a_sum = 0;
    for(let i = 0; i < bill.length; i++){
        if(i !== k){a_sum = a_sum + bill[i]}
    }
    var diff = b - a_sum/2;
    if(diff == 0){res = "Bon Appetit"}
    else{res = diff.toString()}

    //process.stdout.write(res);

    return res;
}

function run_bonAppetit(input, input_k, input_b) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));
    var k = parseInt(input_k);
    var b = parseInt(input_b);

    var result = bonAppetit(input_num_array, k, b);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}