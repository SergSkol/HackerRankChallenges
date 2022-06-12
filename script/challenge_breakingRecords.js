function breakingRecords(scores){
    // https://www.hackerrank.com/challenges/breaking-best-and-worst-records
    var result = [];
    var broke_up = 0;
    var broke_down = 0;
    var max_score = scores[0];
    var min_score = scores[0];
    scores.forEach(score=>{
        if(score>max_score){broke_up++;max_score=score}
        if(score<min_score){broke_down++;min_score=score}
    })
    result[0] = broke_up;
    result[1] = broke_down;
    return result;
}

function run_breakingRecords(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = breakingRecords(input_num_array);

    console.log(result);
    var result_str = result.join(" ");
    var output = input+" : "+result_str;
    document.getElementById('result').innerHTML = output;
}