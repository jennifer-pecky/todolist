const arr = [];
let input = document.querySelector("#todo-input")
let sumbitbtn = document.querySelector("#add-button")
let list = document.querySelector(".todo-items")

sumbitbtn.addEventListener("click", function (e) {
    e.preventDefault()
    arr.push(input.value)
    console.log(arr)
    list.innerHTML = arr
    input.value = ""
    displaylt()
})



function displaylt() {
    list.innerHTML = "";
    arr.forEach((item, index) => (list.innerHTML += `<li> ${item}</li>`));

}
displaylt()