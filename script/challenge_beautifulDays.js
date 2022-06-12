function beautifulDays(i, j, k){
    // https://www.hackerrank.com/challenges/beautiful-days-at-the-movies
    var days = 0;
    for (let day = i; day <= j; day++){
	//get reversed(i)
	var str_day = day.toString();
	var rev_str_day = "";
        var len = str_day.length - 1;
	for (let p = len; p>=0; p--){
	    var c = str_day.charAt(p);
	    rev_str_day = rev_str_day + c;
        }
	var rev_day = parseInt(rev_str_day, 10);
	var r = Math.abs(rev_day - day) % k;
	if (r == 0){days++}
    }
    return days;
}

function run_beautifulDays(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = beautifulDays(input_num_array[0], input_num_array[1], input_num_array[2]);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}