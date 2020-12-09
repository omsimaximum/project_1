let hamburger = document.querySelector('#hamburger');
let close = document.querySelector('#close');
let slide = document.querySelector('.slide');
const counters = document.querySelectorAll('.counter')



hamburger.addEventListener('click', sideMenu);
close.addEventListener('click',closeSideMenu);



function sideMenu(e){
	slide.style.right = '0px';	
}

function closeSideMenu(e){
	slide.style.right = '-300px';
}


window.onscroll = function count (){

if(window.window.scrollY > 100);
counters.forEach(counter => {

	if (counter.innerText === '') {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 350;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
	}
})
}
