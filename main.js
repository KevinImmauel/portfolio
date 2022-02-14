const menuIcon = document.getElementsByClassName('menu-logo')
const menuClose = document.getElementsByClassName('fa-xmark')
const menu = document.getElementsByClassName('menu')
const menuLink = document.getElementsByClassName('menu-link')

menuIcon[0].addEventListener("click", () => {
    menu[0].style.cssText = 'display: flex'
});

menuClose[0].addEventListener("click", () => {
    menu[0].style.cssText = 'display: none'
})

for (var i = 0; i <= menuLink.length; i++){
    menuLink[i].addEventListener("click", () => {
        menu[i].style.cssText = 'display: none;'
    })
}