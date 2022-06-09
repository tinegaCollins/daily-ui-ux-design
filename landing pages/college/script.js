let bars = document.querySelector("nav img")
let menu = document.querySelector(".links")

bars.addEventListener("click",()=>{
    console.log("clicked")
    menu.classList.toggle("left")
})