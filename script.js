var onne = document.getElementById('onne');
function addTodisplay(value) {
    onne.value += value;
    
}

function clearDisplay() {
    onne.value = "";
    
}
function cutDisplay () {
    onne.value = onne.value.slice(0,-1);
    
}
function equal () {
    onne.value = eval(onne.value);
    
}