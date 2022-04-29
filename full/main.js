let menu = document.querySelector('.icon')
let maodal =document.querySelector('.menu-bar')

menu.addEventListener('click' ,function(){
    maodal.style.display="block"
    menu.style.display ="none"
})

maodal.addEventListener('click',function(){
    maodal.style.display='none'
    menu.style.display='block'
})