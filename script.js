"use strict";

//  -->> button to change theme
const themeBtn = document.getElementById('theme-btn')
const body = document.body

themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('lightbulb_on')
    body.classList.toggle('dark_body')
})


// -->> Change header title of navbar when width is lower than 200 
const navbar = document.getElementById('navbar')
const navbarTitle = document.getElementById('nav-title')

const assignNavTitle = () => {
    if(navbar.offsetWidth < 200){
        navbarTitle.innerText = "JS"
    }else{
        navbarTitle.innerText = "JS Documentation"
    }
}

window.addEventListener('resize', () => {
    assignNavTitle()
})

navbar.addEventListener('resize', () => {
    consolelog(navbar.offsetWidth)
})

window.onload = assignNavTitle()

// -->> button to open menu on mobile screen
const mobileBtn = document.getElementById('mobile_btn')
const mobileBtnIcon = document.getElementById('mobile_btn_icon')

mobileBtn.addEventListener('click', () => {
    navbar.classList.toggle('navbar-open')
    if(navbar.classList.contains('navbar-open')){
        mobileBtnIcon.classList.replace('fa-angles-right', 'fa-angles-left')
        navbarTitle.innerText = "JS Documentation"
    }else{
        mobileBtnIcon.classList.replace('fa-angles-left', 'fa-angles-right')
        navbarTitle.innerText = "JS"
    }
      
})
