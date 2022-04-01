console.log("04");

//window.outerWidth
//
//window.name
//
//window.open('http://www.daum.net');
//
//window.opener

//location.href='hhtp://www.daum.net';
//location.reload();

//window.location; 



//              ||DOM||               //

//const element = document.getElementById('wrap'); //selecting by id
//console.log(element);
//
//const element1 = document.querySelector('.item'); //selecting by class
//console.log(element1);
//
//const element2 = document.querySelectorAll('div'); //selecting all datas from named under 'div'
//console.log(element2);

//const div = document.createElement('div');
//div.style.border = '1px solid red';
//div.innerHTML = 'hello!!';
//
//document.body.appendChild(div);

//document.querySelector('#wrap').innerHTML = 11;



//              ||Event||               //

//window.addEventListener('load', function(){
//    this.alert('load');
//    console.log("")
//});


// ~~~~~~~~~~~ Callback function ~~~~~~~~//

//var clickCount = 0;
//function popup(event){
//    console.log(++clickCount);
//    console.log(arguments, this ,event ,event.type,event.currentTarget);
//}
//document.body.addEventListener('click', popup);
//
//document.body.addEventListener('click', function(){
//    console.log("click");
//});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



//var app = document.getElementById("list");
//
//app.addEventListener("click", function(event) {
//    if(event.target.nodeName == "LI"){
//        //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//    }
//});

var link = document.querySelector('daum');
link.addEventListener(click)
