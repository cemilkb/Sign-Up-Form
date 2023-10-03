let inputs = document.querySelectorAll("input")
let sButton = document.querySelector("#s-button")

sButton.addEventListener("click", ()=>{
    inputs.forEach(e => {
    
        if (e.validity.valid === false) {
            e.style.borderBottom = "1px solid red"
            e.style.backgroundColor = " rgba(255, 0, 0, 0.3)"
        } else {
            e.style.borderBottom = "1px solid green"
            e.style.backgroundColor = "rgba(4, 255, 0, 0.1)"
        }
    
    });
})