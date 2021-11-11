let lights = document.querySelector('.lights')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

lights.onclick = function() {
	body.classList.toggle('dark')
	lights.classList.toggle('active')
}

menuToggle.onclick = function() {
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
}