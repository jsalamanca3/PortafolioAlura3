const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.nav-menu-buttons')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("open")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('open')
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("open")
    }
})