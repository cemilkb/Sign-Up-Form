let inputs = document.querySelectorAll("input")
let sButton = document.querySelector("#s-button")
// function

function validation(e) {
    if (e.validity.valid === false) {
        e.style.borderBottom = "1px solid red"
        e.style.backgroundColor = " rgba(255, 0, 0, 0.3)"
        let span = document.querySelector(`span[id=${e["name"]}]`)
        span.style.display = "block"
        console.log(span)
    } else {
        e.style.borderBottom = "1px solid green"
        e.style.backgroundColor = "rgba(4, 255, 0, 0.1)"
        let span = document.querySelector(`span[id=${e["name"]}]`)
        span.style.display = "none"
    }
}


//Event listener

inputs.forEach(e => {
    e.addEventListener("click", () => {
        this.addEventListener("focusout", () => {
            validation(e)
        })
    })
});


sButton.addEventListener("click", (e) => {
    inputs.forEach(e => {
        validation(e)
    })
})

