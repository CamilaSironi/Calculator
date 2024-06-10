var content = document.querySelector(".display").innerHTML;

function display(text){
    document.querySelector(".display").innerHTML = text;
}

let btns = document.querySelectorAll(".key");

btns.forEach(btn =>  btn.addEventListener("click", function(){
    content += this.innerHTML;
    display(content);
}));

let btnDelete = document.querySelector(".delete");

btnDelete.addEventListener("click", function(){
    content = "";
    display(content);
});

let btnResult = document.querySelector(".equals");

btnResult.addEventListener("click", function(){
    let result = eval(content);
    display(result);
    content = result;
});
