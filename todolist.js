var addbutton = document.getElementById('addData');
var input = document.getElementById('inputData');
var field = document.querySelector('.dataField');
addbutton.onclick = function buttonclick(){
    var text = document.createTextNode(input);
    var li = document.createElement('li');
    li.appendChild(text);
    if (input.value != ""){
        field.appendChild(li);
        li.innerHTML= input.value;
        input.value = "";
        li.addEventListener('click', function(){
            li.style.textDecoration = "line-through";
        })
    }
    else {
        alert("Please input your agenda or task down below")
    }
}