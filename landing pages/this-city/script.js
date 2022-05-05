let icons = [...document.querySelectorAll(".sideIcons img")]
window.addEventListener("load",()=>{
    for (let i = 0; i < icons.length; i++) {
        setTimeout(() => {
            setInterval(() => {
                icons[i].classList.add("sidepositions")
            }, 30+100);
        },1800)
    }
})