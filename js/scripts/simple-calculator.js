document.querySelectorAll(".btn-input").forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('display').value += btn.textContent;
    });
});

function clearAll(){
    document.getElementById('display').value = '';
}

function backspace(){
    var n = document.getElementById('display').value;
    document.getElementById('display').value = n.substr(0, n.length - 1);
}

function equals(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
}