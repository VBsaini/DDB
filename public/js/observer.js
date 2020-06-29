const options = {
    threshold:0
}
const headimg = document.getElementById('head-back-img');
const navbar = document.getElementById('navbar')
const navObserver = new IntersectionObserver((entires, navObserver) => {
    entires.forEach(entry => {
        if(entry.isIntersecting){
            navbar.classList.remove('show')
        } else {
            navbar.classList.add('show')
        }
    })
}, options)


navObserver.observe(headimg)