function minimumDistances(a){
    // https://www.hackerrank.com/challenges/minimum-distances
    var result = 0;
    var dic = [];
    var alen = 0;
    a.forEach(element=>{
        var tmp = dic.includes(element);
        if (!tmp){dic.push(element)}
        alen++;
    })
    
    dic.forEach(element=>{
        var p1 = 0;
        var p2 = 0;
        for(let i=0; i<alen; i++){
            if(a[i] == element){
                if(p1 == 0){p1=i+1}
                else {p2=i+1}
            }
        }
        if (p2!==0){
            if (result==0){result = p2-p1}
            else {result = Math.min(result, p2-p1)}
        }
    })
    if(result ==0){result=-1}
    
    return result;
}

function run_minimumDistances(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = minimumDistances(input_num_array);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}