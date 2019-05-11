var rate = 0.28

const calculate = (rate, val) => {
    return +((val * rate).toFixed(2));
}
const callback = (event) => {
    console.log(event.target)
    console.log(event.target.value)
    const res = calculate(rate, event.target.value)
    document.getElementById("dest").value = res
}
document.addEventListener('DOMContentLoaded', function(){ 
    // your code goes here
    document.getElementById("source").focus();
    document.getElementById("source").value = ''
    document.getElementById('source').addEventListener('keyup', callback, false);
}, false);
