var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");
var button = document.querySelector("button");

button.addEventListener("click", function() {
    if(modal.classList.contains("show-modal")) {
        modal.classList.remove("show-modal");
        button.innerText = "Who's got this?";
    } else {
        modal.classList.add("show-modal");
        button.innerText = "You've got this!";
    }

});

modalX.addEventListener("click", function() {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?";
})