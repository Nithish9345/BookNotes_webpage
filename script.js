var plus = document.querySelector(".plus-btn")
var overlaybox = document.querySelector("#overlay-box")
var popupbox = document.querySelector(".pop-box")

plus.addEventListener("click", function(event){
    overlaybox.style.display = "block"
    popupbox.style.display = "block"

})

cancel = document.querySelector("#Cancel-btn")

cancel.addEventListener("click", function(event){
    event.preventDefault()
    overlaybox.style.display = "none"
    popupbox.style.display = "none"
})

var addbtn = document.querySelector("#add-btn")
var container = document.querySelector(".container")
var titleval = document.getElementById("book-title-ip")
var authorval = document.getElementById("book-author-ip")
var shortdp = document.getElementById("text-area")

addbtn.addEventListener("click", function(event){

        event.preventDefault()
        var div = document.createElement("div")
        div.setAttribute("class","book-container")
        div.setAttribute('onclick', "del(event)")
        div.innerHTML = `<h1>${titleval.value}</h1>
        <h5>${authorval.value}</h5>
        <p>${shortdp.value}</p>
        <button>Delete</button>`
        container.append(div)
        overlaybox.style.display = "none"
        popupbox.style.display = "none"
        titleval.value = null
        authorval.value = null
        shortdp.value = null
    
})

function del(event){
    event.target.parentElement.remove()
}