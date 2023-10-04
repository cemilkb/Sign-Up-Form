let inputs = document.querySelectorAll("input")
let password = document.querySelector(`input[name="password"]`)
let password2 = document.querySelector(`input[name="password2"]`)
let sButton = document.querySelector("#s-button")
let check = null
let ok = 0
console.log(password.value)




// function

function validation(e) {


    if (e.validity.valid === false) {
        e.style.borderBottom = "1px solid red"
        e.style.backgroundColor = " rgba(255, 0, 0, 0.3)"
        let span = document.querySelector(`span[id=${e["name"]}]`)
        span.style.display = "block"
    } else {
        e.style.borderBottom = "1px solid green"
        e.style.backgroundColor = "rgba(4, 255, 0, 0.1)"
        let span = document.querySelector(`span[id=${e["name"]}]`)
        span.style.display = "none"
    }


    if (e["name"] === "password") {
        check = e.value
    }

    if (e["name"] === "password2") {
        if (e.value !== check) {
            e.style.borderBottom = "1px solid red"
            e.style.backgroundColor = " rgba(255, 0, 0, 0.3)"
            let span = document.querySelector(`span[id=${e["name"]}]`)
            span.style.display = "block"
        }
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

if (password.value === password2.value) {
    password2.validity.valid = false
}


sButton.addEventListener("click", (e) => {

})

