let x = 1;
let time;
function setime() {
    document.getElementsByTagName("input")[1].value = x;
    x++;
}
function get() {
    time = window.setInterval(setime, 0.1)
}
function drop() {
    window.clearInterval(time);
    let second = x / 1000;
    document.getElementsByTagName("span")[0].innerText = second;
    x = 1;
}