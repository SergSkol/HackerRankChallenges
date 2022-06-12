function catAndMouse(x, y, z) {
    // https://www.hackerrank.com/challenges/cats-and-a-mouse
    var xz = Math.abs(x-z);
    var yz = Math.abs(y-z);
    var res = "";
    if(xz < yz){res = "Cat A"}
    else if (xz > yz){res = "Cat B"}
    else {res = "Mouse C"};

    return res;
}

function run_catAndMouse(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = catAndMouse(input_num_array[0], input_num_array[1], input_num_array[2]);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}