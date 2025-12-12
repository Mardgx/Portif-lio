let nav = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY
    if(scrollTop > 0){
        nav.classList.add('rolar')
    } else {
        nav.classList.remove('rolar')
    }
})