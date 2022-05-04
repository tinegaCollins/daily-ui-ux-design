let icons = [...document.querySelectorAll(".sideIcons img")]
window.addEventListener("load",()=>{
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add("sidepositions")
    }
})