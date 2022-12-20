var count = 0;
function plus() {
    count++;
    const a = document.getElementById('result');
    a.innerHTML = count;
}
function minus() {
    count--;
    if (count >= 0) {
        const a = document.getElementById('result');
        a.innerHTML = count;

    } else {
        const a = document.getElementById('result');
        count = 0;
        a.innerHTML = count;
    }
}

var MainImg = document.getElementById('MainImg');
var smallingImg = document.getElementsByClassName('small-img');

smallingImg[0].onclick = function () {
    MainImg.src = smallingImg[0].src
}
smallingImg[1].onclick = function () {
    MainImg.src = smallingImg[1].src
}
smallingImg[2].onclick = function () {
    MainImg.src = smallingImg[2].src
}
smallingImg[3].onclick = function () {
    MainImg.src = smallingImg[3].src
}
