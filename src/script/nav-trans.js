var nav = document.querySelector(".nf-nav");
document.body.addEventListener('scroll',function(){
    if ( document.documentElement.scrollTop !== 0){
        nav.style.backgroundColor = "#0d0d0d"
        nav.style.backgroundImage = "#fff"
        console.log(document.documentElement.scrollTop)
    }
})
console.log('fuck'