function generateInput(n, len_key, len_num){
    var res = n+"\n";
    var keys = [];
    var nums = [];
    var s = "";
    var r = 0;
    for(let i=0;i<n;i++){
        s = "";
        for(let j=0;j<len_key;j++){
            r = Math.floor(Math.random()*26);
            s=s+String.fromCharCode(r+97);
        }
        r = Math.floor(Math.random()*len_num);
        keys.push(s);
        nums.push(r);  
    }
    for(let i=0;i<n;i++){
        res = res + keys[i]+" "+nums[i] +"\n";
    }

    for(let i=0;i<n;i++){
        s = "";
        for(let j=0;j<len_key;j++){
            r = Math.floor(Math.random()*26);
            s=s+String.fromCharCode(r+97);
        }
        res = res + s + "\n";
    }
    return res;
} 

function processData(input){
    // n = 3; dic = 1..n; out = n+1..2n
    // Option 1
    var res = "";
    var input_arr = input.split(/[\n\r\s]+/);//[3, "a", 10, "b", 15, "c", 20, "a", "b", "c"]
    var n = parseInt(input_arr[0]);
    for(let i=0;i<n;i++){
        var key = input_arr[i+n*2+1];
        var pos = input_arr.indexOf(key);

        if(pos > n*2){res = "Not found"}
        else{res = key+"="+input_arr[pos+1]}

        console.log(res);
    } 

    /* Option 2
    //var input_arr = input.split(/[\n\r]+/);//[3, "a 10", "b 15", "c 20", "a", "b", "c"]
    var n = parseInt(input_arr[0]);
    var keys = [];
    var nums = [];

    for(let i=0;i<n;i++){
        var e = input_arr[i+1].split(" ");
        keys[i] = e[0];
        nums[i] = e[1];
    }
        
    for(let i=0;i<n;i++){
        var key = input_arr[i+n+1];
        var pos = keys.indexOf(key);

        if(pos == -1){res = "Not found"}
        else{res = key+"="+nums[pos]}

        console.log(res);
    } 
    */
} 

var inp_str = `3
a 1000
b 30
c 1212
a
d
b
`;

const len_key = 3;
const len_num = 1000000;
var inp_str = generateInput(100000, len_key, len_num);

//console.log(inp_str);

processData(inp_str);

//search value by key in 2D array [key, value]
/*
var toSearch = "c";
var arr2d = [["a",1],["b",2],["c",3]];
var arr = arr2d.flat();
var i = arr.indexOf(toSearch);
var res = arr[i+1];
console.log(res);
*/