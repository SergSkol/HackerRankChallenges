function gradingStudents(grades){
    //https://www.hackerrank.com/challenges/grading/problem
    var gradingStudents = [];
    grades.forEach((g) =>{
        if (g >= 38) {
            var next5 = 0;
            var r = 0;     
            for(let j=g;j<=g+4;j++) {
                r = j % 5;
                if (r == 0) {next5 = j}
            }
            if ((next5 - g) < 3) {gradingStudents.push(next5)}
            else gradingStudents.push(g);
        }
        else gradingStudents.push(g);
    })
    return gradingStudents;
}

function run_gradingStudents(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = gradingStudents(input_num_array);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}