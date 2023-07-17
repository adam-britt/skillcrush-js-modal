var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

modal.addEventListener("click", function() {
    if(modal.classList.contains("show-modal")) {
        modalX.classList.add("show-modal");
        modal.innerText = "You've got this!";
    } else {
        modalX.classList.remove("show-modal");
        modal.innterText = "Who's got this?";
    }
});


test