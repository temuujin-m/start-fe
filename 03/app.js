console.log('03');

//var isMan = true;
//
//if ('isMan'){
//    console.log('test');
//}


//var a = { x: 1 };
//var b = a;
//b.x = 2;
//console.log(a, b);

//var a = { x: 1 };
//var b = a;
//b.x = 2;
//console.log(a, b);


//call by value
//function byValue(count) {
//  count = count + 2;
//}
//var count = 3;
//byValue(count);
//console.log(count); //3


//var obj = {a:1, b:2};
//
//for (var prop in obj){
//    console.log(prop, obj[prop]);
//}


//function sum(x) {
//  var y = 1;
//  return x + y; //return 문이 없을경우 undefined반환
//}
//
//var sum = function() {
//  var y = 1;
//  return x + y;
//};


//function log(str){
//    console.log(str);
//}
//
//log("Hello");

//alert('alert');
//
//var who = prompt('당신은 누구세요?');
//
//var isDelete = confirm('정말 삭제합니까?');
//
//var enc = encodeURIComponent('카카오');
//decodeURIComponent(enc);
//
//isNaN('1'); //숫자 여부
//
//parseInt('12');
//parseInt('09', 10); //항상 두번째 인자 주는 습관
//parseFloat('10.33');
//

//var nick = 'aji'; //전역변수
//
//function test() {
//  var age = 30; //지역변수
//  console.log(nick, age);
//}
//
//test();
//console.log(age);

//function sum(x, y) {
//  if (!y)
//  console.log(x + y);
//}
//sum(3);

//var text = 'abc def ghi jkl abc def'; // 대상 문자열
//var testReg = /abc/; // 찾을 문자열
//var result = testReg.test(text);
//
//console.log(result); // true

var todos = ['var1', 'var2'];
var updateTodo = 'var2';
var updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});

var addIndex = todos.map(function(todo){
    if (todo === addIndex){
        return 'var4';
    }
    return todo;
});

todos[updateIndex] = 'var3';
console.log(todos);

console.log(addIndex);