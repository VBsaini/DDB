const options = {
    threshold:0
}

const navbar = document.getElementById('navbar');
const featurespage = document.getElementById('features-header'); 
const navObserver = new IntersectionObserver((entires, navObserver) => {
    entires.forEach(entry => {
        if(entry.isIntersecting){
            navbar.classList.remove('show')
        } else {
            navbar.classList.add('show')
        }
    })
}, options)

navObserver.observe(featurespage);
