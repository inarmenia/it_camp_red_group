let buttons = document.getElementsByClassName("pet-link");
console.log(buttons);

function tpelLink(){
    let count = 1;
    for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute("href","pet.html?id=" + count);
        count++;
    }
}
tpelLink();


