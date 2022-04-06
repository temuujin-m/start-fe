console.log("Quiz 3");


//문제 1
var addRed = document.querySelector(".add-red");
var box = document.querySelector(".box");

function addRedd(){
    box.className+=(" red");
}

addRed.addEventListener('click', () => addRedd());

//문제 2

var addBtn = document.querySelector(".add-btn");
var newDiv = document.createElement("div");
var body = document.body;

function addDiv(){
    body.append(newDiv);
    console.log("fun1");
}

function addClassName(){
    newDiv.className = "box";
    newDiv.className += " red";
    console.log("fun2");
}

addBtn.addEventListener('click', () => addDiv(addClassName()));

//문제 3

var delBtn = document.querySelector(".delete-btn");

delBtn.addEventListener('click', function (){
    newDiv.remove();
    console.log("del clicked");
});


//문제 4 

var textBtn = document.querySelector(".text");


textBtn.addEventListener("click", function(){
  
    box.append(text.value);

});



