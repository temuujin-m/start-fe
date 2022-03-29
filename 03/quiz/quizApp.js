//console.log("Average Value of Array");
//
//var count = [10, 20, 30, 40, 50, 60 , 70, 100];
//var sum = 0; 
//var avg = 0;
//
//for (let i = 0; i < count.length; i++ ){
//    sum = sum + count[i];
//}
//
//avg = sum / count.length;
//
//console.log(avg);


//console.log("Multiplication Table using For Loop");
//
//var i = 1;
//for (let i = 1; i <= 9; i++){
//    if(i <= 9){
//        console.log("~~~~~~~~~~~~~");
//        for (let j = 1; j <= 9; j++){
//            console.log(i + " * " + j + " = " + (i*j));
//        }
//    }
//}

//console.log("Multiplication Table using Function with For Loop");
//
//function Multiplication(i, j){
//    for (i ; i <= 9; i++){
//        if(i <= 9){
//            console.log("~~~~~~~~~~");
//            for(let j = 1; j <= 9; j++){
//                console.log(i + " * " + j + " = " + (i*j));
//            }
//        }
//    }
//}
//
//Multiplication(1);


//


//console.log("Properties and Method");
//
//const studentInfo = {
//    name: 'Temuujin',
//    height: 169,
//    weight: 62
//};
//
//Object.assign(studentInfo, {age: 24});
//
//console.log(studentInfo);


console.log("Sum of numbers with window.promt");

let number, result = 0;
for (let i = 1; i < 6; i++){
    number = Number(prompt("Please enter your choice of numbers: "));
    result += number;
}
alert("Sum of your numbers is", result);
