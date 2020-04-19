function changecolormove() {
    document.querySelector("h1").style.color = "red";
}
function changecolorx2() {
    document.querySelector("h1").style.color = "green";
}
function mark() {
    let character = document.querySelector('character');
    let total = 5;
    let score = 0;
    if (document.querySelector('#numbox').value==(7+5)) {
        character.className = "pos-first-right col-9";
        score++;
    } else {
        character.className = "pos-first-wrong col-9";
        score = score==0 ? 0 : score--;
    }
    document.querySelector("results").innerHTML = score + "/" + total;
}