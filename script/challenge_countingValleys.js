function countingValleys(steps, path) {
    // https://www.hackerrank.com/challenges/counting-Valleys/problem
    var level = 0;
    var nVal = 0;
    var inVal = 0;
    for (let i=0;i<steps;i++){	
        if (path[i] == "D") {level--} 
	else {level++}
  
	if (inVal<0 && level == 0){
	    nVal++;
	    inVal = 0;
	}
	if (inVal>0 && level == 0){
	    inVal = 0;
	}
 	if (inVal==0 && level<0){inVal = -1}
	if (inVal==0 && level>0){inVal = 1}     
    }
    return nVal;
}

function run_countingValleys(input) {
    var input_str_array = input.split("");

    var result = countingValleys(input.length, input);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}