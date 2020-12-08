let hamburger = document.querySelector('#hamburger');
let close = document.querySelector('#close');
let slide = document.querySelector('.slide');



hamburger.addEventListener('click', sideMenu);
close.addEventListener('click',closeSideMenu);



function sideMenu(e){
	slide.style.right = '0px';
	
}

function closeSideMenu(e){
	slide.style.right = '-300px';
}